import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import store from './store'

// Icons
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

// Styles
import './assets/index.css'
import { faGithubSquare, faGithub, faLinkedin } from '@fortawesome/free-brands-svg-icons'
import { faBars, faCog, faEnvelope, faGlobe } from '@fortawesome/free-solid-svg-icons'

// Vue app
const solidIcons = [faCog, faEnvelope, faGlobe, faBars]
const brandIcons = [faGithubSquare, faLinkedin, faGithub]

solidIcons.forEach((icon) => library.add(icon))
brandIcons.forEach((icon) => library.add(icon))

createApp(App).use(store).use(router).component('font-awesome-icon', FontAwesomeIcon).mount('#app')
