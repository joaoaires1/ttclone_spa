<template>
    <div>
        <div class="search">
            <span>
                <img src="../assets/lupa.svg" width="20px" alt="">
            </span>
            <input v-model="name" @keyup="getUsers" type="text" placeholder="Search on Twitter">
        </div>

        <div v-if="results.length > 0" class="results">
            <div class="result-row" v-for="item in results" :key="item.id">
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
</template>

<script>
export default {

    data() {
        return {
            user: '',
            name: '',
            results: []
        }
    },
    methods: {
        getUsers () {

            if ( this.name.length > 0 ) {
                this.$http.get('/search', { params: {
                    id: this.user.id,
                    api_token: this.user.api_token,
                    name: this.name
                } })
                .then( res => {
                    this.results = res.data
                } )
            } else {
                this.results = []
            }
            
        }
    },
    created() {
        const isAuthenticated = JSON.parse(localStorage.getItem('authenticatedUser'))
        this.user = isAuthenticated
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
    border: 1px solid #eee;
    border-radius: 5px;
}

.result-row {
    display: flex;
    padding: 10px;
    border-bottom: 1px solid #eee;
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