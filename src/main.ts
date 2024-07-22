import { createApp } from "vue";
import "./style.css";
import App from "./views/apps/App.vue";
import router from "./router";
import { createPinia } from "pinia";
import ElementPlus from "element-plus";
import "element-plus/dist/index.css";
import "./assets/scss/global.scss";

const pinia = createPinia();

const app = createApp(App);

app.use(router);
app.use(pinia);
app.use(ElementPlus);

app.mount("#app");
