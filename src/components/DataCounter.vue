<script>


export default {
    name: "DataCounter",
    data() {
        return {
            counterList: [
                {
                    title: 'Successfully trained',
                    number: '1790',
                    subtitle: 'Enrolled Learners',
                },
                {
                    title: 'Proudly Received',
                    number: '19',
                    subtitle: 'Countrywide Awards',
                },
                {
                    title: 'Firmly Established',
                    number: '24',
                    subtitle: 'Local Branches',
                },
                {
                    title: 'Getting Featured on',
                    number: '1090',
                    subtitle: 'Blog Posts',
                },
            ]
        }
    }

}

</script>

<template>

    <section class="counter">
        <div class="container">
            <div class="row">
                <div class="col-3 " v-for="item in counterList">
                    <div class="item_title text-center">
                        <h2>{{ item.title }}</h2>
                    </div>
                    <div class="item_counter text-center">
                        <div class="counter_number" data-duration="2000" data-to-value="1790" data-from-value="0">
                            {{ item.number }}
                        </div>

                        <h5>
                            {{ item.subtitle }}
                        </h5>

                    </div>

                </div>

            </div>

        </div>



    </section>





</template>

<style lang="scss" scoped>
@use '../assets/scss/variables' as *;

.counter {

    .item_title {
        padding: 0 5rem;
    }

    h2 {
        font-size: 24px;
        line-height: 1.34em;
        color: #3F3A64;
        font-weight: 700;
        letter-spacing: 0em;
        margin-bottom: 35px;
    }

    .col-3 {
        border: 1px solid $back-section2;
        padding: 7rem 0;
    }

    .counter_number {
        font-size: 64px;
        font-weight: 800;
        color: $back-texthover;
        line-height: 1;
        letter-spacing: 0em;
    }

    h5 {
        text-transform: uppercase;
        font-size: 16px;
        font-weight: 700;
        line-height: 1.4rem;
        letter-spacing: 2px;
        color: #8C89A2;
        margin-top: 14px;
        margin-bottom: 0px;
    }
}
</style>
