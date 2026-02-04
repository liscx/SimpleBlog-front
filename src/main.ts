import { createApp } from 'vue'
import "./assets/styles/main.css"//全局css 包含主题配置
import "./assets/styles/theme/dark.css"//黑夜主题
import "./assets/styles/theme/light.css"//日间主题
import App from './App.vue'
import router from './router'
import mitt from 'mitt';
import vuetify from './plugins/vuetify'
import { loadFonts } from './plugins/webfontloader'
import { createPinia } from 'pinia'
import 'material-icons/iconfont/material-icons.css';


import { OhVueIcon, addIcons } from "oh-vue-icons";
import { MdToc, MdDashboard, MdCloud } from 'oh-vue-icons/icons/md'
import { WiRain, WiCloudy } from 'oh-vue-icons/icons/wi'
addIcons(MdToc, MdDashboard, MdCloud, WiRain, WiCloudy);
// import '@md-editor-v3/lib/style.css'
const pinia = createPinia()
loadFonts()
const app = createApp(App);
app.config.globalProperties.emitter = mitt();


app.component("oh-icon", OhVueIcon);

app
    .use(router)
    .use(vuetify)
    .use(pinia)
    .mount('#app')
