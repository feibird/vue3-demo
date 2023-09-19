import {createApp} from 'vue'
import {createPinia} from 'pinia'

import App from './App.vue'
import router from './router'
import ViewUi from 'view-ui-plus'
import 'highlight.js/styles/atom-one-dark.css'
import 'view-ui-plus/dist/styles/viewuiplus.css'

const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(ViewUi)
app.mount('#app')
