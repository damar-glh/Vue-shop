import { createApp } from "vue";
import VueRouter from "vue-router";
import App from "./App.vue";
import "bootstrap";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css";
import { library } from "@fortawesome/fontawesome-svg-core";
import {
  faShoppingCart,
  faDollarSign,
} from "@fortawesome/free-solid-svg-icons";
import Products from "./components/Product";
import Checkout from "./components/Checkout";

library.add(faShoppingCart, faDollarSign);

createApp.use(VueRouter);
createApp.config.productionTip = false;
const router = new VueRouter({
  routes: [
    {
      path: "*",
      component: Products,
    },
    {
      path: "/checkout",
      component: Checkout,
    },
  ],
});
createApp(App).mount("#app"), router;
