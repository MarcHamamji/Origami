<template>
  <div @click="cardClicked" class="card">
    <header>
      <h2>
        {{ project.name }}
      </h2>
    </header>
    <img class="image" :src="'images/' + project.images[0]" alt="" />
  </div>
</template>

<script lang="ts">
import { useStore } from '@/store';
import { defineComponent } from 'vue';
import { useRouter } from 'vue-router';

interface Props {
  projectId: string;
}

export default defineComponent({
  setup(props: Props) {
    const {
      getters: { getProject },
    } = useStore();

    const router = useRouter();

    const project = getProject(props.projectId);

    const cardClicked = () => {
      router.push(`/${props.projectId}`);
    };

    return {
      cardClicked,
      project,
    };
  },
  props: {
    projectId: { type: String, required: true },
  },
});
</script>

<style lang="scss" scoped>
.card {
  width: 90%;
  max-width: 360px;
  margin: 0.5rem;
  display: inline-flex;
  flex-direction: column;
  box-shadow: $shadow;
  cursor: pointer;
  transition: all 100ms linear;

  &:hover {
    transform: scale(1.02);
  }

  .image {
    width: 100%;
    margin: 0;
    padding: 0;
  }

  header {
    background-color: $primary-color;

    h2 {
      margin: 0.9rem;
    }
  }
}
</style>
