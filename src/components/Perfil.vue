<template>
    <div class="container">

        <div class="content">

            <left-section />

            <div class="main-section">

                <stats-box />
                
                <div class="separator"></div>

                <timiline-post />

            </div>

            <div class="right-section">
                <search page="perfil" />
            </div>

        </div>

        <modal />

    </div>
</template>

<script>

import LeftSection from '../components/LeftSection'
import Search from '../components/Search'
import PerfilStatsBox from '../components/PerfilStatsBox'
import TimeLinePost from '../components/TimeLinePost'
import EditPerfilModal from '../components/EditPerfilModal'
import { mapActions } from 'vuex'
// import { log } from 'util'

export default {

    components: {
        'left-section': LeftSection,
        'search': Search,
        'stats-box': PerfilStatsBox,
        'timiline-post': TimeLinePost,
        'modal': EditPerfilModal
    },
    computed: {
        posts () {
            return this.$store.getters.getPosts
        }
    },
    methods: {
        ...mapActions([
            'initPostsAction'
        ])
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