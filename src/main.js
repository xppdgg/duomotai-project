import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import './style.css'

// 引入 Element Plus
import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

// 引入 Ant Design Vue
import Antd from 'ant-design-vue'
import 'ant-design-vue/dist/reset.css'

const app = createApp(App)

app.use(router)
app.use(ElementPlus)
app.use(Antd)

app.mount('#app')