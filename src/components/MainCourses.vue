<script>

export default {
    name: 'MainCourses',
    data() {
        return {
            courses: [
                {
                    text: 'Learning to Write as a Professional Author',
                    price: '$40',
                    lessons: '20 Lessons',
                    students: '50 Students',
                    img: '../assets/images/course-02-480x298.jpg'
                },
                {
                    text: 'Learning to Write as a Professional Author',
                    price: '$40',
                    lessons: '20 Lessons',
                    students: '50 Students',
                    img: '../assets/images/course-featured-image-01-480x298.jpg'
                },
                {
                    text: 'Learning to Write as a Professional Author',
                    price: '$40',
                    lessons: '20 Lessons',
                    students: '50 Students',
                    img: '../assets/images/stock-full-hd-03-480x298.jpg'
                },
                {
                    text: 'Learning to Write as a Professional Author',
                    price: '$40',
                    lessons: '20 Lessons',
                    students: '50 Students',
                    img: '../assets/images/stock-full-hd-04-480x298.jpg'
                },
                {
                    text: 'Learning to Write as a Professional Author',
                    price: '$40',
                    lessons: '20 Lessons',
                    students: '50 Students',
                    img: '../assets/images/stock-full-hd-05-480x298.jpg'
                },
                {
                    text: 'Learning to Write as a Professional Author',
                    price: '$40',
                    lessons: '20 Lessons',
                    students: '50 Students',
                    img: '../assets/images/stock-full-hd-06-480x298.jpg'
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

    <section class="courses py-5">

        <div class="container">

            <div class="title_block text-center pb-3">
                <h5>
                    STIMULATED TO LEARN?
                </h5>
                <h1>
                    Featured Online Courses
                </h1>
            </div>


            <div class="row g-5 py-3">
                <div class="col-6 d-flex align-items-center" v-for="card in courses">
                    <div class="wrap_img">
                        <img :src="getImagePath(`${card.img}`)" :alt="card.text">
                    </div>
                    <div class="info_text">
                        <h3>{{ card.price }}<span class="decimal">.00</span></h3>
                        <h4>{{ card.text }}</h4>
                        <div class="sub_info_text d-flex">
                            <div class="lessons">
                                <span><i class="fa-regular fa-file-lines"></i></span>
                                <span>{{ card.lessons }}</span>
                            </div>
                            <div class="students">
                                <span><i class="fa-regular fa-user"></i></span>
                                <span>{{ card.students }}</span>
                            </div>
                        </div>
                    </div>
                </div>

            </div>

            <div class="d-flex justify-content-center">
                <p class="lead py-3 text-center">
                    <a class=" align-items-center btn btn-lg btn-primary button d-flex justify-content-center "
                        href="Jumbo action link" role="button"> <span class="px-1">View all courses</span> <i
                            class=" fa-solid fa-arrow-right-long"></i></a>
                </p>
            </div>

        </div>

    </section>


</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.courses {
    background-color: $back-section2;
}

.button {
    font-size: 1rem !important;
    border-radius: 0.25rem !important;
    padding: 1rem 2rem !important;
    width: 260px;
}

.title_block {


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

.col-6 {
    padding: 1rem;

    &:hover {
        color: $back-texthover;
        background-color: white;
        cursor: pointer;

        h4 {
            color: $back-texthover;
        }
    }




}

.info_text {

    padding-left: 1.5rem;
    padding-right: 6rem;

    h3 {
        color: $back-texthover;
        font-size: 22px;
        font-weight: 700;

        .decimal {
            font-size: 18px;
        }

    }

    h4 {
        font-weight: 700;


    }

}

.sub_info_text {
    margin-top: 10px;
    display: flex;
    font-size: 14px;
    color: $paragraphcolor;

    i {
        margin-right: 6px;
    }

    .lessons {
        margin-right: 28px;
    }

}

.wrap_img {

    img {
        border-radius: 50%;
        aspect-ratio: 1/1;
        object-fit: cover;
        width: 170px;
    }
}
</style>
