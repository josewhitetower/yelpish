<template>
  <div class="home">
    Hello
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Home',
  components: {
  },
  setup(props) {
    console.log({ props });
  },
});
</script>
