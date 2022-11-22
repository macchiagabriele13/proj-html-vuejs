<script>

export default {
    name: 'MainCourses',
    data() {
        return {
            courses: [
                {
                    text: 'Learning to Write as a Professional Author',
                    price: '$40,00',
                    lessons: '20 Lessons',
                    students: '50 Students',
                    img: '../assets/images/course-02-480x298.jpg'
                },
                {
                    text: 'Learning to Write as a Professional Author',
                    price: '$40,00',
                    lessons: '20 Lessons',
                    students: '50 Students',
                    img: '../assets/images/course-featured-image-01-480x298.jpg'
                },
                {
                    text: 'Learning to Write as a Professional Author',
                    price: '$40,00',
                    lessons: '20 Lessons',
                    students: '50 Students',
                    img: '../assets/images/stock-full-hd-03-480x298.jpg'
                },
                {
                    text: 'Learning to Write as a Professional Author',
                    price: '$40,00',
                    lessons: '20 Lessons',
                    students: '50 Students',
                    img: '../assets/images/stock-full-hd-04-480x298.jpg'
                },
                {
                    text: 'Learning to Write as a Professional Author',
                    price: '$40,00',
                    lessons: '20 Lessons',
                    students: '50 Students',
                    img: '../assets/images/stock-full-hd-05-480x298.jpg'
                },
                {
                    text: 'Learning to Write as a Professional Author',
                    price: '$40,00',
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
                    <div class="info_text px-4">
                        <h3>{{ card.price }}</h3>
                        <h4>{{ card.text }}</h4>
                        <div class="sub_info_text d-flex">
                            <h6><i class="fa-regular fa-file-lines"></i> {{ card.lessons }}</h6>
                            <h6><i class="fa-regular fa-user"></i> {{ card.students }}</h6>
                        </div>
                    </div>
                </div>

            </div>

            <div>
                <p class="lead py-3 text-center">
                    <a class=" button btn btn-primary btn-lg" href="Jumbo action link" role="button"> <span
                            class="px-1">View all courses</span> <i class=" fa-solid fa-arrow-right-long"></i></a>
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
        font-size: 0.9rem;
        color: gray;
    }

    h1 {
        font-size: 2rem;
    }
}

.col-6 {
    padding: 1rem;

    &:hover {
        color: $back-texthover;
        background-color: white;
        cursor: pointer;
    }


}

.info_text {

    h3 {
        color: $back-texthover;
    }

}

.wrap_img {

    img {
        border-radius: 50%;
        aspect-ratio: 1/1;
        object-fit: cover;
        width: 150px;
    }
}
</style>
