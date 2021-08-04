<template>
    <div class="mt-12">
        <input
            type="text"
            class="bg-blue-50 lg:w-2/5 w-10/12
                p-4 rounded-2xl focus:outline-none focus:ring-1"
            v-model.trim.lazy="searchTerm"
        >
        <span class="material-icons -ml-10 transform translate-y-1.5">search</span>
    </div>
</template>
<script lang="ts">
import { defineComponent, ref, watchEffect } from 'vue';

export default defineComponent({
  props: {
    location: {
      type: String,
      required: false,
    },
  },
  setup(props, { emit }) {
    const searchTerm = ref(props.location);
    watchEffect(() => {
      emit('search', searchTerm.value);
    });
    return {
      searchTerm,
    };
  },
});
</script>
