<script>
import JumboTron from '../JumboTron.vue';
import SliderLogos from '../SliderLogos.vue';
import MainCourses from '../MainCourses.vue';
import MainTutor from '../MainTutor.vue';
import SliderCard from '../SliderCard.vue';
import MainSlider from '../MainSlider.vue';




export default {
    name: "SiteMain",
    components: {
        JumboTron,
        SliderLogos,
        MainCourses,
        MainTutor,
        MainSlider,
        SliderCard,

    }
}


</script>

<template>

    <main>


        <JumboTron />
        <SliderLogos />
        <MainCourses />
        <MainTutor />
        <MainSlider />







    </main>


</template>

<style lang="scss" scoped>

</style>
