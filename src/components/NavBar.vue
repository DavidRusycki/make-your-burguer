<template>
  <div>
    <nav id="nav">
      <router-link to="/" id="logo-url">
        <img :src="srcLogo" :alt="Alt" id="logo"/>
      </router-link>
      <router-link to="/">Home</router-link>
      <router-link to="/pedidos">Pedidos</router-link>
    </nav>
  </div>
</template>

<script>

export default {
  name: 'NavBar',
  props: {
    srcLogo: String,
    Alt: String
  }
}

</script>

<style scoped>

#nav {
    background-color: #222;
    border-bottom: 4px solid #111;
    padding: 15px 50px;
    display: flex;
    /* justify-content: flex-end; */
    align-items: center;
}

#logo-url {
    margin: auto;
    margin-left: 0px;
}

#logo {
    width: 40px;
    height: 40px;
}

#nav a {
    color: #fcba03;
    text-decoration: none;
    margin: 12px;
    transition: .2s;
}

#nav a:hover {
    color: white
}

</style>
