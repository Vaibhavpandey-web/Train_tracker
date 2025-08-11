<template>
  <v-container class="fill-height d-flex justify-center align-center">
    <v-card class="pa-6" max-width="400" elevation="10">
      <v-card-title class="text-h5 text-center">User Login</v-card-title>

      <v-card-text>
        <v-form @submit.prevent="login" class="mt-4">
          <v-text-field
            v-model="email"
            label="Email"
            type="email"
            prepend-inner-icon="mdi-email"
            variant="outlined"
            density="comfortable"
            required
          />

          <v-text-field
            v-model="password"
            label="Password"
            type="password"
            prepend-inner-icon="mdi-lock"
            variant="outlined"
            density="comfortable"
            required
          />

          <v-btn
            block
            type="submit"
            color="primary"
            class="mt-4"
            rounded="lg"
            size="large"
          >
            Login
          </v-btn>

          <v-btn
            block
            color="success"
            class="mt-2"
            rounded="lg"
            size="large"
            @click="goToRegister"
          >
            Register
          </v-btn>
        </v-form>
      </v-card-text>
    </v-card>
  </v-container>
</template>

<script>
import { auth } from '@/firebase/config';
import { signInWithEmailAndPassword } from 'firebase/auth';

export default {
  data() {
    return {
      email: '',
      password: ''
    };
  },
  methods: {
    async login() {
      try {
        await signInWithEmailAndPassword(auth, this.email, this.password);
        this.$router.push('/dashboard');
      } catch (err) {
        alert(err.message);
      }
    },
    goToRegister() {
      this.$router.push('/register');
    }
  }
};
</script>

<style scoped>
.v-card {
  border-radius: 20px;
  background: white;
  width: 100%;
}

.v-container {
  background: linear-gradient(135deg, #4facfe, #00f2fe)
}
</style>
