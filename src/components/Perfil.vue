<template>
    <div class="container">

        <div class="content">

            <left-section />

            <div v-if="perfilExists" class="main-section">

                <stats-box :ownperfil="ownPerfil" :user="user" />
                
                <div class="separator"></div>

                <timiline-post page="perfil" />

            </div>

            <div v-else class="main-section">
                <h1>Página não existe</h1>
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
            ownPerfil: false,
            user: null
        }
    },
    computed: {
        ...mapGetters([
            'getUserData'
        ])
    },
    methods: {
        ...mapActions([
            'initPostsAction', 'actionPerfilPosts'
        ]),
        ...mapMutations([
            'mutatePerfilPosts'
        ])
    },
    created() {

        this.$http.get('/get_perfil', { 
            params: {
                id: this.getUserData.id,
                api_token: this.getUserData.api_token,
                username: this.$route.params.username
            }
        })
        .then(res => {
            
            if (res.data.success) {
                this.perfilExists = true
                this.user = res.data.user

                if ( res.data.user.username == this.getUserData.username ) {
                    this.ownPerfil = true
                } 
            }
                       

        })

        this.$store.dispatch('actionPerfilPosts', this.$route.params.username)
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

.main-section h1 {
    text-align: center;
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