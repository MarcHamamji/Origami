<template>
  <div class="container">
    <Filter />
    {{ projects }}
    <project-overview
      v-for="project in currentProjects"
      :key="project.id"
      :projectId="project.id"
    />
  </div>
</template>

<script lang="ts">
import Filter from '@/components/Filter.vue';
import ProjectOverview from '@/components/ProjectOverview.vue';
import { useStore } from '@/store';
import { computed, defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  setup() {
    const {
      getters: { currentProjects },
    } = useStore();

    const projects = computed(() => currentProjects);

    return { currentProjects, projects };
  },
  components: {
    ProjectOverview,
    Filter,
  },
});
</script>

<style lang="scss" scoped>
.container {
  text-align: center;
  padding: 10px;
}
</style>
