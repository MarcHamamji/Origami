<template>
  <div class="table-container">
    <table>
      <thead>
        <tr>
          <th>Color</th>
          <th>Dimensions</th>
          <th>Quantity</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="sheet in sheets" :key="sheet.color">
          <td>{{ sheet.color }}</td>
          <td>{{ `${sheet.width}×${sheet.height}` }}</td>
          <td>{{ sheet.quantity }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { Sheets } from '@/types/projects';

interface Props {
  sheets: Sheets;
}

export default defineComponent({
  props: {
    sheets: {
      type: Object as () => Sheets,
      required: true,
    },
  },
  // setup(props: Props) {
  //   return {
  //     sheets: props.sheets,
  //   };
  // },
});
</script>

<style lang="scss" scoped>
.table-container {
  margin: auto 5%;
  width: 90%;
}

table {
  width: 100%;
  border-collapse: collapse;

  tbody {
    tr {
      border-top: 1px solid $primary-color;
      table-layout: fixed;
      width: auto;
    }
  }
}
</style>
