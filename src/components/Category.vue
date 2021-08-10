<template>
    <span
        :class="[isSelected ? `${category.bgColor} text-white`
                :`${category.textColor}`,
        `material-icons border-2 rounded-2xl
        ${category.borderColor}  py-4 px-6 text-4xl
        cursor-pointer opacity-95
        hover:text-white ${category.hoverColor} transition ease-in duration-150`
        ]"
        @click="$emit('select',category.alias)"
        >
        {{category.icon}}
    </span>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
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
});
</script>
