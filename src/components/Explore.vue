<template>

    <div class="container">

        <div class="content">

            <left-section />

            <div class="main-section">

                <div class="header-main">
                    <search page="explore" />
                </div>

                <div class="list-results">
                    <div class="list-title">
                        <p>People</p>
                    </div>
                </div>

                <div v-if="getExploreResults.length > 0">

                    <div class="result-explore" v-for="item in getExploreResults" :key="item.id" @click="navigate(item.username)">
                        <div class="result-avatar">
                            <img src="../assets/avatar.png" alt="">
                        </div>

                        <div class="result-name">
                            <div class="name">{{ item.name }}</div>
                            <div class="username">@{{ item.username }}</div>
                        </div>
                    </div>

                </div>
            </div>

            <div class="right-section">
                <div class="who-follows">
                    <h3>Who to follow</h3>
                </div>
            </div>

        </div>

    </div>

</template>

<script>
import LeftSection from '../components/LeftSection'
import Search from '../components/Search'
import { mapGetters } from 'vuex'
// import { log } from 'util'

export default {

    components: {
        'left-section': LeftSection,
        'search': Search
    },
    data () {
        return {
            
        }
    },
    computed: {
        ...mapGetters([
            'getExploreResults'
        ])
    },
    methods: {
        navigate(route) {
            this.$router.push(route).catch(() => {})
        }
    },
    mounted () {

    },
    created () {

    }

}
</script>

<style>

.container {
    width: 100%;
    display: flex;
    justify-content: center;
}

.content {
    width: 100%;
    height: 100%;
    max-width: 1200px;
    display: flex;
    justify-content: center;
}

.main-section {
    width: 50%;
    border-left: 1px solid #e5ffe5;
    border-right: 1px solid #e5ffe5;
}

.header-main {
    padding: 15px;
    border-bottom: 1px solid #eee;
}

.list-title {
    padding: 15px;
    border-bottom: 1px solid #eee;
}

.list-title p {
    font-weight: bold;
    letter-spacing: 0.05em;
    font-size: 18px;
}

.result-explore {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #eee;
}

.right-section {
    width: 25%;
    padding: 12px;
}

.who-follows {
    padding: 10px;
    border-radius: 10px;
    background: rgb(245, 248, 250);;
}

</style>