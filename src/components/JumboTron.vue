<script>

export default {
    name: "JumboTron"
}

</script>

<template>
    <div class="container">
        <div class="row align-items-center pt-5">
            <div class="col-6 ">
                <div class="jumbotron jumbotron-fluid">
                    <div class="container">
                        <h1 class="main_title">Distant learning for further expansion</h1>
                        <p class="subtitle pb-4">Learning is a life-long jurbey that in fact we never find the terminate
                            stop.
                            Stop
                            searching, enjoy the process.</p>
                        <p class="lead pb-3">
                            <a class=" button btn btn-primary btn-lg" href="Jumbo action link" role="button"> <i
                                    class="fa-solid fa-download"></i> <span class="px-2">Download free
                                    guide</span></a>
                        </p>
                        <p>Have questions? <a class="sample" href="#"><strong>Get Free Sample <i
                                        class="px-2 fa-solid fa-arrow-right-long"></i></strong></a></p>
                    </div>
                </div>
            </div>
            <div class="col-6">
                <div class="right_col h-100 p-5">



                    <div class="position-relative">
                        <img class="img_profile"
                            src="../assets/images/about-me-profile-ohm4dxoearqbxny7q3bq1pzbdgofdx0tobbeqcvzd0.jpg"
                            alt="">
                        <img class='green_down position-absolute' src="../assets/images/maxcoach-shape-07.png" alt="">
                        <img class='brown_down' src="../assets/images/maxcoach-shape-08.png" alt="">
                        <img class='brown_up' src="../assets/images/maxcoach-shape-08.png" alt="">
                    </div>

                </div>
            </div>
        </div>

    </div>


</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.button {
    font-size: 1rem !important;
    border-radius: 0.25rem !important;
    padding: 1rem 2rem !important;
    width: 260px;
}

.main_title {
    font-size: 48px;
    line-height: 1.17em;
    color: $primarycolor;
    font-weight: 700;
    letter-spacing: 0em;

}

.subtitle {
    font-size: 18px;
    font-weight: 500;
    line-height: 1.67em;
    color: $paragraphcolor;

}

.sample {
    text-decoration: none;
    border-bottom: 1px solid #80808017;

    &:hover {
        border-bottom: 1px solid $back-texthover ;
        transition: cubic-bezier(0.165, 0.84, 0.44, 1);
        transform: scaleX(0) translateZ(0);
    }


}

strong {
    color: $back-texthover;
}


.right_col {
    position: relative;

    .img_profile {
        aspect-ratio: 1/1;
        object-fit: cover;
        border-radius: 50%;
    }

    .green_down {
        position: absolute;
        right: 0;
        top: 66%;
        z-index: -1;
    }

    .brown_down {
        position: absolute;
        left: -17%;
        top: 55%;
        width: 155px;
        z-index: -1;
    }

    .brown_up {
        width: 155px;
        position: absolute;
        left: -17%;
        top: 28%;
        z-index: -1;
    }
}
</style>
