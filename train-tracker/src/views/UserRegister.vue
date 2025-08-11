<template>
  <v-container class="d-flex justify-center align-center" style="min-height: 100vh;">
    <v-card elevation="10" class="pa-8" max-width="400">
      <v-card-title class="text-h5 text-center">User Registration</v-card-title>
      
      <v-form @submit.prevent="register">
        <v-text-field
          v-model="email"
          label="Email"
          prepend-inner-icon="mdi-email"
          variant="outlined"
          required
        />
        <v-text-field
          v-model="password"
          label="Password"
          type="password"
          prepend-inner-icon="mdi-lock"
          variant="outlined"
          required
        />
        
        <v-btn
          type="submit"
          color="green"
          class="mt-4"
          block
        >
          <v-icon left>mdi-account-plus</v-icon>
          Sign Up
        </v-btn>
      </v-form>

      <!-- Link to login page -->
      <div class="text-center mt-4">
        <span>Already have an account?</span>
        <v-btn
          text
          color="blue"
          @click="$router.push('/login')"
        >
          Log In
        </v-btn>
      </div>
    </v-card>
  </v-container>
</template>

<script>
import { auth } from '@/firebase/config'
import { createUserWithEmailAndPassword } from 'firebase/auth'

export default {
  data() {
    return {
      email: '',
      password: ''
    }
  },
  mounted() {
    // If you want to always redirect new visitors here
    if (this.$route.path !== '/register') {
      this.$router.replace('/register')
    }
  },
  methods: {
    async register() {
      try {
        await createUserWithEmailAndPassword(auth, this.email, this.password)
        alert('Account created successfully!')
        this.$router.push('/login')
      } catch (err) {
        alert(err.message)
      }
    }
  }
}
</script>

<style scoped>
.v-card {
  border-radius: 20px;
  background: white;
  width: 100%;
}

.v-container {
  background: linear-gradient(135deg, #4facfe, #00f2fe);
}
</style>
