<template>
    <div class="relative">
      <div class="absolute top-0 left-0 bottom-0 bg-gradient-to-r from-white w-4"></div>
      <div class="absolute top-0 right-0 bottom-0 bg-gradient-to-l from-white w-4"></div>
      <u class="flex overflow-x-auto business-list justify-between gap-4 px-4">
          <li
            v-for="(business) in businesses"
            :key="business.alias"
            class="list-none flex-shrink-0 w-full md:w-1/2 lg:w-1/4 text-left"
            >
              <router-link :to="`/business/${business.alias}`">
                <div class="">
                  <img
                    :src="business.photos[0]"
                    class="h-60 w-full object-cover rounded-lg"/>
                  <h3
                    class="text-lg font-bold mt-2 inline-block no-underline">
                    {{business.name}}
                  </h3>
                </div>
              </router-link>
          </li>
      </u>
    </div>
</template>

<script lang="ts">
import { Business } from '@/types';
import { defineComponent, PropType } from 'vue';

export default defineComponent({
  props: {
    businesses: {
      required: true,
      type: Array as PropType<Business[]>,
    },
  },
});
</script>
<style scoped>
 .business-list::-webkit-scrollbar {
    display: none;
}
</style>
