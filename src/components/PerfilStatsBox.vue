<template>
    <div>

        <div class="stats-header">
            <h3>João Aires</h3>
            <p> 10 tweets </p>
        </div>

        <div class="stats-content">
            <div class="stats-avatar">
                <img src="../assets/avatar.png" alt="">
            </div>
            <div class="cover-img">

            </div>
            <div class="stats-section">
                <div class="edit-button-div">
                    <button>Edit Perfil</button>
                </div>
                <div class="name-div">
                    <h3>Joao Aires</h3>
                    <p>@joaoaires</p>
                </div>
                <div class="since-div">
                    <p>Ingressou em outubro de 2016</p>
                </div>
                <div class="followers-stats">
                    <span>25 seguindo</span> <span>20 seguidores</span>
                </div>
            </div>
        </div>

    </div>
</template>

<script>
export default {

}
</script>

<style>

.stats-header {
    padding: 12px;
}

.stats-header p {
    font-size: 12px;
    color: rgb(101, 119, 134);
}

.cover-img {
    height: 200px;
    background: #ccc;
}

.stats-section {
    padding: 6px;
}

.edit-button-div {
    padding: 6px;
    display: flex;
    justify-content: flex-end;
}

.edit-button-div button {
    padding: 8px 12px;
    border: 1px solid #107C10;
    border-radius: 50px;
    background: #fff;
    color: #107C10;
    font-weight: bold;
    letter-spacing: 0.05em;
}

.name-div {
    padding: 6px;
}

.since-div {
   padding: 6px; 
}

.followers-stats {
    padding: 6px;
}

.stats-avatar img {
    width: 120px;
    height: 120px;
    border: 1px solid red;
    border-radius: 150px;
}

.stats-avatar {
    position: absolute;
    top: 130px;
    left: 10px;
}

.stats-content {
    position: relative;
}

</style>