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
import { mapActions, mapGetters, mapMutations } from 'vuex'

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
    computed: {
        ...mapGetters([
            'getUserData'
        ])
    },
    methods: {
        ...mapActions([
            'initPostsAction', 'actionPerfilPosts', 'actionPerfilData'
        ]),
        ...mapMutations([
            'mutatePerfilPosts'
        ]),
        fetchData () {
            
            this.$http.get('/get_perfil', { 
                params: {
                    id: this.getUserData.id,
                    api_token: this.getUserData.api_token,
                    username: this.$route.params.username
                }
            })
            .then(res => {
                const { data } = res

                if (data.success) {

                    this.perfilExists   = true
                    this.$store.dispatch('actionPerfilData', data)

                } else {
                    this.notFound = "Not Found"
                }
                        

            })

            this.$store.dispatch('actionPerfilPosts', this.$route.params.username)
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