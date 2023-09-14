<script>
import { store } from '../data/store';
import Card from './Card.vue';
export default {
    data() {
        return {
            store,
            photoStart: 'https://image.tmdb.org/t/p/',
            photoWidth: 'http://image.tmdb.org/t/p/w342/'
        }
    },
    components: {
        Card
    }
}
</script>

<template>
    <div v-for="movie in store.movies">
        <Card :image="photoStart + photoWidth + movie.poster_path"></Card>
    </div>
</template>

<style lang="scss" scoped></style>