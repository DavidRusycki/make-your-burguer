<template>

  <NavBar :srcLogo="scrLogo" :Alt="Alt"/>
  <router-view/>
  <Footer />

</template>

<script>
import NavBar from '@/components/NavBar.vue'
import Footer from '@/components/PageFooter.vue'

export default {
  name: 'app',
  components: {
    NavBar,
    Footer
  },
  data () {
    return {
      scrLogo: '/img/logo.png',
      Alt: 'Logo'
    }
  }
}
</script>

<style>

* {
  font-family: Helvetica, Arial;
  padding: o;
  margin: 0;
  box-sizing: border-box;
}

.main-container {
  margin: 50px;
}

h1 {
  text-align: center;
  font-size: 42px;
  margin-bottom: 30px;
  color: #222
}

</style>
