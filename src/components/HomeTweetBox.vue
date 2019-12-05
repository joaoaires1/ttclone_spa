<template>
    <div class="tweet-box">

        <div class="tweet-box-header">
            <p>Home Page</p>
        </div>

        <div class="tweet">

            <div class="tweet-avatar">
                <img src="../assets/avatar.png" alt="">
            </div>

            <div class="tweet-text">
                <textarea v-model="postContent" placeholder="What is happening?" maxlength="140"></textarea>
                <div class="tweet-text-submit">
                    <button @click="storePost" >Tweet</button>
                </div>                
            </div>

        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex'
import { log } from 'util'
export default {

    data() {
        return {
            user: '',
            postContent: ''
        }
    },
    methods: {
        ...mapActions([
            'addPostAction'
        ]),
        storePost ()
        {
            this.$http.post('/posts', {
                id: this.user.id,
                api_token: this.user.api_token,
                text: this.postContent
            }).then(res => {

                this.$store.dispatch('addPostAction', [res.data])

            }).catch(err => log(err))
        }
    },
    created () {
        const isAuthenticated = JSON.parse(localStorage.getItem('authenticatedUser'))
        this.user = isAuthenticated
    }

}
</script>

<style>

.tweet-box-header {
    border-bottom: 1px solid #eee;
    padding: 12px; 
}

.tweet-box-header p {
    font-weight: bold;
    letter-spacing: 0.05em;
}

.tweet {
    display: flex;
}

.tweet-avatar {
    padding: 12px;
}

.tweet-avatar img {
    width: 50px;
    border-radius: 50px;
}

.tweet-text {
    padding: 12px;
    width: 100%;
}

textarea {
    width: 100%;
    font-size: 16px;
    font-weight: bold;
    letter-spacing: 1px;

    padding: 12px;
    overflow-y: hidden;
    border: none;
    resize: none;
    outline: none;
}

.tweet-text-submit {
    display: flex;
    justify-content: flex-end;
    padding-top: 10px;
    padding-right: 10px;
}

.tweet-text-submit button {
    border: none;
    border-radius: 50px;
    padding: 8px 14px;
    background: #107C10;
    color: #FFF;
    font-weight: bold;
    letter-spacing: 0.05em;
}

</style>