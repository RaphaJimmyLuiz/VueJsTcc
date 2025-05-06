<template>
  <div class="min-h-screen bg-gradient-to-br from-red-100 via-green-100 to-orange-100 flex items-center justify-center py-10 px-4">
    <div v-if="product" class="bg-white bg-opacity-90 shadow-2xl rounded-3xl p-8 max-w-2xl w-full">
      <h2 class="text-3xl font-bold text-center text-red-600 mb-6">{{ product.name }}</h2>

      <!-- Imagem ilustrativa da marmita -->
      <div class="flex justify-center mb-6">
        <img
          :src="image"
          :alt="product.name"
          class="w-full max-w-md rounded-xl shadow-md"
        />
      </div>

      <!-- Descrição detalhada -->
      <div class="text-gray-800 text-base leading-relaxed mb-4">
        <p>{{ product.description }}</p>
        <p class="mt-2">
          <strong>Quantidade disponível:</strong> {{ product.quantity }}
        </p>
        <p class="mt-4 text-sm text-gray-600">
          Essa marmita está disponível para doação em nossa plataforma. Reservando, você garante que será separada especialmente para você!
        </p>
      </div>

      <!-- Botão de reservar -->
      <div class="text-center mt-6">
        <button
          @click="reservarMarmita"
          class="bg-green-500 hover:bg-green-700 text-white font-semibold px-6 py-2 rounded-lg transition"
        >
          Reservar Marmita
        </button>
      </div>

      <!-- Mensagem de confirmação -->
      <p v-if="mensagem" class="mt-4 text-green-700 text-center font-semibold">{{ mensagem }}</p>
    </div>
    <div v-else class="text-center text-red-600 text-lg font-semibold">
      Produto não encontrado.
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { useRoute } from 'vue-router'

// Simulando base de dados
const route = useRoute()
const products = [
  {
    id: 1,
    name: 'Marmita Strogonoff',
    description: 'Marmita deliciosa com strogonoff de frango cremoso, arroz soltinho e batata palha crocante. Uma refeição completa e saborosa para seu dia!',
    quantity: 12,
    image: 'https://images.unsplash.com/photo-1604909052995-d7d7eaf07d36?auto=format&fit=crop&w=600&q=80',
  },
  {
    id: 2,
    name: 'Marmita Feijoada',
    description: 'Marmita tradicional com feijoada leve, arroz branco e salada fresca de couve com tomate. Ideal para um almoço nutritivo.',
    quantity: 8,
    image: 'https://images.unsplash.com/photo-1576402187873-3b5273765205?auto=format&fit=crop&w=600&q=80',
  }
]

// Pegando o ID da URL
const id = Number(route.params.id)
const product = products.find(p => p.id === id)
const image = product?.image || 'https://via.placeholder.com/400x300'
const mensagem = ref('')

const reservarMarmita = () => {
  mensagem.value = `Você reservou a ${product.name} com sucesso!`
}

console.log('ID da rota:', id)
console.log('Produto encontrado:', product)
</script>
