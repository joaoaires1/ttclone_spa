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
import { mapGetters } from 'vuex'

export default {

    components: {
        'left-section': LeftSection,
        'tweet-box': HomeTweetBox,
        'search': Search,
        'timiline-post': TimeLinePost
    },

    computed: {
        ...mapGetters([
            'getUserData'
        ])
    },
    created() {
        this.$store.dispatch(
            'initPostsAction',
            this.getUserData.username
        );
    }

}
</script>

<style scoped>

.separator {
    background: rgb(230, 236, 240);
    height: 10px;
}

</style>