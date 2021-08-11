<template>
    <div v-if="business">

        <h2>{{business.name}}</h2>

        <p>{{business.location.formatted_address}}</p>

        <GoogleMap :coordinates="business.coordinates" />
    </div>

</template>
<script lang="ts">
import {
  defineComponent, ref, watchEffect,
} from 'vue';
import { IBusiness } from '@/types/index';
import GoogleMap from '@/components/GoogleMap.vue';
import useBusiness from '../composables/useBusiness';

export default defineComponent({
  name: 'Business',
  components: { GoogleMap },

  setup() {
    const business = ref<IBusiness | null>(null);

    watchEffect(async () => {
      business.value = await useBusiness();
    });

    return { business };
  },
});
</script>
