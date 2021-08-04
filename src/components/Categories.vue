<template>
    <div class="flex justify-around mx-auto items-center lg:w-2/5 w-10/12 mt-20">
        <span
            v-for="category in categories"
            :key="category.title"
            class=""
            :class="[
            `${category.title === selectedCategory
                ? `bg-${category.color} text-white`
                :`text-${category.color}`}`,
            `material-icons border-2 rounded-2xl
            border-${category.color}  py-4 px-6 text-4xl
            cursor-pointer opacity-95
            hover:text-white hover:bg-${category.color} transition ease-in duration-150`
            ]"
            @click="onClick(category.title)"
            >
            {{category.icon}}
        </span>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref } from 'vue';
import { Category } from '@/types';

export default defineComponent({
  setup(_, { emit }) {
    const categories = ref<Array<Category>>([
      {
        title: 'restaurants',
        icon: 'restaurant',
        color: 'indigo-500',
      },
      {
        title: 'bars',
        icon: 'local_bar',
        color: 'green-400',
      },
      {
        title: 'cafes',
        icon: 'local_cafe',
        color: 'yellow-500',
      },
    ]);

    const selectedCategory = ref(categories.value[0].title);
    const onClick = (title: string) => {
      selectedCategory.value = title;
      emit('select', title);
    };

    return { categories, onClick, selectedCategory };
  },
});
</script>
