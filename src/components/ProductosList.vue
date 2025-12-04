<template>
  <div class="productos-container">
    <h2>Productos</h2>
    
    <!-- Filtros (opcional) -->
    <div class="filters" v-if="categorias.length > 0">
      <select v-model="selectedCategory" @change="fetchProductos">
        <option value="">Todas las categorías</option>
        <option 
          v-for="cat in categorias" 
          :key="cat.id" 
          :value="cat.id"
        >
          {{ cat.descripcion }}
        </option>
      </select>
    </div>
    
    <!-- Estados -->
    <div v-if="loading" class="loading">
      Cargando productos...
    </div>
    
    <div v-else-if="error" class="error">
      Error: {{ error }}
    </div>
    
    <!-- Lista de productos -->
    <div v-else class="productos-grid">
      <div v-if="productos.length === 0">
        No hay productos disponibles
      </div>
      
      <div 
        v-for="producto in productos" 
        :key="producto.id"
        class="producto-card"
      >
        <div class="producto-header">
          <h3>{{ producto.descripcion }}</h3>
          <span class="precio">${{ producto.precio?.toFixed(2) }}</span>
        </div>
        
        <p v-if="producto.descripcion" class="descripcion">
          {{ producto.descripcion }}
        </p>
        
        <div class="producto-details">
          <div class="detail">
            <strong>Categoría ID:</strong> {{ producto.id_categoria }}
          </div>
          <div class="detail">
            <strong>Stock:</strong> {{ producto.stock || 'N/A' }}
          </div>
          <div class="detail" v-if="producto.created_at">
            <strong>Creado:</strong> {{ formatDate(producto.created_at) }}
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/supabase/supabaseClient'

// Variables reactivas
const productos = ref([])
const categorias = ref([])
const loading = ref(true)
const error = ref(null)
const selectedCategory = ref('')

// Obtener productos
const fetchProductos = async () => {
  try {
    loading.value = true
    error.value = null
    
    let query = supabase
      .from('producto')
      .select('*')
      .order('descripcion', { ascending: true })
    
    // Filtrar por categoría si está seleccionada
    if (selectedCategory.value) {
      query = query.eq('id_categoria', selectedCategory.value)
    }
    
    const { data, error: supabaseError } = await query
    
    if (supabaseError) throw supabaseError
    
    productos.value = data || []
  } catch (err) {
    error.value = err.message
    console.error('Error al obtener productos:', err)
  } finally {
    loading.value = false
  }
}

// Obtener categorías para el filtro
const fetchCategorias = async () => {
  try {
    const { data, error: supabaseError } = await supabase
      .from('categoria')
      .select('id, descripcion')
      .order('descripcion', { ascending: true })
    
    if (supabaseError) throw supabaseError
    
    categorias.value = data || []
  } catch (err) {
    console.error('Error al obtener categorías para filtro:', err)
  }
}

// Formatear fecha
const formatDate = (dateString) => {
  return new Date(dateString).toLocaleDateString('es-ES')
}

// Al montar el componente
onMounted(async () => {
  await Promise.all([fetchProductos(), fetchCategorias()])
})
</script>

<style scoped>
.productos-container {
  padding: 20px;
  max-width: 1200px;
  margin: 0 auto;
}

.filters {
  margin: 20px 0;
}

.filters select {
  padding: 8px 12px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  background-color: white;
}

.productos-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
  gap: 20px;
  margin-top: 20px;
}

.producto-card {
  background: white;
  border: 1px solid #e0e0e0;
  border-radius: 8px;
  padding: 20px;
  box-shadow: 0 2px 8px rgba(0,0,0,0.1);
  transition: all 0.3s ease;
}

.producto-card:hover {
  transform: translateY(-4px);
  box-shadow: 0 6px 12px rgba(0,0,0,0.15);
}

.producto-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 10px;
}

.producto-header h3 {
  margin: 0;
  color: #2c3e50;
  flex: 1;
}

.precio {
  background-color: #42b883;
  color: white;
  padding: 5px 10px;
  border-radius: 20px;
  font-weight: bold;
  font-size: 1.1rem;
  margin-left: 10px;
}

.descripcion {
  color: #666;
  margin: 10px 0;
  line-height: 1.5;
}

.producto-details {
  margin-top: 15px;
  padding-top: 15px;
  border-top: 1px solid #eee;
}

.detail {
  margin: 5px 0;
  font-size: 0.9rem;
  color: #777;
}

.detail strong {
  color: #555;
  margin-right: 5px;
}

.loading, .error {
  text-align: center;
  padding: 40px;
  font-size: 1.1rem;
}

.error {
  color: #e74c3c;
  background-color: #ffebee;
  border-radius: 5px;
}
</style>