<script>
import { store } from '../data/store';
import axios from 'axios';
export default {
    data() {
        return {
            keyWord: '',
            store
        }
    },
    methods: {
        fetchMoviesSeries(endPointMovies, endPointSeries) {
            axios.get(endPointMovies).then((response) => {
                this.store.movies = response.data.results;
                console.log(endPointMovies);
                console.log(this.store.movies);
            })
            axios.get(endPointSeries).then((response) => {
                this.store.series = response.data.results;
                console.log(endPointSeries);
                console.log(this.store.series);
            })
        },
    }
}
</script>

<template>
    <header class="d-flex justify-content-between align-items-center p-3">
        <div>
            <h1>BOOLFLIX</h1>
        </div>
        <div>
            <input type="text" placeholder="Cerca il tuo film preferito" v-model="keyWord">
            <button
                @click="fetchMoviesSeries(store.apiUriMovies + store.apiKey + '&query=' + keyWord, store.apiUriSeries + store.apiKey + '&query=' + keyWord)">Cerca</button>
        </div>
    </header>
</template>

<style lang="scss" scoped>
header {
    width: 100%;
    background-color: black;

    h1 {
        color: red;
    }

    input {
        border: transparent;
        border-top-left-radius: 8px;
        border-bottom-left-radius: 8px;
        padding: 10px;
    }

    button {
        padding: 10px;
        border-top-right-radius: 8px;
        border-bottom-right-radius: 8px;
        background-color: red;
        color: white;
    }
}
</style>