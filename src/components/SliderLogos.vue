<script>

export default {
    name: 'SliderLogos',

}

</script>

<template>

    <div class="container">
        <div class=" logos pb-5 row align-items-center">
            <div class="col text-center">
                <a href="">
                    <img src="../assets/images/client-logo-01.png" alt="">
                </a>
            </div>
            <div class="col text-center">
                <a href="">
                    <img src="../assets/images/client-logo-02.png" alt="">
                </a>
            </div>
            <div class="col text-center">
                <a href="">
                    <img src="../assets/images/client-logo-03.png" alt="">
                </a>
            </div>
            <div class="col text-center">
                <a href="">
                    <img src="../assets/images/client-logo-04.png" alt="">
                </a>
            </div>
            <div class="col text-center">
                <a href="">
                    <img src="../assets/images/client-logo-05.png" alt="">
                </a>
            </div>
            <div class="col text-center">
                <a href="">
                    <img src="../assets/images/client-logo-06.png" alt="">
                </a>
            </div>
            <div class="col text-center">
                <a href="">
                    <img src="../assets/images/client-logo-07.png" alt="">
                </a>
            </div>
        </div>

    </div>


</template>

<style lang="scss" scoped>
.logos {
    filter: opacity(0.5);

    :hover.col {
        filter: brightness(0.5);
    }
}
</style>
