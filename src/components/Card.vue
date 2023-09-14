<script>
export default {
    props: {
        image: String
    }
}
</script>

<template>
    <div class="col">
        <img :src="image" alt="">
    </div>
</template>

<style lang="scss" scoped></style>