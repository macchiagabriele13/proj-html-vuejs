<script>
import SiteMain from './components/layout/SiteMain.vue'
import SiteHeader from './components/layout/SiteHeader.vue'
import SiteFooter from './components/layout/SiteFooter.vue'
import { store } from './store.js'

export default {
  name: 'App',
  data() {
    return {
      store,
    }
  },
  components: {
    SiteHeader,
    SiteMain,
    SiteFooter
  },

}

</script>

<template>

  <SiteHeader />

  <SiteMain />

  <SiteFooter />

</template>

<style lang="scss" scoped>

</style>
