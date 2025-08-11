<template>
  <l-map style="height: 100vh; width: 100%;" :zoom="13" :center="center">
    <l-tile-layer
      url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      attribution="&copy; OpenStreetMap contributors"
    />
    <l-marker v-for="(train, index) in trains" :key="index" :lat-lng="train.position">
      <l-popup>{{ train.name }}</l-popup>
    </l-marker>
  </l-map>
</template>

<script>
import { LMap, LTileLayer, LMarker, LPopup } from "vue3-leaflet";
import "leaflet/dist/leaflet.css";

export default {
  components: { LMap, LTileLayer, LMarker, LPopup },
  data() {
    return {
      center: [28.6139, 77.2090], // Example: New Delhi
      trains: [
        { name: "Train 1", position: [28.6139, 77.2090] },
        { name: "Train 2", position: [28.7041, 77.1025] },
      ],
    };
  },
};
</script>
