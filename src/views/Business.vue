<template>
    <div v-if="business">

        <h2>{{business.name}}</h2>

        <p>{{business.location.formatted_address}}</p>

        <GoogleMap :coordinates="business.coordinates" />
    </div>

</template>
<script lang="ts">
import {
  computed, defineComponent, ref, watchEffect,
} from 'vue';
import { useRoute } from 'vue-router';
import { IBusiness } from '@/types/index';
import GoogleMap from '@/components/GoogleMap.vue';
import { getBusiness } from '../api/index';

export default defineComponent({
  name: 'Business',
  components: { GoogleMap },

  setup() {
    const route = useRoute();
    const business = ref<IBusiness | null>(null);
    const query = computed(() => `
    {
        business(id: "${route.params.alias}"){
            name,
            alias,
            url,
            rating,
            photos,
            hours {
                is_open_now
                open { start, end }
            },
            reviews { rating, user { name }, time_created },
            coordinates { latitude, longitude },
            location { formatted_address }
        }
    }`);

    watchEffect(async () => {
      business.value = await getBusiness(query.value);
    });

    return { business };
  },
});
</script>
