<script>
export default {
    props: {
        image: String
    }
}
</script>

<template>
    <div>
        <img :src="image" alt="">
    </div>
</template>

<style lang="scss" scoped></style>