<script>
import NavBar from '../NavBar.vue';
import SearchBox from '../SearchBox.vue';

export default {
    name: "SiteHeader",
    components: {
        NavBar,
        SearchBox,
    }
}

</script>

<template>

    <header class="container d-flex justify-content-between">

        <img src="../../assets/images/dark-logo.png" alt="">


        <div class="d-flex">

            <NavBar />

            <SearchBox />
        </div>

    </header>



</template>

<style lang="scss" scoped>
img {
    padding: 1rem 0;
    max-width: 100%;
    width: 150px;
    object-fit: contain;
}
</style>
