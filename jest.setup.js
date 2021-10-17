import Vue from 'vue'
import Vuetify from 'vuetify'

import { library } from '@fortawesome/fontawesome-svg-core'
import { faDog } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
library.add(faDog)
Vue.component('font-awesome-icon', FontAwesomeIcon)

Vue.use(Vuetify)