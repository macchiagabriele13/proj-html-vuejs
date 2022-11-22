<script>

export default {
    name: "Navbar",
    data() {
        return {
            navList: [
                {
                    text: 'Home',
                    href: '#'
                },
                {
                    text: 'Pages',
                    href: '#'
                },
                {
                    text: 'Courses',
                    href: '#'
                },
                {
                    text: 'Features',
                    href: '#'
                },
                {
                    text: 'Blog',
                    href: '#'
                },
                {
                    text: 'Shop',
                    href: '#'
                },
            ],

        }
    },
}



</script>

<template>

    <div class="align-items-center d-flex nav_container">


        <!-- Nav tabs -->
        <ul class="nav" id="navId">
            <li class="nav-item dropdown" v-for="link in navList">
                <a class="nav-link dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true"
                    aria-expanded="false" :href="link.href">{{ link.text }}
                    <svg xmlns="http://www.w3.org/2000/svg" class="chevdown" viewBox="0 0 512 512">
                        <path
                            d="M233.4 406.6c12.5 12.5 32.8 12.5 45.3 0l192-192c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L256 338.7 86.6 169.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3l192 192z" />
                    </svg>
                </a>
                <div class="dropdown-menu">
                    <a class="dropdown-item" href="#tab2Id">Action</a>
                    <a class="dropdown-item" href="#tab3Id">Another action</a>
                    <a class="dropdown-item" href="#tab4Id">Action</a>
                </div>
            </li>

        </ul>

        <!-- Tab panes -->
        <div class="tab-content">
            <div class="tab-pane fade show active" id="tab1Id" role="tabpanel"></div>
            <div class="tab-pane fade" id="tab2Id" role="tabpanel"></div>
            <div class="tab-pane fade" id="tab3Id" role="tabpanel"></div>
            <div class="tab-pane fade" id="tab4Id" role="tabpanel"></div>
            <div class="tab-pane fade" id="tab5Id" role="tabpanel"></div>
        </div>

        <!-- UserProfile -->
        <div class="circle bg-black rounded-circle text-center">
            <i class="fa-regular fa-user"></i>
        </div>

    </div>


</template>

<style lang="scss" scoped>
.dropdown-toggle::after {
    display: inline-block;
    margin-left: 0.255em;
    vertical-align: 0.255em;
    border-top: 0.3em solid;
    border-right: 0.3em solid transparent;
    border-bottom: 0;
    border-left: 0.3em solid transparent;
    content: none;
}

.chevdown {
    width: 10px;
}

.circle {
    height: 25px;
    border: 1px solid gray;

    i {
        height: 100%;
        width: 25px;
        aspect-ratio: 1/1;
        color: gray;
    }
}
</style>
