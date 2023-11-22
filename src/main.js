// eslint-disable-next-line
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import "bootstrap/dist/css/bootstrap.css";
import "bootstrap-vue/dist/bootstrap-vue.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import { BootstrapVue } from "vue";

const app = createApp(App);
app.use(router);
app.use(store);
app.use(BootstrapVue);
app.mount("#app");
