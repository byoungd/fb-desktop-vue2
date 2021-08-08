import Vue from 'vue'
import App from './App.vue'
import * as ElementUI from 'element-ui'
import router from './router'
import store from './store'
import VCA from '@vue/composition-api'
import { createApp, h } from 'vue-demi'

import 'normalize.css'
import 'element-ui/lib/theme-chalk/index.css'
import 'element-ui/lib/theme-chalk/display.css'
import 'windi.css'

Vue.use(ElementUI).use(VCA)
Vue.config.productionTip = false

const app = createApp({
  router,
  store,
  render: () => h(App),
})

app.mount('#app')
