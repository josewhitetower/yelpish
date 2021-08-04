<template>
  <div class="home">
    <h1 class="font-display text-6xl">Yelpish, find your place...</h1>
    <Search :location="location" @search="onSearch"/>
    <BusinessList :businesses="businesses"/>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, ref, watchEffect,
} from 'vue';
import { getBusinesses } from '@/api/index';
import { Business } from '@/types/index';
import BusinessList from '../components/BusinessList.vue';
import Search from '../components/Search.vue';

export default defineComponent({
  name: 'Home',
  components: {
    BusinessList,
    Search,
  },
  setup() {
    const location = ref('hamburg');

    const query = computed(() => `
    {
      search(categories: "gaybars", location: "${location.value}", limit: 10) {
        business {
          name,
          alias,
          rating,
          distance,
          photos,
          hours {
            is_open_now
          }
        }
      }
    }`);

    const businesses = ref<Array<Business>>([]);
    const onSearch = (term: string): void => { location.value = term; };

    watchEffect(async () => {
      businesses.value = await getBusinesses(query.value);
    });

    return { businesses, location, onSearch };
  },
});
</script>
