<template>
    <div>
        <div v-for="post in (page == 'perfil' ? getPerfilPosts : getPosts)" :key="post.id" class="timeline-post">

            <div class="post-avatar">
                <img v-if="getUserData.id == post.user_id" :src="getUserData.avatar" alt="">
                <img v-else :src="post.user.avatar" alt="">
            </div>

            <div class="post">
                <div class="post-header">
                    <span>{{ post.user.name }}</span> @{{ post.user.username }} - {{ post.created_at }}
                </div>
                <div class="post-content">
                    {{ post.text }}                
                </div>            
            </div>

        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex'

export default {
    props: ['page'],
    data() {
        return {
            postData: ''
        }
    },
    computed: {
        ...mapGetters([
            'getPosts', 'getUserData', 'getPerfilPosts'
        ])
    },
    methods: {
        ...mapActions([
            
        ])
    },
    mounted () {
        
    }
}
</script>

<style>

.timeline-post {
    display: flex;
    border-bottom: 1px solid #eee;
}

.post-avatar {
    padding: 12px;
}

.post-avatar img {
    width: 50px;
    border-radius: 50px;
}

.post {
    padding: 12px;
}

.post-header {
    color: rgb(101, 119, 134);
}

.post-header span {
    color: #000;
    font-weight: bold;
}

.post-content {
    margin-top: 5px;
    font-size: 15px;
}

</style>