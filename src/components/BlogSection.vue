<script>


export default {
    name: "BlogSection",

}

</script>

<template>

    <section class="blog">

        <div class="container">
            <div class="row">
                <div class="col-4">
                    <div class="title py-3">
                        <h3 class="heading-primary text-uppercase">Enjoyable insight</h3>

                        <h1 class="heading-title">Most Viewed <span class="marked">Best Blogs</span></h1>
                    </div>
                    <div class="list">
                        <ul class="fa-ul">
                            <li>
                                <span class="fa-li"><i class=" fa-solid fa-arrow-right-long"></i></span>
                                <a href="">
                                    Become a Better Blogger: Content Planning
                                </a>
                            </li>
                            <li>
                                <span class="fa-li"><i class=" fa-solid fa-arrow-right-long"></i></span>
                                <a href="">
                                    Promoting Your Online Business on Pinterest
                                </a>
                            </li>
                            <li>
                                <span class="fa-li"><i class=" fa-solid fa-arrow-right-long"></i></span>
                                <a href="">
                                    Gamification and Game-Based Learning
                                </a>
                            </li>
                            <li>
                                <span class="fa-li"><i class=" fa-solid fa-arrow-right-long"></i></span>
                                <a href="">
                                    Designing an Online Course from Expert's Perspective
                                </a>
                            </li>
                            <li>
                                <span class="fa-li"><i class=" fa-solid fa-arrow-right-long"></i></span>
                                <a href="">
                                    Why Online Courses Are the Future of Education
                                </a>
                            </li>
                        </ul>
                    </div>

                </div>
                <div class="col-4 d-flex justify-content-center">
                    <div class="card">
                        <div class="wrap_img">
                            <img src="../assets/images/course-02-480x298.jpg" alt="">
                        </div>
                        <div class="wrap_text">
                            <div class="info_text">
                                <h3 class="text-uppercase">Business</h3>
                                <h4><a href="#">Ten Benefits Of Rentals That May Change Your Perspective</a> </h4>
                                <div class="sub_info_text d-flex">
                                    <div class="lessons">
                                        <span><i class="fa-regular fa-calendar"></i></span>
                                        <span>Dec 28,2020</span>
                                    </div>
                                    <div class="students">
                                        <span><i class="fa-regular fa-eye"></i></span>
                                        <span>2,276 views</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
                <div class="col-4 d-flex justify-content-center">
                    <div class="card">
                        <div class="wrap_img">
                            <img src="../assets/images/course-featured-image-01-480x298.jpg" alt="">
                        </div>
                        <div class="wrap_text">
                            <div class="info_text">
                                <h3 class="text-uppercase">Business</h3>
                                <h4><a href="#">10 Things Successful Mompreneurs Do Different</a> </h4>
                                <div class="sub_info_text d-flex">
                                    <div class="lessons">
                                        <span>
                                            <i class="fa-regular fa-calendar"></i>
                                        </span>
                                        <span>Dec 28,2020</span>
                                    </div>
                                    <div class="students">
                                        <span><i class="fa-regular fa-eye"></i></span>
                                        <span>2,053 views</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>

    </section>


</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.blog {
    background-color: $back-section3;
    padding: 6rem 0 !important;
}

.title {


    .heading-primary {
        font-size: 15px;
        font-weight: 500;
        text-transform: uppercase;
        line-height: 2em;
        letter-spacing: 2px;
        color: #8C89A2;
    }


    .marked {
        color: $back-texthover;
        font-weight: 400;
    }

    .heading-title {
        font-size: 34px;
        line-height: 1.17em;
        color: #3F3A64;
        font-weight: 700;



    }

    .heading-description {
        font-size: 18px;
        line-height: 1.67em;
        color: #696969;
        padding-bottom: 5rem;
    }
}

.card {
    border: 0;
    width: min-content;

    .wrap_text {
        padding: 1.5rem;
    }

    .info_text {


        h3 {
            color: $paragraphcolor;
            font-size: 15px;
            font-weight: 500;

        }

        h4 {
            font-weight: 700;
            font-size: 20px;
            line-height: 1.5em;



            a {
                text-decoration: none;
                color: $primarycolor;

                &:hover {
                    color: $back-texthover;

                }
            }


        }

    }

    .sub_info_text {
        margin-top: 30px;
        display: flex;
        font-size: 14px;
        color: #7e7e7e;

        i {
            margin-right: 6px;
        }

        .lessons {
            margin-right: 28px;
        }

    }

    .wrap_img {
        width: 340px;

        img {
            border-radius: 5px;
            /* aspect-ratio: 1/1; */
            object-fit: cover;
            width: 100%;
            height: 265px;
        }
    }

}

ul {

    padding-left: 2rem !important;
    margin: 0;

    li {

        padding: 1rem 0;

        a {
            text-decoration: none;
            color: $primarycolor;
            font-weight: 700;

        }

        span {
            padding-right: 10px;
            color: $primarycolor;
        }
    }

}
</style>
