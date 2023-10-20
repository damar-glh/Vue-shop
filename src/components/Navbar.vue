<template>
  <nav class="navbar navbar-light bg-light sticky-top">
    <div class="container-fluid">
      <a class="navbar-brand fw-bolder">VueShop.id</a>
      <div class="navbar-text ml-auto d-flex">
        <button
          class="btn btn-sm btn-outline-success"
          @click="$emit('toggle-slide')"
        >
          <font-awesome-icon icon="dollar-sign"></font-awesome-icon>
        </button>
        <div class="dropdown ml-2" v-if="cart.length > 0">
          <button
            type="button"
            class="btn btn-success btn-sm dropdown-toggle"
            id="dropdownCart"
            data-bs-toggle="dropdown"
            aria-haspopup="true"
            aria-expanded="false"
          >
            <span class="badge badge-pill badge-light">{{ cartQty }}</span>
            <i class="fas fa-shopping-cart mx-2"></i>
            <font-awesome-icon icon="shopping-cart"></font-awesome-icon>
            <price :value="Number(cartTotal)"></price>
          </button>
          <div
            class="dropdown-center dropdown-menu"
            aria-labelledby="dropdownCart"
          >
            <div v-for="(item, index) in cart" :key="index">
              <div class="dropdown-item text-nowrap text-right">
                <span class="badge bg-danger align-text-top mr-1">
                  {{ item.qty }}
                </span>
                {{ item.product.name }}
                <b>{{ item.qty * item.product.price }}</b>
                <a
                  href="#"
                  class="badge bg-warning text-white"
                  @click.stop="$emit('delete-item', index)"
                >
                  -
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </nav>
</template>

<script>
import Price from "./Price.vue";
import { FontAwesomeIcon } from "@fortawesome/vue-fontawesome";

export default {
  name: "navbar",
  props: ["cart", "cartQty", "cartTotal"],
  components: {
    Price,
    FontAwesomeIcon,
  },
  filters: {
    currencyFormat: function (value) {
      return "Rp" + Number.parseFloat(value).toFixed(2);
    },
  },
};
</script>
