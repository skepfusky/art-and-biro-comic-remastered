import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { MotionPlugin } from '@vueuse/motion'

library.add(fas)
library.add(fab)

createApp(App)
  .use(router)
  .use(MotionPlugin)
  .component("fa", FontAwesomeIcon)
  .mount("#app");
