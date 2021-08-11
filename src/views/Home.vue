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
  computed, defineComponent, ref, watch, watchEffect,
} from 'vue';
import { getBusinesses } from '@/api/index';
import { IBusiness, ICoordinates } from '@/types/index';
import useLocation from '@/composables/useLocation';
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
    const location = ref('');
    const category = ref('restaurants');
    const coordinates = ref <ICoordinates|null>(null);

    const queryLocation = computed(() => (coordinates.value?.latitude && coordinates.value.latitude
      ? `latitude: ${coordinates.value.latitude}, longitude: ${coordinates.value.longitude}`
      : `location: "${location.value}"`));

    const query = computed(() => `
    {
      search(categories: "${category.value}", ${queryLocation.value}, limit: 10) {
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

    watch(query, async () => {
      businesses.value = await getBusinesses(query.value);
    });

    watchEffect(async () => {
      if (!location.value) {
        try {
          const geoLocation = await useLocation();
          coordinates.value = geoLocation.coords;
        } catch (error) {
          console.error('Geolocation is not supported by your browser');
          coordinates.value = null;
        }
      } else coordinates.value = null;
    });

    return {
      businesses, location, onSearch, onSelect, category,
    };
  },
});
</script>
