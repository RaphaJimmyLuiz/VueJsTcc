<template>
  <div class="flex items-center justify-center min-h-screen bg-gradient-to-b from-red-100 via-green-100 to-orange-100">
    <div class="bg-white shadow-lg rounded-2xl p-8 w-full max-w-md">
      <h2 class="text-2xl font-bold text-red-600 text-center mb-6">Login</h2>

      <div class="mb-4">
        <label class="block text-gray-700">Email</label>
        <input
          type="email"
          placeholder="Digite seu email"
          class="w-full px-4 py-2 border border-green-400 rounded-md focus:outline-none focus:ring-2 focus:ring-green-500"
        />
      </div>

      <div class="mb-6">
        <label class="block text-gray-700">Senha</label>
        <input
          type="password"
          placeholder="Digite sua senha"
          class="w-full px-4 py-2 border border-orange-400 rounded-md focus:outline-none focus:ring-2 focus:ring-orange-500"
        />
      </div>

      <button class="w-full bg-red-500 text-white py-2 rounded hover:bg-red-600 transition">
        Entrar
      </button>

      <p class="text-center text-sm text-gray-600 mt-4">
        Não tem uma conta?
        <a href="#" class="text-green-600 hover:underline">Cadastre-se</a>
      </p>
    </div>
  </div>
</template>
