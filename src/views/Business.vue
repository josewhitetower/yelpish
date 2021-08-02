<template>
    <h2>{{business?.name}}</h2>

</template>
<script lang="ts">
import {
  computed, defineComponent, ref, watchEffect,
} from 'vue';
import { useRoute } from 'vue-router';
import { Business } from '@/types';
import { getBusiness } from '../api/index';

export default defineComponent({
  name: 'Business',

  setup() {
    const route = useRoute();
    const business = ref<Business | null>(null);
    const query = computed(() => `
    {
        business(id: "${route.params.alias}"){
            id,
            name,
            alias,
            url,
            rating,
            photos,
            hours {
                is_open_now
                open { start, end}
            },
            reviews {rating, user {name}, time_created}
        }
    }`);

    watchEffect(async () => {
      business.value = await getBusiness(query.value);
    });

    return { business };
  },
});
</script>
