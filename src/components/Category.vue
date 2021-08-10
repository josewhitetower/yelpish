<template>
    <span
        class="material-icons border-2 rounded-2xl py-4 px-6 text-4xl
          cursor-pointer opacity-95 transition ease-in duration-150 category"
        :class="{'isSelected' : isSelected}"
        @click="$emit('select',category.alias)"
        >
        {{category.icon}}
    </span>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ICategory } from '@/types';

export default defineComponent({
  props: {
    category: {
      type: Object as () => ICategory,
      required: true,
    },
    isSelected: {
      type: Boolean,
      required: true,
    },
  },
  setup(props) {
    const color = ref(props.category.color);
    return {
      color,
    };
  },
});
</script>
<style scoped>
  .category {
    border-color: v-bind(color);
  }
  .category.isSelected,
  .category:hover {
    background-color: v-bind(color);
    color: white
}

</style>
