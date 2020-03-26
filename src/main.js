import Vue from 'vue'
import VueMaterial from 'vue-material'
import 'vue-material/dist/vue-material.min.css'
import App from './App.vue'
import router from './router'
import store from './store'

import '@babel/polyfill'

import { registerGlobalComponent } from './utils/project'
registerGlobalComponent(Vue, require.context('./components/common', false, /\.vue$/))

import './styles/reset.css'
import './styles/theme.scss'
import './styles/transition.scss'

Vue.use(VueMaterial)

Vue.config.productionTip = false

// 封装一个全局message命令，方便统一调用
Vue.prototype.$message = ({ message, duration }) => {
    store.commit('trigerSnackbar', { message, duration })
}

new Vue({
    router,
    store,
    render: h => h(App)
}).$mount('#app')
