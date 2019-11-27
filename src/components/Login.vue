<template>
  <div class="container">
      <div class="login-box">
          <h3>Entrar</h3>
          <input type="text">
          <input type="text">
          <button>Entrar</button>
      </div>
  </div>
</template>

<script>
export default {
    data() {
        return {
            name: "Joao"
        }
    }
}
</script>

<style scope>

.container {
    display: flex;
    align-items: center;
    justify-content: center;
    height: 100vh;
}

.login-box {
    border: 1px solid black;
    padding: 24px;
    width: 100%;
    max-width: 350px;
}

.login-box input {
    width: 100%;
    padding: 10px;
    margin: 5px 0;
}

.login-box button {
    width: 100%;
    padding: 10px;
}

</style>