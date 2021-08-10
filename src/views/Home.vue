<template>
  <div class="home">
    <input type="text" v-model.trim.lazy="location">
    <div v-for="business in businesses" :key="business.id">
      <h2>{{business.name}}</h2>
    </div>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, ref, watchEffect,
} from 'vue';
import { Business } from '@/types/index';
import { getBusinesses } from '@/api/index';

export default defineComponent({
  name: 'Home',
  components: {
  },
  setup() {
    const location = ref('hamburg');

    const query = computed(() => `
    {
      search(location: "${location.value}", limit: 5,) {
        business {
          id,
          name,
          url,
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

    watchEffect(async () => {
      businesses.value = await getBusinesses(query.value);
    });

    return { businesses, location };
  },
});
</script>
