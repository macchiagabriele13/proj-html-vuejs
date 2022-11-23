<script>


export default {
    name: "NewsLetter",

}

</script>

<template>

    <section class="banner">
        <div class="banner_wrap text-center">

            <div class="wrap_title">
                <h2 class="">
                    Subscribe <span class="marked">NewsLetter</span>
                </h2>
                <p>
                    Enter your email address to register to our newsletter subscription<br>delivered on a regular basis!
                </p>
            </div>
            <div class="wrap_form">
                <div class="form_element">
                    <div class="email_form w-100">
                        <input class="w-100" type="email" placeholder="Enter your email">
                    </div>
                    <div class="button_form w-25">
                        <button class="w-100" type="submit"><span>Subcribe</span></button>
                    </div>

                </div>
            </div>
        </div>


    </section>





</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.wrap_form {
    display: flex;
    justify-content: center;

    .email_form {
        &:focus {
            border: 0px solid transparent !important;

            input {
                &:focus {
                    background-color: white;
                    border: 5px solid $back-texthover !important;

                }
            }


        }

    }

    input {

        min-height: 52px;
        padding: 3px 20px;
        border: 0;
        height: 100%;
        border-radius: 5px 0px 0px 5px;
        color: #7e7e7e;
        background-color: #f5f5f5;
        font-size: 15px;
        font-weight: 400;
        letter-spacing: 0em;

    }

    button {
        height: 100%;
        color: white;
        font-weight: 500;
        background: $back-texthover;
        border: 0px;
        font-size: 14px;
        border-radius: 0px 5px 5px 0px;

        &:hover {
            background-color: $primarycolor;
        }
    }
}

.form_element {
    display: flex;
    justify-content: center;
    width: 550px;
}

.w-25 {
    width: 35% !important;
}

.wrap_title {
    margin-bottom: 45px;
}

.banner {
    padding: 90px 0px 100px 0px;



    h2 {
        font-size: 34px;
        font-weight: 700;
        margin: 10px 0 30px 0;

        .marked {
            color: $back-texthover;
            font-weight: 400;
        }
    }

    p {
        margin-top: 0;
        margin-bottom: 0;
        font-size: 18px;
        font-weight: 500;
        line-height: 1.67em;
        text-align: center;
        color: $darkgray;
    }
}
</style>
