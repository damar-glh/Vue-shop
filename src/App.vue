<template>
  <div class="container mt-5">
    <h1>VueShop</h1>
    <ProductList :product="products" :maximum="maximum"></ProductList>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.Vue";

export default {
  name: "App",
  data: function () {
    return {
      maximum: 50,
      products: [],
    };
  },
  components: {
    // FontAwesomeIcon,
    ProductList,
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
};
</script>
