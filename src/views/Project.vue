<template>
  <div class="card">
    <header>
      <h2>
        {{ project.name }}
      </h2>
    </header>

    <div>
      <carousel :images="project.images" />
    </div>

    <div>
      <span>{{
        // eslint-disable-next-line max-len
        `~ ${project.dimensions.width} × ${project.dimensions.height} × ${project.dimensions.depth} cm`
      }}</span>
    </div>

    <project-table :sheets="project.sheets" />
    <footer></footer>
  </div>
</template>

<script>
import { useStore } from '@/store';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';
import Carousel from '@/components/Carousel.vue';
import ProjectTable from '@/components/ProjectTable.vue';

export default defineComponent({
  setup() {
    const {
      getters: { getProject },
    } = useStore();

    const router = useRouter();
    const { id: projectId } = router.currentRoute.value.params;

    const project = getProject(projectId);

    return {
      project,
    };
  },
  components: {
    Carousel,
    ProjectTable,
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 90%;
  max-width: 640px;
  margin: 0.5rem auto;
  box-shadow: $shadow;
  text-align: center;
  background-color: $card-background-color;

  header {
    padding: 6px;

    h2 {
      margin: 0;
    }
  }

  footer {
    min-height: 30px;
  }

  header,
  footer {
    background-color: $primary-color;
  }
}
</style>
