import { createApp } from 'vue'
import './style.css'
import App from './App.vue'
import {createRouter, createWebHistory} from 'vue-router'
import HomePage from './components/HomePage.vue'
import ContactPage from './components/ContactPage.vue'
import VideoPage from './components/VideoPage.vue'

const router=createRouter({
    history: createWebHistory(),
    routes: [
        {path:'/',name:'HomePage',component:HomePage},
        {path:'/contact',name:'ContactPage',component:ContactPage},
        {path:'/video',name:'VideoPage',component:VideoPage},
    ]
})

createApp(App)
.use(router)
.mount('#app')
