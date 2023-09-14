<script>
import { store } from './data/store';
export default {
  data() {
    return {
      store
    }
  }
}

</script>


<template>
  <h1>{{ store.title }}</h1>
</template>


<style lang="scss">
@use './assets/style.scss'
</style>