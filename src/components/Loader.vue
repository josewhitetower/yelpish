<template>
    <div class='flex justify-center'>
        <div
            class="mr-1 animate-bounce"
            :class="circleCommonClasses">
        </div>
        <div
            class="mr-1 animate-bounce200"
            :class="circleCommonClasses">
        </div>
        <div
            class="animate-bounce400"
            :class="circleCommonClasses">
        </div>
    </div>
</template>
<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  setup() {
    const circleCommonClasses = 'h-4 w-4 bg-current rounded-full';
    return {
      circleCommonClasses,
    };
  },
});
</script>
