<script>
import { store } from '../../store.js';

export default {
    name: "SiteFooter",
    data() {
        return {
            store,
        }
    }
}

</script>

<template>

    <section class="footer">
        <div class="container">
            <div class="row">
                <div class="col">
                    <div class="indirizzo">
                        <div class="titolo">
                            <h2>Address</h2>
                        </div>
                        <div class="info link">
                            <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
                        </div>
                        <div class="info link">
                            <p>+1 (305) 547-9909 (9am - 5pm EST,Monday - Friday)</p>
                        </div>
                        <div class="info link">
                            <a class="text-decoration-none">suppor@maxcoach.com</a>
                        </div>
                    </div>
                </div>
                <div class="col"></div>
                <div class="col"></div>
            </div>
        </div>
    </section>


</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables' as *;

.indirizzo {

    color: $darkgray;

    a {

        color: $darkgray;

    }

    .link {

        &:hover {
            cursor: pointer;

        }

    }

}
</style>
