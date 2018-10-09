import Vue from 'vue';//引入vue
import App from './app.vue'//引入app

import './assets/styles/global.styl'


const root = document.createElement('div')
document.body.appendChild(root)
new Vue({
    render: (h) => h(App)//接受app组件
}).$mount(root)//调用挂载