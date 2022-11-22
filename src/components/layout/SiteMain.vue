<script>
import JumboTron from '../JumboTron.vue';
import SliderLogos from '../SliderLogos.vue';
import MainCourses from '../MainCourses.vue';
import MainTutor from '../MainTutor.vue';
import SliderCard from '../SliderCard.vue';



export default {
    name: "SiteMain",
    components: {
        JumboTron,
        SliderLogos,
        MainCourses,
        MainTutor,
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
        <SliderCard />






    </main>


</template>

<style lang="scss" scoped>

</style>
