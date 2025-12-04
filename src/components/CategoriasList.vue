<template>
  <div class="categorias-container">
    <h2>Categorías</h2>
    
    <!-- Estado de carga -->
    <div v-if="loading" class="loading">
      Cargando categorías...
    </div>
    
    <!-- Estado de error -->
    <div v-else-if="error" class="error">
      Error: {{ error }}
    </div>
    
    <!-- Estado de éxito -->
    <div v-else class="categorias-list">
      <div v-if="categorias.length === 0">
        No hay categorías disponibles
      </div>
      
      <div v-else>
        <div 
          v-for="categoria in categorias" 
          :key="categoria.id"
          class="categoria-card"
        >       

          <h3>{{ categoria.descripcion }}</h3>
          <img 
            :src="categoria.url_imagen" 
            :alt="categoria.descripcion" 
            class="categoria-image"
            v-if="categoria.url_imagen" 
          />
          <p v-if="categoria.descripcion">{{ categoria.descripcion }}</p>
          <!-- <small>ID: {{ categoria.id }}</small> --> 
        
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase/supabaseClient'

// Variables reactivas
const categorias = ref([])
const loading = ref(true)
const error = ref(null)

// Función para obtener categorías
const fetchCategorias = async () => {
  try {
    loading.value = true
    error.value = null
    
    const { data, error: supabaseError } = await supabase
      .from('categoria')
      .select('*')
      .order('descripcion', { ascending: true })
    
    if (supabaseError) throw supabaseError
    
    categorias.value = data || []
  } catch (err) {
    error.value = err.message
    console.error('Error al obtener categorías:', err)
  } finally {
    loading.value = false
  }
}

// Al montar el componente
onMounted(() => {
  fetchCategorias()
})
</script>

<style scoped>
.categorias-container {
  padding: 20px;
  max-width: 800px;
  margin: 0 auto;
}

h2 {
  color: #333;
  border-bottom: 2px solid #42b883;
  padding-bottom: 10px;
}

.loading {
  text-align: center;
  padding: 20px;
  color: #666;
}

.error {
  background-color: #ffebee;
  color: #c62828;
  padding: 15px;
  border-radius: 5px;
  margin: 10px 0;
}

.categorias-list {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.categoria-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: transform 0.3s;
}

.categoria-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.categoria-card h3 {
  margin-top: 0;
  color: #42b883;
}

.categoria-card p {
  color: #666;
  margin: 8px 0;
}

.categoria-card small {
  color: #999;
  font-size: 0.8rem;
}

.categoria-image {
  width: 100%; /* Ocupa todo el ancho de la tarjeta */
  height: auto; /* Mantiene la proporción */
  max-height: 150px; /* Limita la altura máxima */
  object-fit: cover; /* Recorta si es necesario para cubrir el área */
  border-radius: 6px; /* Bordes ligeramente redondeados */
  margin-bottom: 10px; /* Espacio debajo de la imagen */
}
</style>