<script>
import JumboVideo from './JumboVideo.vue'


export default {
    name: "MainTutor",
    components: {
        JumboVideo
    },
    data() {
        return {
            tutorList: [
                {
                    img: '../assets/images/home-2-image-box-01.png',
                    description: 'Learners are given the right to arrange and customize their study schedule and timetable based on preferences.',
                    link: '#',
                    text: 'Start here',
                    title: 'Customize Preferences'
                },
                {
                    img: '../assets/images/home-2-image-box-02.png',
                    description: 'You can store online lessons via online cloud or download to your device and revise lessons on the way.',
                    link: '#',
                    text: 'Get Free Quote',
                    title: 'Cloud Storage'
                },
                {
                    img: '../assets/images/home-2-image-box-03.png',
                    description: 'We provide study materials with various formats: video, audio, slides, doc, prints, books and applications.',
                    link: '#',
                    text: 'Start now',
                    title: 'Multimedia Channels'
                },

            ],

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

    <section class="tutor py-5">

        <div class="container">

            <div class="title_block text-center pb-5">
                <h5>
                    MAXCOACH AVAILABLE COURSES
                </h5>
                <h1>
                    Access <span>Smart Tutoring</span> Program For Benefits.
                </h1>
            </div>

            <div class="content-wrap">
                <div class="row">
                    <div class="col-4 gx-5 px-5" v-for="tutor in tutorList">
                        <a :href="tutor.link">
                            <div class="wrap-image pb-4">
                                <img :src="getImagePath(`${tutor.img}`)" alt="tutor image">

                            </div>

                            <div class="content">
                                <div class="caption">
                                    <h3 class="title">{{ tutor.title }}</h3>
                                    <div class="description">{{ tutor.description }} </div>
                                </div>
                                <div class="tm-button-wrapper">
                                    <div class="tm-button style-bottom-line tm-button-nm icon-right">
                                        <div class="button-content-wrapper">

                                            <span class="button-text">{{ tutor.text }}</span>

                                            <span class="button-icon">
                                                <i class="fa-solid fa-arrow-right-long"></i> </span>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </a>
                    </div>
                </div>



            </div>


        </div>

    </section>

    <JumboVideo />



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

.button-content-wrapper {
    width: fit-content;
    border-bottom: 1px solid rgba(128, 128, 128, 0.326);
}

.content-wrap {
    a {
        text-decoration: none;




        &:hover {

            .button-text,
            .button-icon {
                color: $back-texthover;
            }

            .button-content-wrapper {
                width: fit-content;
                border-bottom: 1px solid $back-texthover;
                transition: cubic-bezier(1, 0, 0, 1);

                transform: scaleX(1) translateZ(0);
                transform-origin: left;
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


.video-play {
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: 2;

    .video-play-image {
        width: 100%;
        height: 100%;
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
