<script>

export default {
    name: "JumboVideo",
    data() {
        return {


        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        }
    }
}

</script>

<template>


    <section class="jumbo_due position-relative">
        <div class="container">
            <div class="row align-items-center g-5 pt-5">
                <div class="col">
                    <div class="right_col h-100 p-5">

                        <div class="position-relative">
                            <div class="video-play">
                                <div class="align-items-center d-flex justify-content-center video-play-image">
                                    <img src="https://maxcoach.thememove.com/main/wp-content/uploads/sites/1/2019/11/icon-youtube-play.png"
                                        alt="icon-youtube-play">
                                </div>
                            </div>
                            <div class="img_video">
                                <img class="img_profile" src="../assets/images/home-2-popup-video-poster.jpg" alt="">

                            </div>
                            <img class='green_down' src="../assets/images/maxcoach-shape-07.png" alt="">
                            <img class='green_up' src="../assets/images/maxcoach-shape-05-150x150.png" alt="">
                        </div>

                    </div>
                </div>
                <div class="col pe-5">
                    <div class="jumbotron jumbotron-fluid">
                        <div class="container">
                            <h3 class="heading-primary">GET STARTED <span class="marked_strong">EFFORTLESSLY</span></h3>

                            <h1 class="heading-title">Enjoy Our <span class="marked">Companionship</span></h1>
                            <p class="heading-description">Sneek peek into what has in store for you on our online
                                teaching and
                                mentoring portal. Seek for some hidden hints of early-bird rewards as well.</p>
                            <p><a class="sample" href="#">Download free guidebook <i
                                        class="px-2 fa-solid fa-arrow-right-long"></i></a></p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
        <div class="shape shape-bottom" data-negative="false">
            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100" preserveAspectRatio="none" height="315"
                width="1500">
                <path d="M 50 0 S75 0 100 100 L100 0"></path>
            </svg>
        </div>

    </section>


</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.title_block {
    margin-bottom: 64px;

    span {
        color: $back-texthover;
        font-weight: 400;
    }

    h5 {
        font-size: 15px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 2em;
        letter-spacing: 2px;
        color: $paragraphcolor;
    }

    h1 {
        font-size: 34px;
        line-height: 1.17em;
        color: $primarycolor;
        font-weight: 700;
    }
}

.content-wrap {
    a {
        text-decoration: none;
        border-bottom: 1px solid rgba(128, 128, 128, 0.326);

        &:hover {

            .button-text,
            .button-icon {
                color: $back-texthover;
            }

            .button-content-wrapper {
                width: fit-content;
                border-bottom: 1px solid rgba(128, 128, 128, 0.326);
            }

        }
    }


}


.content {

    .title {
        color: $back-textprimary;
        font-size: 24px;
        line-height: 1.5;
        margin-bottom: 0;
        font-weight: 700;

    }

    .description {
        color: $back-textprimary;
        line-height: 1.6;
        margin-top: 14px;
        font-size: 15px;
        font-weight: 400;
    }
}

.tm-button-wrapper {
    margin: 15px 0 0;
    font-family: inherit;
    font-size: 14px;
    font-weight: 700;
    letter-spacing: 0em;
    text-transform: none;

    .button-text {
        color: #8C89A2;
    }

    .button-icon {
        color: #8C89A2;
        font-size: 14px;
        margin-left: 7px;
    }

}

/* Jumbo */

.shape-bottom {
    /* transform: rotate(90deg);
    bottom: -15px; */
    transform: rotateX(180deg);
    bottom: -100px;
}


.shape {
    overflow: hidden;
    position: absolute;
    right: 0;
    line-height: 0;
    direction: ltr;
    fill: $back-section2;
    z-index: -1;
}

.img_video {
    overflow: hidden;
}

.video-play {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 0;

    .video-play-image {
        width: 100%;
        height: 100%;

        &:hover {
            cursor: pointer;

        }
    }
}


.video-play:hover {
    .img_profile {
        transform: scaleX(1.2);
    }
}


.sample {
    text-decoration: none;
    border-bottom: 1px solid #80808043;
    font-size: 16px;
    color: $back-texthover;
    padding: 3px 0;
    font-weight: 700;

    &:hover {
        border-bottom: 1px solid $back-texthover;
    }
}

.jumbotron {

    .heading-primary {
        font-size: 15px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 2em;
        letter-spacing: 2px;
        color: #8C89A2;
    }

    .marked_strong {
        font-weight: 700;
        color: #3F3A64;
    }

    .marked {
        color: $back-texthover;
        font-weight: 300;
    }

    .heading-title {
        font-size: 48px;
        line-height: 1.17em;
        color: #3F3A64;
        padding-bottom: 2rem;


    }

    .heading-description {
        font-size: 18px;
        line-height: 1.67em;
        color: #696969;
        padding-bottom: 5rem;
    }

}

.right_col {
    position: relative;

    .img_profile {
        object-fit: cover;
        height: 450px;
    }

    .green_down {
        position: absolute;
        right: -53px;
        top: 66%;
        z-index: -1;
    }

    .green_up {
        width: 155px;
        position: absolute;
        left: -14%;
        top: 3%;
        z-index: -1;
    }
}
</style>
