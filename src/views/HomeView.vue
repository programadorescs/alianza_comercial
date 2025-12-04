<template>
  <div class="home">
    <header class="header">
      <h1>📦 Mi Tienda - Supabase + Vue</h1>
      <p class="subtitle">Datos obtenidos desde Supabase (lectura pública)</p>
    </header>
    
    <main class="main-content">
      <!-- Categorías -->
      <section class="section">
        <CategoriasList />
      </section>
      
      <!-- Productos -->
      <section class="section">
        <ProductosList />
      </section>
    </main>
    
    <footer class="footer">
      <p>Desarrollado con Vue 3 y Supabase</p>
      <p class="info">
        <strong>Nota:</strong> Las tablas tienen permisos de lectura pública
      </p>
    </footer>
  </div>
</template>

<script setup>
import CategoriasList from '@/components/CategoriasList.vue'
import ProductosList from '@/components/ProductosList.vue'
</script>

<style scoped>
.home {
  min-height: 100vh;
  background-color: #f5f7fa;
}

.header {
  text-align: center;
  padding: 40px 20px;
  background: linear-gradient(135deg, #42b883 0%, #347474 100%);
  color: white;
}

.header h1 {
  margin: 0;
  font-size: 2.5rem;
}

.subtitle {
  margin-top: 10px;
  opacity: 0.9;
  font-size: 1.1rem;
}

.main-content {
  padding: 20px;
  max-width: 1400px;
  margin: 0 auto;
}

.section {
  margin-bottom: 40px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}

.footer {
  text-align: center;
  padding: 20px;
  background-color: #2c3e50;
  color: white;
  margin-top: 40px;
}

.info {
  font-size: 0.9rem;
  opacity: 0.8;
  margin-top: 10px;
}
</style>