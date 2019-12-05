<template>
    <div class="timeline-post">

        <div class="post-avatar">
            <img src="../assets/avatar.png" alt="">
        </div>

        <div class="post">
            <div class="post-header">
                <span>{{ postData.user.name }}</span> @{{ postData.user.username }} - {{ timeOfPost }}
            </div>
            <div class="post-content">
                {{ postData.text }}                
            </div>            
        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex'
import moment from 'moment'

export default {
    props: ['post'],
    data() {
        return {
            postData: ''
        }
    },
    computed: {
        timeOfPost () {
            let date = moment(this.postData.created_at).format("YYYY-MM-DD HH:mm:ss")
            let now = moment()
            let dif = now.diff(date, 'minutes')

            if (dif == 0) {
                dif = now.diff(date, 'seconds')
                return `${dif} sec`
            }

            if ( dif < 60 ) {
                return `${dif} min`
            } else {
                dif = dif / 60

                if ( dif > 24 ) {
                    return moment(this.postData.created_at).format("YYYY-MM-DD")
                }

                return `${Math.round(dif)} h`
            }
        }
    },
    created () {
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