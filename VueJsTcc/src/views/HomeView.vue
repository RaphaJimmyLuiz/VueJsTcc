<template>
  <div class="min-h-screen flex items-center justify-center bg-gradient-to-r from-red-100 via-green-100 to-orange-100">
    <div class="bg-white shadow-xl rounded-xl p-10 w-full max-w-sm">
      <h1 class="text-3xl font-bold text-center text-red-600 mb-6">Login</h1>

      <form @submit.prevent="handleLogin">
        <div class="mb-4">
          <label class="block text-gray-700 mb-1" for="email">Email</label>
          <input
            v-model="email"
            id="email"
            type="email"
            required
            class="w-full px-4 py-2 border border-green-300 rounded focus:outline-none focus:ring-2 focus:ring-green-400"
            placeholder="Digite seu email"
          />
        </div>

        <div class="mb-6">
          <label class="block text-gray-700 mb-1" for="password">Senha</label>
          <input
            v-model="password"
            id="password"
            type="password"
            required
            class="w-full px-4 py-2 border border-orange-300 rounded focus:outline-none focus:ring-2 focus:ring-orange-400"
            placeholder="Digite sua senha"
          />
        </div>

        <button
          type="submit"
          class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition"
        >
          Entrar
        </button>
      </form>

      <p class="text-center text-sm mt-6">
        Não tem uma conta?
        <a href="/cadastro" class="text-green-600 hover:underline">Cadastre-se</a>
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')
const password = ref('')

const handleLogin = () => {
  console.log('Email:', email.value)
  console.log('Senha:', password.value)
  // aqui você pode chamar sua API
}
</script>
