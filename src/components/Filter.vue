<template>
  <input type="text" v-model="filter" placeholder="Filter" />
</template>

<script lang="ts">
import { computed, defineComponent } from 'vue';
import { useStore } from '@/store';

export default defineComponent({
  setup() {
    const {
      state: { filter: stateFilter },
      commit,
    } = useStore();

    const filter = computed({
      get() {
        return stateFilter;
      },
      set(value) {
        commit('setFilter', value);
      },
    });

    return {
      filter,
    };
  },
});
</script>

<style lang="scss" scoped>
input {
  box-sizing: border-box;
  display: block;
  width: 640px;
  max-width: 90%;
  margin: 8px auto;
  padding: 8px 16px;
  line-height: 25px;
  font-size: 18px;
  font-weight: 500;
  border-radius: 6px;
  -webkit-appearance: none;
  color: $font-color;
  border: 1px solid $primary-color;
  transition: all 0.3s ease;
  &::placeholder {
    color: transparentize($color: $font-color, $amount: 0.5);
  }
  &:focus {
    outline: none;
    box-shadow: 0 0 0 4px $transparent-primary-color;
  }
}
</style>
