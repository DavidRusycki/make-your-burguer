<template>
  <div>
    <PageBanner/>
    <div class="main-container">
      <h1> Monte seu Hamburger </h1>
      <BurguerForm />
    </div>
  </div>
</template>

<script>
import PageBanner from '@/components/PageBanner.vue'
import BurguerForm from '@/components/BurgerForm.vue'

export default {
  name: 'view-home',
  components: {
    PageBanner,
    BurguerForm
  }
}

</script>
