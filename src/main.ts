import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

library.add(fab)

createApp(App)
  .use(router)
  .component("font-awesome-icon", FontAwesomeIcon)
  .mount("#app");
