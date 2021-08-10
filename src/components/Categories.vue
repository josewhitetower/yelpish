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
        color: '#6366F1 ',
      },
      {
        alias: 'bars',
        icon: 'local_bar',
        color: '#34D399',
      },
      {
        alias: 'cafes',
        icon: 'local_cafe',
        color: '#F59E0B',
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
