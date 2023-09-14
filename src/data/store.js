import { reactive } from 'vue';

export const store = reactive({
    apiKey: '8a96240862ec89d71fda22a484f2c002',
    movies: [],
    apiUriMovies: 'https://api.themoviedb.org/3/search/movie?api_key=',
    series: [],
    apiUriSeries: 'https://api.themoviedb.org/3/search/tv?api_key='
})