import { createApp } from "vue";
import App from "./App.vue";

import { library } from "@fortawesome/fontawesome-svg-core";

/* import font awesome icon component */
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

/* import specific icons */
import {
  faBookmark,
  faUser,
  faBell,
} from "@fortawesome/free-regular-svg-icons";

import {
  faArrowUpFromBracket,
  faGear,
  faPowerOff,
  faChevronRight,
  faCircleUser,
  faCircleCheck,
  faPlus,
  faCamera,
  faCircleXmark,
} from "@fortawesome/free-solid-svg-icons";

library.add(
  faBookmark,
  faUser,
  faBell,
  faArrowUpFromBracket,
  faCircleUser,
  faGear,
  faPowerOff,
  faChevronRight,
  faCircleCheck,
  faPlus,
  faCamera,
  faCircleXmark
);

import uk from "uikit";
import Icons from "uikit/dist/js/uikit-icons";

uk.use(Icons);

createApp(App).component("font-awesome-icon", FontAwesomeIcon).mount("#app");
