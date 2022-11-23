<script>


export default {
    name: "BannerCall",

}

</script>

<template>

    <section class="banner py-5">
        <div class="banner_wrap text-center">
            <h3>
                Start today for getting <span class="marked">Online Certification</span>
            </h3>
            <h2 class="">
                You can be your own guiding star with our help!
            </h2>

            <div>
                <p class="lead pb-3">
                    <a class=" button btn btn-primary btn-lg" href="Jumbo action link" role="button"> <span
                            class="px-2">Get started now</span></a>
                </p>
            </div>
        </div>


    </section>





</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.banner {

    background-color: $back-section2;

    h3 {
        font-size: 24px;
        font-weight: 700;
        ;

        .marked {
            color: $back-texthover;
            font-weight: 300;
        }

    }

    h2 {
        font-size: 36px;
        font-weight: 700;
        margin: 10px 0 30px 0;
    }
}

.button {
    font-size: 1rem !important;
    border-radius: 0.25rem !important;
    padding: 1rem 2rem !important;
    width: 260px;
    background-color: $back-texthover ;

    &:hover {
        background-color: $primarycolor;
    }

    span {
        font-size: 14px;
    }
}
</style>
