<template>
    <div>

        <div class="stats-header">
            <h3>{{ getPerfilData.user.name }}</h3>
            <p> {{ getPerfilData.posts }} tweets </p>
        </div>

        <div class="stats-content">
            <div class="stats-avatar">
                <img v-if="getPerfilData.ownperfil" :src="getUserData.avatar" alt="">
                <img v-else :src="getPerfilData.user.avatar" alt="">
            </div>
            <div class="cover-img">

            </div>
            <div class="stats-section">
                <div class="edit-button-div">
                    <button v-if="getPerfilData.ownperfil" @click="changeShowEditPerfilModal(true)">Edit Perfil</button>
                    <button v-else @click="followUser">{{ getPerfilData.isfollowing ? 'Following' : 'Follow' }}</button>
                </div>
                <div class="name-div">
                    <h3>{{ getPerfilData.user.name }}</h3>
                    <p>@{{ getPerfilData.user.username }}</p>
                </div>
                <div class="since-div">
                    <p>Joined in {{ getPerfilData.user.created_at | formatJoinDate }}</p>
                </div>
                <div class="followers-stats">
                    <span>{{ getPerfilData.stats.is_following }} Following</span> <span>{{ getPerfilData.stats.was_followed }} Followers</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
import { mapMutations, mapGetters, mapActions } from 'vuex'
import moment from 'moment'

export default {
    data () {
        return {
            
        }
    },
    methods: {
        ...mapMutations([
            'changeShowEditPerfilModal'
        ]),
        ...mapActions([
            'actionUserData'
        ]),
        followUser () {

            if ( !this.getPerfilData.isfollowing ) {
                this.$http.post('/follow', {
                    id: this.getUserData.id,
                    api_token: this.getUserData.api_token,
                    followed_id: this.getPerfilData.user.id
                })
                .then(res => {
                    if (res.data.success) {
                        const data = this.getPerfilData
                        data.isfollowing = true

                        this.$store.dispatch('actionPerfilData', data)
                    } 
                })
            } else {
                this.$http.delete(`/follow/${this.getPerfilData.user.id}`, {
                    params: {
                        id: this.getUserData.id,
                        api_token: this.getUserData.api_token
                    }
                })
                .then(res => {
                    if (res.data.success) {
                        const data = this.getPerfilData
                        data.isfollowing = false
                        
                        this.$store.dispatch('actionPerfilData', data)
                    }
                })
            }
            

        }
    },
    filters: {
        formatJoinDate (value) {
            return moment(value).format('MMMM D, YYYY')
        }
    },
    computed: {
        ...mapGetters([
            'getUserData', 'getPerfilData'
        ])
    }

}
</script>

<style>

.stats-header {
    padding: 12px;
}

.stats-header p {
    font-size: 12px;
    color: rgb(101, 119, 134);
}

.cover-img {
    height: 200px;
    background: #ccc;
}

.stats-section {
    padding: 6px;
}

.edit-button-div {
    padding: 6px;
    display: flex;
    justify-content: flex-end;
}

.edit-button-div button {
    padding: 8px 12px;
    border: 1px solid #107C10;
    border-radius: 50px;
    background: #fff;
    color: #107C10;
    font-weight: bold;
    letter-spacing: 0.05em;
}

.name-div {
    padding: 6px;
}

.since-div {
   padding: 6px; 
}

.followers-stats {
    padding: 6px;
}

.stats-avatar img {
    width: 120px;
    height: 120px;
    border: 4px solid #fff;
    border-radius: 150px;
}

.stats-avatar {
    position: absolute;
    top: 130px;
    left: 10px;
}

.stats-content {
    position: relative;
}

</style>