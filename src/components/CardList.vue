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
    <div v-if="store.movies.length > 0 && store.series.length > 0" class="container">
        <h1>Film</h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 ">
            <Card v-for="movie in store.movies" :title="movie.original_title" :language="movie.original_language"
                :plot="movie.overview" :valutation="movie.vote_average"
                :image="photoStart + photoWidth + movie.poster_path"></Card>
        </div>
        <h1>Serie TV</h1>
        <div class="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5">
            <Card v-for="serie in store.series" :title="serie.original_title" :language="serie.original_language"
                :plot="serie.overview" :valutation="serie.vote_average"
                :image="photoStart + photoWidth + serie.poster_path"></Card>
        </div>
    </div>
</template>

<style lang="scss" scoped>
h1 {
    margin-top: 50px;
    margin-bottom: 80px;
}
</style>