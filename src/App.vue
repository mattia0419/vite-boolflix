<script>
import { store } from './data/store';
import AppHeader from './components/AppHeader.vue';
import CardList from './components/CardList.vue';
export default {
  data() {
    return {
      store
    }
  },
  components: {
    AppHeader,
    CardList
  }
}

</script>


<template>
  <AppHeader></AppHeader>
  <div class="d-flex justify-content-center" v-if="store.movies.length == 0 && store.series.length == 0">
    <div class="alert">
      <h3>NESSUN RISULTATO</h3>
    </div>
  </div>
  <CardList></CardList>
</template>


<style lang="scss">
@use './assets/style.scss';

body {
  background-color: grey;
}
</style>