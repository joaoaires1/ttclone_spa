<template>
    <div class="container">

        <div class="content">

            <left-section />

            <div class="main-section">
                <h1>main</h1>
            </div>

            <div class="right-section">
                <h1>right</h1>
            </div>

        </div>

    </div>
</template>

<script>
import LeftSection from '../components/LeftSection'

export default {

    components: {
        'left-section': LeftSection
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

</style>