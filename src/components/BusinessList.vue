<template>
    <u class="flex overflow-x-auto business-list justify-between">
        <li
          v-for="business in businesses"
          :key="business.alias"
          class="list-none flex-shrink-0 w-96"
          >
            <router-link :to="`/business/${business.alias}`">
              <div class="mr-6">
                <img
                  :src="business.photos[0]"
                  class="h-60 w-full object-cover rounded-lg"/>

              </div>
            </router-link>
        </li>
    </u>
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
