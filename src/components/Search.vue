<template>
    <div>
        <div class="search">
            <span>
                <img src="../assets/lupa.svg" width="20px" alt="">
            </span>
            <input v-model="name" @keyup="getUsers" @keyup.enter="submitSearch" type="text" placeholder="Search on Twitter">
        </div>

        <div v-if="getExploreResults.length > 0 && show" class="results">
            <div class="result-row" v-for="item in getExploreResults" :key="item.id" @click="navigate(item.username)">
                <div class="result-avatar">
                    <img :src="item.avatar" alt="">
                </div>
                <div class="result-name">
                    <div class="name">{{ item.name }}</div>
                    <div class="username">@{{ item.username }}</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import { apiSearchUsers } from '../services/api';

export default {

    props: ['page'],
    data() {
        return {
            user: '',
            name: '',
            show: true
        }
    },
    computed: {
        ...mapGetters([
            'getExploreResults'
        ]),
    },
    methods: {
        ...mapActions([
            'setExploreResultsAction'
        ]),
        async getUsers () {

            if ( this.name.length > 0 ) {
                const response = await apiSearchUsers(this.name);
                if (response)
                    this.$store.dispatch(
                        'setExploreResultsAction',
                        response.peoples
                    );
            } else {
                this.$store.dispatch('setExploreResultsAction', [])
            }
            
        },
        submitSearch () {
            this.show = false;
            this.name = "";
            if ( this.page != 'explore' ) {
                this.$router.push('explore');
            }

        },
        navigate(route) {
            this.$router.push(route).catch(() => {})
        }
    },
    created() {
        this.$store.dispatch('setExploreResultsAction', [])

        if ( this.page == 'explore' ) {
            this.show = false
        } else {
            this.show = true
        }
    }

}
</script>

<style>

.search {
    display: flex;
    flex-direction: row;
}

.search span {
    border: 1px solid #ccc;
    border-right: none;
    padding-top: 6px;
    padding-bottom: 2px;
    padding-left: 18px;
    padding-right: 16px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
}

.search input {
    width: 100%;
    border: 1px solid #ccc;
    outline: none;
    border-left: none;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
}

.results {
    width: 90%;
    border: 1px solid #eee;
    border-radius: 5px;
    position: absolute;
    background: #fff;
    z-index: 10;
}

.result-row {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #eee;
    cursor: pointer;
}

.result-avatar img {
    width: 40px;
    border-radius: 50px;
}

.result-name {
    display: flex;
    flex-flow: wrap;
    /* align-items: stretch; */
    padding-left: 10px;
}

.result-name div {
    flex: 1 100%;
}

.name {
    font-weight: bold;
    letter-spacing: 0.05em;
}

.username {
    font-size: 14px;
    color: rgb(101, 119, 134);
}

</style>