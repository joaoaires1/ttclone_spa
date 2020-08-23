<template>
    <div class="container">

        <div class="content">

            <left-section />

            <div v-if="perfilExists" class="main-section">

                <stats-box />
                
                <div class="separator"></div>

                <timiline-post page="perfil" />

            </div>

            <div v-else class="main-section">
                <h1>{{ notFound }}</h1>
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
import { apiGetPosts } from '../services/api'
import {log} from 'util'

export default {

    components: {
        'left-section': LeftSection,
        'search': Search,
        'stats-box': PerfilStatsBox,
        'timiline-post': TimeLinePost,
        'modal': EditPerfilModal
    },
    data () {
        return {
            perfilExists: false,
            notFound: ''
        }
    },
    methods: {
        async fetchData () {
            const response = await apiGetPosts(
                this.$route.params.username,
                true,
                1
            );

            if (response) {
                log(response.user)
                this.perfilExists   = true;
                this.$store.dispatch('actionPerfilData', response.user);
                this.$store.dispatch('actionPerfilPosts', response.posts);
            } else {
                this.notFound = "Not Found"
            }
        }
    },
    watch: {
        '$route.params': {
            handler() {
                this.fetchData()
            },
            immediate: true,
        }
    }
}
</script>

<style scoped>

.separator {
    background: rgb(230, 236, 240);
    height: 10px;
}

</style>