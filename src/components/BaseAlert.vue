<template>
  <div>
    <div v-bind:class="[getColor, getAlign]" class="alert text-dark">
      <div class="font-weight-bold">{{ title }}</div>
      <div>{{ content }}</div>
      <slot></slot>
    </div>
  </div>
</template>

<script>
export default {
  name: 'BaseAlert',
  props: {
    title: String,
    content: String,
    color: {
      type: String,
      required: false,
      default: 'success'
    },
    align: {
      type: String,
      required: false,
      default: 'left'
    }
  },
  computed: {
    getColor() {
      return `alert-${this.color}`;
    },
    getAlign() {
      return `text-${this.align}`;
    }
  }
};
</script>

<style scoped></style>
