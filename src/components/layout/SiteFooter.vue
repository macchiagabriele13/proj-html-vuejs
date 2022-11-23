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
                <div class="col-6">
                    <div class="indirizzo">
                        <div class="titolo">
                            <h2>Address</h2>
                        </div>
                        <div class="info">
                            <p>382 NE 191st St # 87394 Miami, FL 33179-3899</p>
                        </div>
                        <div class="info">
                            <p>+1 (305) 547-9909 (9am - 5pm EST,Monday - Friday)</p>
                        </div>
                        <div class="info link">
                            <a class="text-decoration-none" href="mailto:suppor@maxcoach.com">suppor@maxcoach.com</a>
                        </div>
                        <div class="d-flex justify-content-between link pt-4 social w-50">
                            <a v-for="icon in store.socials" class="nav-link" :href="icon.href">
                                <font-awesome-icon :icon="['fab', icon.icon]" />
                            </a>

                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="indirizzo">
                        <div class="titolo">
                            <h2>Explore</h2>
                        </div>
                        <div class="info link">
                            <ul>
                                <li class="w-50" v-for="link in store.footList">
                                    <a class="text-decoration-none" :href="link.href">{{ link.text }}</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="information">
                        <div class="titolo">
                            <h2>Information</h2>
                        </div>
                        <div class="info link">
                            <ul>
                                <li>
                                    <a class="text-decoration-none" href="#">Membership</a>
                                </li>
                                <li>
                                    <a class="text-decoration-none" href="#">Purchase guide</a>
                                </li>
                                <li>
                                    <a class="text-decoration-none" href="#">Privacy policy</a>
                                </li>
                                <li>
                                    <a class="text-decoration-none" href="#">Terms of services</a>
                                </li>
                            </ul>

                        </div>
                    </div>
                </div>

            </div>
            <div class="copyright">
                <p>
                    <i class="fa-regular fa-copyright"></i>2020 Maxcoach. All Rights Reserved
                </p>

            </div>
        </div>
    </section>


</template>

<style lang="scss" scoped>
@use '../../assets/scss/variables' as *;

.footer {
    background-color: #F8F8F8;
    padding: 3rem 0;
}

.indirizzo {

    color: $darkgray;

    .titolo {

        h2 {
            font-size: 18px !important;
            font-weight: 700 !important;
            padding-bottom: 0.75rem !important;

        }
    }

    a {

        color: $darkgray;

        &:hover {
            cursor: pointer;
            color: $back-texthover;

        }

    }

    .link {

        &:hover {
            cursor: pointer;
            color: $back-texthover;

        }

    }

    .svg-inline--fa {
        width: 25px;
        height: 50px;
    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;
        display: flex;
        flex-wrap: wrap;

        li {
            margin-bottom: 1rem;

        }
    }
}

.information {
    color: $darkgray;

    .titolo {

        h2 {
            font-size: 18px !important;
            font-weight: 700 !important;
            padding-bottom: 0.75rem !important;

        }
    }

    a {

        color: $darkgray;

        &:hover {
            cursor: pointer;
            color: $back-texthover;

        }

    }

    .link {

        &:hover {
            cursor: pointer;
            color: $back-texthover;

        }

    }

    ul {
        list-style-type: none;
        margin: 0;
        padding: 0;


        li {
            margin-bottom: 1rem;

        }
    }
}

.copyright {
    text-align: center;
    padding-top: 4rem;
    font-size: 14px;
    color: $paragraphcolor;

    i {
        padding-right: 10px;
    }
}
</style>
