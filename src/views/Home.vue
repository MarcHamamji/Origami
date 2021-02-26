<template>
  <div class="container">
    <project-overview v-for="project in projects" :key="project.id" :projectId="project.id" />
  </div>
</template>

<script lang="ts">
import ProjectOverview from '@/components/ProjectOverview.vue';
import { useStore } from '@/store';
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const {
      state: { projects },
    } = useStore();

    return { projects };
  },
  components: {
    ProjectOverview,
  },
});
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  padding: 10px;
}
</style>
