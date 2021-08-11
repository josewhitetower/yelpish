<template>
    <div class="relative">
      <div class="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-white w-2"></div>
      <div class="absolute top-0 right-0 bottom-0 bg-gradient-to-l from-white w-2"></div>
      <h2 class="text-left text-3xl md:text-5xl px-2 mb-4 capitalize">{{category}}</h2>
      <u class="flex overflow-x-auto business-list justify-between gap-4 px-2">
          <li
            v-for="(business) in businesses"
            :key="business.alias"
            class="list-none flex-shrink-0 w-full md:w-1/2 lg:w-1/4 text-left"
            >
                <div class="">
                  <router-link :to="`/business/${business.alias}`">
                      <img
                        :src="business.photos[0]"
                        class="h-60 w-full object-cover rounded-lg"/>
                      <h3
                        class="text-lg font-bold mt-2 inline-block no-underline">
                        {{business.name}}
                      </h3>
                  </router-link>
                  <p class="">
                    <span
                      class="inline-block text-xs"
                      v-for="(category, index) in business.categories"
                      :key="category.alias">
                        <span v-if="index != 0">, </span>
                        <span>{{ category.title }}</span>
                    </span>
                  </p>
                </div>
          </li>
      </u>
    </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IBusiness } from '@/types';

export default defineComponent({
  props: {
    businesses: {
      required: true,
      type: Array as PropType<IBusiness[]>,
    },
    category: {
      required: false,
      type: String,
    },
  },
});
</script>
<style scoped>
 .business-list::-webkit-scrollbar {
    display: none;
}
</style>
