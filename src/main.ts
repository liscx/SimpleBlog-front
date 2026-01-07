import {createApp} from 'vue'
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
　