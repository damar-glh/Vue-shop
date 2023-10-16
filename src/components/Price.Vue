<template>
  <span>{{
    this.prefix + Number.parseFloat(this.value).toFixed(this.precisions)
  }}</span>
</template>

<script>
export default {
  name: "price",
  props: {
    value: Number,
    prefix: {
      typeof: String,
      default: "Rp",
    },
    precisions: {
      typeof: Number,
      default: 2,
    },
  },
};
</script>
