<template>
    <GoogleMap
        :api-key="apiKey"
        style="width: 100%; height: 500px"
        :center="center"
        :zoom="15"
        >
            <Marker :options="{ position: center }" />
    </GoogleMap>
</template>
<script lang="ts">
import { defineComponent } from 'vue';
import { GoogleMap, Marker } from 'vue3-google-map';
import { ICoordinates } from '@/types';

export default defineComponent({
  props: {
    coordinates: {
      required: true,
      type: Object as () => ICoordinates,
    },
  },
  components: { GoogleMap, Marker },
  setup(props) {
    const center = { lat: props.coordinates.latitude, lng: props.coordinates.longitude };

    const apiKey = process.env.VUE_APP_GOOGLE_APIKEY;

    return { center, apiKey };
  },

});
</script>
