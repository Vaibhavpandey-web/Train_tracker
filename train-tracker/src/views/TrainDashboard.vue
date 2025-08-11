<template>
  <v-container class="d-flex justify-center align-center" style="min-height: 100vh;">
    <v-card elevation="10" class="pa-8" max-width="500" style="position: relative;">
      <v-card-title class="text-h5 text-center">
         🚝Welcome to Train Tracker
      </v-card-title>

      <v-form @submit.prevent="submitPNR">
        <v-text-field
          v-model="pnr"
          label="Enter 10-digit PNR Number"
          prepend-inner-icon="mdi-ticket-confirmation"
          variant="outlined"
          :rules="[pnrRule]"
          required
        />

        <v-btn
          type="submit"
          color="primary"
          block
          class="mt-4"
        >
          <v-icon start>mdi-map-search</v-icon>
          Track Train
        </v-btn>
      </v-form>

      <!-- Vuetify 3 Loading Overlay -->
      <v-overlay
        v-model="loading"
        class="align-center justify-center"
        contained
        scrim="rgba(0, 0, 0, 0.3)"
        style="backdrop-filter: blur(6px);"
      >
        <v-progress-circular
          indeterminate
          size="64"
          width="6"
          color="white"
        />
      </v-overlay>

      <!-- Train map appears after valid PNR -->
      <div v-if="isValidPNR" class="mt-6">
        <TrainMap :pnr="pnr" />
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { db } from '@/firebase/config'
import { ref as dbRef, set } from 'firebase/database'
import TrainMap from '@/components/TrainMap.vue'

export default {
  components: { TrainMap },
  data() {
    return {
      pnr: '',
      isValidPNR: false,
      loading: false, // Loading state
      pnrRule: v => /^\d{10}$/.test(v) || 'PNR must be a 10-digit number'
    }
  },
  methods: {
    submitPNR() {
      if (/^\d{10}$/.test(this.pnr)) {
        this.isValidPNR = true
        this.fetchAndSaveLocation()
      } else {
        alert('Please enter a valid 10-digit PNR number.')
      }
    },
    async fetchAndSaveLocation() {
      this.loading = true // Show spinner
      try {
        await new Promise(resolve => setTimeout(resolve, 1000)) // Smooth animation

        const simulatedData = {
          lat: 28.6448,
          lng: 77.216721
        }

        const trainRef = dbRef(db, `trainLocations/${this.pnr}`)
        await set(trainRef, simulatedData)
        console.log('Simulated train location saved to Firebase')
      } catch (err) {
        console.error('Failed to save train data:', err)
      } finally {
        this.loading = false // Hide spinner
      }
    }
  }
}
</script>
