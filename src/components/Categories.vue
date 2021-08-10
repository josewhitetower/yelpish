<template>
    <ul class="flex justify-around mx-auto items-center lg:w-2/5 w-10/12 mt-20 mb-40">
      <li v-for="category in categories" :key="category.alias">
        <Category
          :category="category"
          :is-selected="category.alias === selectedCategory"
          @select="onClick"/>
    </li>
    </ul>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { ICategory } from '@/types';
import Category from '@/components/Category.vue';

export default defineComponent({

  setup(_, { emit }) {
    const categories = ref<Array<ICategory>>([
      {
        alias: 'restaurants',
        icon: 'restaurant',
        color: 'indigo-500',
        textColor: 'text-indigo-500',
        bgColor: 'bg-indigo-500',
        borderColor: 'border-indigo-500',
        hoverColor: 'hover:bg-indigo-500',
      },
      {
        alias: 'bars',
        icon: 'local_bar',
        color: 'green-400',
        textColor: 'text-green-400',
        bgColor: 'bg-green-400',
        borderColor: 'border-green-500',
        hoverColor: 'hover:bg-green-500',
      },
      {
        alias: 'cafes',
        icon: 'local_cafe',
        color: 'yellow-500',
        textColor: 'text-yellow-500',
        bgColor: 'bg-yellow-500',
        borderColor: 'border-yellow-500',
        hoverColor: 'hover:bg-yellow-500',
      },
    ]);

    const selectedCategory = ref(categories.value[0].alias);

    const onClick = (alias: string) => {
      selectedCategory.value = alias;
      emit('select', alias);
    };

    return {
      categories, onClick, selectedCategory,
    };
  },
  components: {
    Category,
  },
});
</script>
