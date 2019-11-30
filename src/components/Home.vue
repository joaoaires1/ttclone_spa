<template>
    <div class="container">

        <div class="content">

            <left-section />

            <div class="main-section">
                <tweet-box />

                <div class="separator"></div>
            </div>

            <div class="right-section">
                <input type="text" placeholder="Search on Twitter">
            </div>

        </div>

    </div>
</template>

<script>
import LeftSection from '../components/LeftSection'
import HomeTweetBox from '../components/HomeTweetBox'

export default {

    components: {
        'left-section': LeftSection,
        'tweet-box': HomeTweetBox
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
    max-width: 1200px;
    display: flex;
    justify-content: center;
}

.main-section {
    width: 45%;
    border-left: 2px solid #e5ffe5;
    border-right: 2px solid #e5ffe5;
}

.right-section {
    width: 30%;
}

.separator {
    background: rgb(230, 236, 240);
    height: 10px;
}

</style>