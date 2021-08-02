<template>
    <ul>
        <li v-for="business in businesses" :key="business.id">
            <router-link :to="`/business/${business.alias}`">
                <h2>{{business.name}}</h2>
            </router-link>
        </li>
    </ul>
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
