<template>
  <div class="home">
    <input type="text" v-model.trim.lazy="location">
    <business-list :businesses="businesses"/>
  </div>
</template>

<script lang="ts">
import {
  computed, defineComponent, ref, watchEffect,
} from 'vue';
import { getBusinesses } from '@/api/index';
import { Business } from '@/types/index';
import BusinessList from '../components/BusinessList.vue';

export default defineComponent({
  name: 'Home',
  components: {
    BusinessList,
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

    watchEffect(async () => {
      businesses.value = await getBusinesses(query.value);
    });

    return { businesses, location };
  },
});
</script>
