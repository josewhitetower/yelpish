<template>
    <div v-if="business">
        <h2>{{business.name}}</h2>
        <p>{{business.location.formatted_address}}</p>
        <component :is="GoogleMap" :coordinates="business.coordinates" />
    </div>
</template>

<script lang="ts" setup>
import { ref, watchEffect } from 'vue';
import { IBusiness } from '@/types/index';
import GoogleMap from '@/components/GoogleMap.vue';
import getBusiness from '../composables/getBusiness';

const business = ref<IBusiness | null>(null);
watchEffect(async () => {
  business.value = await getBusiness();
});

</script>
