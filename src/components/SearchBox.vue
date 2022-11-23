<script>

export default {
    name: "SearchBox"
}

</script>

<template>

    <section class="align-items-center d-flex px-4">

        <div class="d-flex form-group justify-content-center">
            <input type="text" class="" name="" id="" aria-describedby="helpId" placeholder="Search...">
            <button type="button" class="btn"><i class="fa-solid fa-magnifying-glass"></i></button>
        </div>
    </section>


</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.form-group:focus {
    border: 2px solid;
    border-color: $back-texthover;
}

.input:focus {
    border: 2px solid;
    border-color: $back-texthover;
}


input {
    min-height: 48px;
    padding-right: 30px;
    padding-left: 20px;
    color: #696969;
    border-color: none;
    background: #f5f5f5;
    border: none;
    border-radius: 5px 0px 0px 5px;



}

button.btn {
    color: $back-texthover;
    background-color: #f5f5f5;
    border-radius: 0px 5px 5px 0px;

    &:hover {
        background-color: $back-texthover;
        color: #f5f5f5;
    }
}
</style>
