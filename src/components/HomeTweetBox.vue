<template>
    <div class="tweet-box">
        <loading :active.sync="isLoading"
        :loader="loader"
        :color="color"
        :is-full-page="fullPage"></loading>

        <div class="tweet-box-header">
            <p>Home Page</p>
        </div>

        <div class="tweet">

            <div class="tweet-avatar">
                <img :src="getUserData.avatar" alt="">
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
import { mapGetters } from 'vuex'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';
import { apiStorePost } from '../services/api';

export default {

    data() {
        return {
            user: '',
            postContent: '',
            isLoading: false,
            fullPage: true,
            loader: 'dots',
            color: '#107c10'
        }
    },
    components: {
        Loading
    },
    methods: {

        async storePost ()
        {
            this.isLoading = true;

            const response = await apiStorePost(this.postContent);
            
            if (response)
                this.$store.dispatch('addPostAction', response);

            this.isLoading = false;
        }
    },
    computed: {
        ...mapGetters([
            'getUserData'
        ])
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
    cursor: pointer;
}

</style>