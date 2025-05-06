<template>
  <div class="min-h-screen bg-gradient-to-br from-red-100 via-green-100 to-orange-100 py-10 px-6">
    <h2 class="text-3xl text-center font-bold text-red-600 mb-10">Lista de Anúncios</h2>

    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
      <div
        v-for="product in products"
        :key="product.id"
        @click="goToDetails(product.id)"
        class="bg-white bg-opacity-80 hover:shadow-xl transition p-6 rounded-3xl cursor-pointer flex flex-col justify-between"
      >
        <div class="text-center">
          <h3 class="text-xl font-semibold text-green-700 mb-2">{{ product.name }}</h3>
          <p class="text-gray-700 text-sm mb-4">{{ product.description }}</p>
          <ul class="text-sm text-gray-800 space-y-1">
            <li><strong>ID:</strong> {{ product.id }}</li>
            <li><strong>Estoque:</strong> {{ product.quantity }}</li>
          </ul>
        </div>
      </div>
    </div>

    <p v-if="resp" class="text-center text-green-700 font-medium mt-6">{{ resp }}</p>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import { useRouter } from 'vue-router'

const router = useRouter()
const resp = ref('')

// Exemplo de lista de produtos
const products = ref([
  { id: 1, name: 'Marmita Strogonoff', description: 'Acompanha strogonoff de frango, arroz e batata palha', quantity: 12 },
  { id: 2, name: 'Marmita Feijoada', description: 'Acompanha Feijoada Leve, arroz, salada de couve com tomate ', quantity: 8 },
  // adicione mais produtos conforme desejar
])

const goToDetails = (id) => {
  router.push(`/anuncios/${id}`)
}

</script>
