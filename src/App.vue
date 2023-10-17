<template>
  <div id="app" class="container mt-5">
    <h1>Vue Shop</h1>
    <price-slider
      :sliderStatus="sliderStatus"
      v-model:maximum.sync="maximum"
    ></price-slider>
    <product-list
      :products="products"
      :maximum="maximum"
      @add="addItem()"
    ></product-list>
  </div>
</template>

<script>
import ProductList from "./components/ProductList.vue";
import PriceSlider from "./components/PriceSlider.vue";

export default {
  name: "App",
  data: function () {
    return {
      maximum: 50,
      products: [],
      cart: [],
      sliderStatus: true,
    };
  },
  components: {
    // FontAwesomeIcon,
    ProductList,
    PriceSlider,
  },
  mounted: function () {
    fetch("https://hplussport.com/api/products/order/price")
      .then((response) => response.json())
      .then((data) => {
        this.products = data;
      });
  },
  methods: {
    addItem: function (product) {
      let productIndex;
      let productExist = this.cart.filter(function (item, index) {
        if (item.product.id == Number(product.id)) {
          productIndex = index;
          return true;
        } else {
          return false;
        }
      });
      if (productExist.length) {
        this.cart[productIndex].qty++;
      } else {
        this.cart.push({ product: product, qty: 1 });
      }
    },
  },
};
</script>
