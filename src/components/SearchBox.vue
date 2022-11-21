<script>

export default {
    name: "SearchBox"
}

</script>

<template>

    <section class="align-items-center d-flex px-4">

        <div class="bg-secondary border d-flex form-group justify-content-center">
            <input type="text" class="bg-transparent border-0 form-control" name="" id="" aria-describedby="helpId"
                placeholder="Cosa cerchi?">
            <button type="button" class="btn" @click="$emit('searchList')"><i
                    class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </section>


</template>

<style lang="scss" scoped>

</style>
