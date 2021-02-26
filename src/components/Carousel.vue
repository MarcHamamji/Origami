<template>
  <div class="carousel">
    <div class="slides">
      <div
        v-for="(imageUrl, index) in images"
        :ref="setItemRef"
        :id="`slide-${index}`"
        :key="index"
      >
        <img :src="'images/' + imageUrl" alt="Project Image" />
      </div>
    </div>
    <span v-if="images.length > 0" class="arrow arrow-left" @click="arrowClicked(-1)">&lt;</span>
    <span v-if="images.length > 0" class="arrow arrow-right" @click="arrowClicked(1)">&gt;</span>
    <div class="links">
      <span
        v-for="(imageUrl, index) in images"
        :key="index"
        @click="goToImage(index)"
        :class="{
          selected: selected === index,
        }"
      ></span>
    </div>
  </div>
</template>

<script lang="ts">
// eslint-disable-next-line object-curly-newline
import { defineComponent, onBeforeUpdate, PropType, ref, onBeforeUnmount } from 'vue';

type Images = string[];

interface Props {
  images: Images;
}

export default defineComponent({
  setup(props: Props) {
    const selected = ref(0);
    let interval: number;

    const setSelected = (newSelected: number) => {
      selected.value = newSelected;
    };

    let linkRefs: HTMLElement[] = [];

    const setItemRef = (el: HTMLElement) => {
      linkRefs.push(el);
    };

    const scrollIntoView = (index: number) => {
      linkRefs[index].scrollIntoView();
    };

    onBeforeUpdate(() => {
      linkRefs = [];
    });

    const goToImage = (index: number) => {
      setSelected(index);
      scrollIntoView(index);
    };

    const removeInterval = () => {
      if (interval) {
        clearInterval(interval);
      }
    };

    const moveCursor = (offset: number) => {
      goToImage((selected.value + offset) % props.images.length);
    };

    const arrowClicked = (offset: number) => {
      removeInterval();
      moveCursor(offset);
    };

    interval = setInterval(() => moveCursor(1), 2000);

    onBeforeUnmount(removeInterval);

    return {
      setItemRef,
      selected,
      goToImage,
      arrowClicked,
    };
  },
  props: {
    images: {
      type: Array as PropType<Images>,
      required: true,
    },
  },
});
</script>

<style lang="scss" scoped>
.carousel {
  width: 90%;
  max-width: 300px;
  margin: 10px auto;
  border: 3px solid $primary-color;
  position: relative;

  & > .arrow {
    font-size: 3rem;
    color: $transparent-primary-color;
    position: absolute;
    bottom: 50%;
    transform: translateY(50%);
    cursor: pointer;

    &:hover {
      color: $primary-color;
    }
  }

  & > .arrow-left {
    left: 10px;
  }

  & > .arrow-right {
    right: 10px;
  }

  & > .links {
    position: absolute;
    bottom: 0px;
    left: 50%;
    transform: translateX(-50%);

    & > span {
      display: inline-block;
      width: 30px;
      height: 6px;
      margin: 4px;
      background-color: $transparent-primary-color;
      cursor: pointer;
      &.selected {
        background-color: $primary-color;
      }
    }
  }

  .slides {
    display: flex;
    scroll-behavior: smooth;
    overflow-x: hidden;

    & > div {
      scroll-snap-align: start;
      flex-shrink: 0;
      width: 100%;
      height: 100%;
      margin-right: 0;
      border-radius: 10px;
      background: #eee;
      transform-origin: center center;
      transform: scale(1);
      transition: transform 0.5s;
      position: relative;
      display: flex;
      justify-content: center;
      align-items: center;
      font-size: 100px;

      & > img {
        width: 100%;
      }
    }
  }
}
</style>
