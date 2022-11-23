<script>
import SliderCard from './SliderCard.vue';


export default {
    name: "MainSlider",
    components: {
        SliderCard,
    },
    data() {
        return {
            teamList: [
                {
                    title: 'Professional team of specialist and passionate mentors at reach',
                    subtitle: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                    img: '../assets/images/testimonial-avata-01.jpg',
                    name: 'Madley Pondor',
                    role: '/ IT Specialist',

                },
                {
                    title: 'Professional team of specialist and passionate mentors at reach',
                    subtitle: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                    img: '../assets/images/testimonial-avata-01.jpg',
                    name: 'Madley Pondor',
                    role: '/ IT Specialist',

                },
                {
                    title: 'Professional team of specialist and passionate mentors at reach',
                    subtitle: 'I need to get a certification for English proficiency and MaxCoach is my best choice. Their tutors are smart and professional when dealing with students.',
                    img: '../assets/images/testimonial-avata-01.jpg',
                    name: 'Madley Pondor',
                    role: '/ IT Specialist',

                },

            ],
            activeSlide: 0,
        }
    },
    methods: {
        getImagePath: function (imgPath) {
            return new URL(imgPath, import.meta.url).href;
        },
        prevSlide() {
            console.log('hai cliccato prev');
            this.activeSlide--
            console.log(this.activeSlide);
            if (this.activeSlide < 0) {
                this.activeSlide = this.teamList.length - 1

            }
        },
        nextSlide() {
            console.log('hai cliccato next');
            this.activeSlide++
            console.log(this.activeSlide);
            if (this.activeSlide > this.teamList.length - 1) {
                this.activeSlide = 0;

            }
        }
    },
    mounted() {
        console.log(this.teamList);

    }

}


</script>

<template>

    <section class="slider">

        <div class="title_block text-center pb-5">
            <h5>
                MAXCOACH AVAILABLE COURSES
            </h5>
            <h1>
                Access <span class="marked">Smart Tutoring</span> Program For Benefits.
            </h1>
        </div>

        <div class="row">
            <SliderCard :card="team" :class="activeSlide === i ? 'active' : ''" v-for="(team,i) in teamList" />
        </div>



        <div class="thumbs d-flex justify-content-center">
            <div class="prev" @click="prevSlide"></div>
            <div class="next" @click="nextSlide"></div>
            <div class="thumb">
                <img class="thumb" :class=" activeSlide === i ? 'active' : '' " :src="teamList[i].img" alt=""
                    v-for="(slide, i) in teamList" />
            </div>

        </div>



    </section>


</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.slider {
    background-color: $back-section2;
    margin-top: 100px;


    .col-4:not(.col-4.active) {
        opacity: .4;
    }

    .title_block {
        padding-top: 5rem;

        .marked {
            color: $back-texthover;
            font-weight: 300;
        }

        h5 {
            font-size: 0.9rem;
            color: gray;
        }

        h1 {
            font-size: 2rem;
        }
    }
}


.prev,
.next {
    width: 20px;
    height: 20px;
    margin: 10px 0;
    border-radius: 50%;
    background: #ccc;
    /* position: absolute;
    left: 50%; */
    transform: translate(-50%);
    cursor: pointer;
    z-index: 999;
}

.next {
    bottom: 0;
}

/*
EXTRA: in questo esempio gli accordion vengono creati
usando 2 bordi di un quadratino ruotato di 45 gradi
In una versione base si possono usare delle icone
oppure i caratteri ∧ (&and;) e ∨ (&or;)
 */
.prev::after {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    display: block;
    position: absolute;
    top: 35%;
    left: 50%;
    transform: translate(-50%) rotate(-135deg);
}

.next::before {
    content: '';
    width: 10px;
    height: 10px;
    border-top: 1px solid black;
    border-right: 1px solid black;
    display: block;
    position: absolute;
    bottom: 35%;
    left: 50%;
    transform: translate(-50%) rotate(45deg);
}
</style>
