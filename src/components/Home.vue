<template>
    <div class="container">

        <div class="content">

            <left-section />

            <div class="main-section">
                <tweet-box />

                <div class="separator"></div>
                
                <timiline-post />
            </div>

            <div class="right-section">
                <search page="home" />
            </div>

        </div>

    </div>
</template>

<script>

import LeftSection from '../components/LeftSection'
import HomeTweetBox from '../components/HomeTweetBox'
import Search from '../components/Search'
import TimeLinePost from '../components/TimeLinePost'
import { mapActions, mapGetters } from 'vuex'

export default {

    components: {
        'left-section': LeftSection,
        'tweet-box': HomeTweetBox,
        'search': Search,
        'timiline-post': TimeLinePost
    },
    data () {
        return {
            user: ''
        }
    },
    computed: {
        ...mapGetters([
            'getPosts'
        ])
    },
    methods: {
        ...mapActions([
            'initPostsAction'
        ])
    },
    mounted () {

    },
    created() {
        this.$store.dispatch('initPostsAction')
    }

}
</script>

<style scoped>

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

.right-section {
    width: 25%;
    padding: 12px;
}

.separator {
    background: rgb(230, 236, 240);
    height: 10px;
}

</style>