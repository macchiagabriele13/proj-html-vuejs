import { createApp } from 'vue'

// Import our custom CSS
import '../src/style.scss'

// Import all of Bootstrap's JS
import * as bootstrap from 'bootstrap'
import App from './App.vue';


/* import the fontawesome core */
import { library } from "@fortawesome/fontawesome-svg-core";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";
import { faSquareFacebook } from "@fortawesome/free-brands-svg-icons";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";




/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
library.add(
    faTwitter,
    faSquareFacebook,
    faInstagram,
    faLinkedin,

);
createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
