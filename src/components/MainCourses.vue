<script>

export default {
    name: 'MainCourses',

}

</script>

<template>

    <section class="courses py-5">

        <div class="container">

            <div class="title_block text-center pb-5">
                <h5>
                    STIMULATED TO LEARN?
                </h5>
                <h1>
                    Featured Online Courses
                </h1>
            </div>


            <div class="row py-5">
                <div class="col-6 d-flex align-items-center">
                    <div class="wrap_img">
                        <img src="../assets/images/course-02-480x298.jpg" alt="">
                    </div>
                    <div class="info_text px-4">
                        <h3>$40.00</h3>
                        <h4>Learning to Write as a Professional Author</h4>
                        <div class="sub_info_text d-flex">
                            <h6><i class="fa-regular fa-file-lines"></i> 20 Lessons</h6>
                            <h6><i class="fa-regular fa-user"></i> 50 Students</h6>
                        </div>
                    </div>
                </div>
                <div class="col-6 d-flex align-items-center">
                    <div class="wrap_img">
                        <img src="../assets/images/course-02-480x298.jpg" alt="">
                    </div>
                    <div class="info_text px-4">
                        <h3>$40.00</h3>
                        <h4>Learning to Write as a Professional Author</h4>
                        <div class="sub_info_text d-flex">
                            <h6><i class="fa-regular fa-file-lines"></i> 20 Lessons</h6>
                            <h6><i class="fa-regular fa-user"></i> 50 Students</h6>
                        </div>
                    </div>
                </div>
            </div>

        </div>

    </section>


</template>

<style lang="scss" scoped>
.title_block {
    h5 {
        font-size: 0.9rem;
        color: gray;
    }

    h1 {
        font-size: 2rem;
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
