<script>
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader
  }
}

</script>


<template>
  <AppHeader></AppHeader>
</template>


<style lang="scss">
@use './assets/style.scss'
</style>