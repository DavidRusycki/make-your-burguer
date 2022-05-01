<template>

    <div class="container-main">
        <div class="message-container">
            <p>{{msg}}</p>
        </div>
    </div>

</template>

<script>
export default {
  name: 'ShowMessage',
  props: {
    msg: String
  }
}
</script>

<style scoped>

    .message-container {
        display: flex;
        justify-content: center;
        max-width: 400px;
        margin: 0 auto;
        text-align: center;
        flex-direction: column;
        font-size: 3em;
        color: rgb(128, 255, 37);
    }

    .container-main {
        display: flex;
        align-items: center;
        z-index: 1;
        position: fixed;
        top: 0;
        left: 0;
        background-color: #1e1e1ed0;
        width: 100vw;
        height: 100vh;
    }

</style>
