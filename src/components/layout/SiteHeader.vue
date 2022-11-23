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

    <header>
        <div class="container d-flex justify-content-between py-1">
            <img src="../../assets/images/dark-logo.png" alt="">

            <div class="d-flex">

                <NavBar />

                <SearchBox />



            </div>
        </div>




    </header>



</template>

<style lang="scss" scoped>
header {
    box-shadow: 0 8px 20px 0 rgb(0 0 0 / 10%);
}

img {
    padding: 1rem 0;
    max-width: 100%;
    width: 150px;
    object-fit: contain;
}
</style>
