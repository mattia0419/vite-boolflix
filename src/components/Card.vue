<script>
export default {
    props: {
        image: String,
        title: String,
        plot: String,
        language: String,
        valutation: Number
    },
    computed: {
        checkFlags() {
            const flags = ['en', 'it'];
            return flags.includes(this.language);
        },
        searchFlags() {
            const urlFlag = new URL('../assets/img/' + this.language + '.png', import.meta.url);
            return urlFlag.href;
        }

    },
    methods: {
        getStar(n) {
            return n < this.valutation / 2 ? 'fa-solid fa-star' : 'fa-regular fa-star';
        }
    }
}
</script>

<template>
    <div class=" flip-container g-5 mb-5">
        <div class="flipper">
            <div class="front">
                <img :src="image" alt="">
            </div>
            <div class="back bg-black d-flex justify-content-center align-items-center text-center">
                <h3>{{ title }}</h3>
                <div v-if="checkFlags">
                    <img :src="searchFlags" alt="">
                </div>
                <span>{{ valutation }}</span>
                <div>
                    <font-awesome-icon :icon="getStar(n)" v-for="n in 5" />
                </div>

                <div class="d-flex justify-content-center plot p-2">
                    <h5>Trama</h5>
                    <p>{{ plot }}</p>
                </div>
            </div>
        </div>
    </div>
</template>

<style lang="scss" scoped>
img {
    min-height: 100%;
    max-width: 100%;
}

.back {
    img {
        width: 16px;
        aspect-ratio: 1;
    }
}

.plot {
    flex-direction: column;
    align-items: center;
}

.back {
    color: white;
    flex-direction: column;
}

.bg-black {
    background-color: black;
}

.flip-container {
    /* Rappresenta l'inclinazione prospettica, in questo caso della rotazione */
    -webkit-perspective: 800;
    -moz-perspective: 800;
    -ms-perspective: 800;
    perspective: 800;
    margin: 0 auto;
}

/* ruota il pannello al mousehover */
.flip-container:hover .flipper,
.flip-container.hover .flipper {
    -moz-transform: rotateY(180deg);
    -webkit-transform: rotateY(180deg);
    transform: rotateY(180deg);
}

.flip-container,
.front,
.back {
    width: 342px;
    height: 500px;
}

/* impostare velocità di transizione */
.flipper {
    -webkit-transition: 0.6s;
    -moz-transition: 0.6s;
    -ms-transition: 0.6s;
    transition: 0.6s;
    -moz-transform-style: preserve-3d;
    -webkit-transform-style: preserve-3d;
    transform-style: preserve-3d;
    position: relative;
}

/* nasconde il retro durante lo swap */
.front,
.back {
    -webkit-backface-visibility: hidden;
    -moz-backface-visibility: hidden;
    backface-visibility: hidden;
    position: absolute;
    top: 0;
    left: 0;
    background: none;
}

/* front pane, placed above back, quello con lo z-index + alto, anche se sta prima nel codice, finisce sopra */
.front {
    width: 100%;
    z-index: 2;
    box-shadow: 0 0 50px rgba(0, 0, 0, 0.3);
}

/* back, initially hidden pane */
.back {
    -webkit-transform: rotateY(180deg);
    -moz-transform: rotateY(180deg);
    transform: rotateY(180deg);
    box-shadow: 0 0 40px rgba(0, 0, 0, 0.2);
    width: 100%;
}

img {
    max-width: 100%;
}
</style>