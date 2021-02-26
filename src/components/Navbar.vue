<template>
  <nav class="navbar">
    <a href="/#/">
      {{ text }}
    </a>
  </nav>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  props: {
    text: String,
  },
});
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  margin: 0;
  background-color: $primary-color;
  text-align: center;
  padding: 8px 0;
  box-shadow: $shadow;
  position: sticky;
  top: 0px;
  z-index: 2;

  a {
    text-decoration: none;
    font-weight: bold;
    margin: 0;
    font-size: 2rem;
    display: inline;
  }
}
</style>
