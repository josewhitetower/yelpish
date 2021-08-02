<template>
    <div v-for="business in businesses" :key="business.id">
      <h2>{{business.name}}</h2>
    </div>
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
