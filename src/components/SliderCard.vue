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


    <div class="col-4">
        <div class="card">
            <div class="card_text">
                <h5>{{ card.title }}</h5>
                <p>{{ card.subtitle }}</p>
            </div>
            <div class="align-items-center card_profile d-flex">
                <div class="card_img">
                    <img :src="getImagePath(`${card.img}`)" alt="">
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

.card_text {

    h5 {
        font-weight: 700;
        font-size: 20px;
        line-height: 1.6;
        margin-bottom: 14px;
    }

    p {
        font-size: 15px;
        font-weight: 500;
        line-height: 1.67;
        color: $paragraphcolor;
    }
}


.card_info {
    h5 {
        font-size: 15px;
    }

    h6 {
        font-size: 12px;
    }
}

.card {
    padding: 30px 15px 30px;
    border-radius: 5px;
    background: #fff;
    box-shadow: 0 16px 40px -40px rgb(51 51 51 / 15%);
    border: 0;
}

.card_img {
    margin-right: 23px;
}
</style>
