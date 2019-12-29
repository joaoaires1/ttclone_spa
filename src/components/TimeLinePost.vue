<template>
    <div>
        <div v-for="post in getPosts" :key="post.id" class="timeline-post">

            <div class="post-avatar">
                <img v-if="getUserData.id == post.user.id" :src="getUserData.avatar" alt="">
                <img v-else :src="post.user.avatar" alt="">
            </div>

            <div class="post">
                <div class="post-header">
                    <span>{{ post.user.name }}</span> @{{ post.user.username }} - {{ post.created_at | formatDate }}
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
import { log } from 'util'
import moment from 'moment'

export default {
    props: ['post'],
    data() {
        return {
            postData: '',
            a: 'aaaaa'
        }
    },
    computed: {
        ...mapGetters([
            'getPosts', 'getUserData'
        ])
    },
    filters: {
        formatDate: function (value) {
            if ( !value ) return ''

            let date = moment(value).format("YYYY-MM-DD HH:mm:ss")
            let now  = moment()
            let dif  = now.diff(date, 'minutes')

            if (dif == 0) {
                dif = now.diff(date, 'seconds')
                return `${dif} sec`
            }

            if ( dif < 60 ) {
                return `${dif} min`
            } else {
                dif = dif / 60

                if ( dif > 24 ) {
                    return `${now.diff(date, 'days')} d`
                }

                return `${Math.round(dif)} h`
            }
        }
    },
    methods: {
        ...mapActions([
            'changeNameAction'
        ])
    },
    mounted () {
        log(this.getPosts)
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