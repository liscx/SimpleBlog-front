import {createApp} from 'vue'
import "./assets/styles/main.css"//全局css 包含主题配置
import "./assets/styles/theme/dark.css"//黑夜主题
import "./assets/styles/theme/light.css"//日间主题
import App from './App.vue'
import router from './router'
import mitt from 'mitt';
import vuetify from './plugins/vuetify'
import {loadFonts} from './plugins/webfontloader'
// import '@md-editor-v3/lib/style.css'
loadFonts()
const app = createApp(App);
app.config.globalProperties.emitter = mitt();
app
    .use(router)
    .use(vuetify)
    .mount('#app')
　