<script>
export default {
    name: "SliderCard",

    props: {
        card: Object
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
    }


}

</script>

<template>


    <div class="col">
        <div class="card">
            <div class="card_text">
                <h5>{{ card.title }}</h5>
                <p>{{ card.subtitle }}</p>
            </div>
            <div class="card_profile d-flex">
                <div class="card_img">
                    <img class="rounded" :src="getImagePath(`${card.img}`)" alt="">
                </div>
                <div class="card_info">
                    <h5>{{ card.name }}</h5>
                    <h6>{{ card.role }}</h6>
                </div>
            </div>
        </div>
    </div>




</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

img {
    border-radius: 50%;
    aspect-ratio: 1/1;
    object-fit: cover;
    width: 60px;

}
</style>
