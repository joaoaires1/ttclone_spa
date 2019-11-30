<template>
    <div class="search">
        <span>
            <img src="../assets/lupa.svg" width="20px" alt="">
        </span>
        <input type="text" placeholder="Search on Twitter">
    </div>
</template>

<script>
export default {

}
</script>

<style>

.search {
    display: flex;
    flex-direction: row;
}

.search span {
    border: 1px solid #ccc;
    border-right: none;
    padding-top: 6px;
    padding-bottom: 2px;
    padding-left: 18px;
    padding-right: 16px;
    border-top-left-radius: 50px;
    border-bottom-left-radius: 50px;
}

.search input {
    width: 100%;
    border: 1px solid #ccc;
    outline: none;
    border-left: none;
    border-top-right-radius: 50px;
    border-bottom-right-radius: 50px;
}

</style>