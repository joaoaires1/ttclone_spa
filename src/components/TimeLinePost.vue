<template>
    <div class="timeline-post">

        <div class="post-avatar">
            <img src="../assets/avatar.png" alt="">
        </div>

        <div class="post">
            <div class="post-header">
                <span>{{ this.$store.state.name }}</span> @joaoaires - 1h
            </div>
            <div class="post-content">
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Quia fuga a veniam, eligendi distinctio ex et iste minima magni nesciunt unde ad nobis sequi culpa tenetur nostrum obcaecati similique quibusdam.
            </div>            
        </div>

    </div>
</template>

<script>
import { mapActions } from 'vuex'

export default {
    created () {
        this.$store.dispatch('changeNameAction', 'Joao')
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