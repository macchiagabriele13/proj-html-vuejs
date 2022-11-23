<script>
import JumboTron from '../JumboTron.vue';
import SliderLogos from '../SliderLogos.vue';
import MainCourses from '../MainCourses.vue';
import MainTutor from '../MainTutor.vue';
import SliderCard from '../SliderCard.vue';
import MainSlider from '../MainSlider.vue';
import BannerCall from '../BannerCall.vue';
import DataCounter from '../DataCounter.vue'
import BlogSection from '../BlogSection.vue';




export default {
    name: "SiteMain",
    components: {
        JumboTron,
        SliderLogos,
        MainCourses,
        MainTutor,
        MainSlider,
        SliderCard,
        BannerCall,
        DataCounter,
        BlogSection
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
        <BannerCall />
        <DataCounter />
        <BlogSection />







    </main>


</template>

<style lang="scss" scoped>

</style>
