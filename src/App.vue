<template>
  <div class="container mt-5">
    <h1>VueShop</h1>
    <!-- eslint-disable -->
    <p class="animate__animated animate__fadeInRight">Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur minus reprehenderit commodi totam delectus aspernatur deserunt in, culpa veniam ea, ad itaque architecto exercitationem quasi tenetur quas, voluptas consequuntur ipsum. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Accusantium aperiam voluptatem rerum incidunt veniam accusamus eius, saepe, aliquam consequuntur assumenda veritatis iusto dignissimos quibusdam officia eum, mollitia quo quae pariatur.</p>
    <FontAwesomeIcon icon="shopping-cart"></FontAwesomeIcon>
    <Price :value="4.32"></Price>
  </div>
</template>

<script>
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";
import Price from "./components/price/Price.vue";

export default {
  name: "App",
  components: {
    FontAwesomeIcon,
    Price,
  },
};
</script>
