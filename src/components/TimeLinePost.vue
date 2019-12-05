<template>
    <div class="timeline-post">

        <div class="post-avatar">
            <img src="../assets/avatar.png" alt="">
        </div>

        <div class="post">
            <div class="post-header">
                <span>{{ postData.user.name }}</span> @{{ postData.user.username }} - {{ postData.created_at }}
            </div>
            <div class="post-content">
                {{ postData.text }}                
            </div>            
        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { log } from 'util'

export default {
    props: ['post'],
    data() {
        return {
            postData: ''
        }
    },
    created () {
        log('qq', this.post)
        this.postData = this.post

    },
    methods: {
        ...mapActions([
            'changeNameAction'
        ])
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