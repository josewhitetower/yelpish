<template>
  <div class="px-4 lg:px-0">
    <h1 class="font-display text-6xl">Yelpish, find your place...</h1>
    <Search :location="location" @search="onSearch"/>
    <Categories @select="onSelect"/>
    <BusinessList :businesses="businesses" :category="category"/>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, ref, watchEffect,
} from 'vue';
import { getBusinesses } from '@/api/index';
import { IBusiness } from '@/types/index';
import BusinessList from '../components/BusinessList.vue';
import Search from '../components/Search.vue';
import Categories from '../components/Categories.vue';

export default defineComponent({
  name: 'Home',
  components: {
    BusinessList,
    Search,
    Categories,
  },
  setup() {
    const location = ref('hamburg');
    const category = ref('restaurants');

    const query = computed(() => `
    {
      search(categories: "${category.value}", location: "${location.value}", limit: 10) {
        business {
          name,
          alias,
          rating,
          distance,
          photos,
          hours {
            is_open_now
          }
          categories { title, alias }
        }
      }
    }`);

    const businesses = ref<Array<IBusiness>>([]);
    const onSearch = (term: string): void => { location.value = term; };
    const onSelect = (selectedCategory:string) => { category.value = selectedCategory; };

    watchEffect(async () => {
      businesses.value = await getBusinesses(query.value);
    });

    return {
      businesses, location, onSearch, onSelect, category,
    };
  },
});
</script>
