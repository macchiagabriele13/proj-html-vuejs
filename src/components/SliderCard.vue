<script>

export default {
    name: "SliderCard"
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

    </section>


</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.slider {
    background-color: $back-section2;
    margin-top: 100px;

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
</style>
