<template>
  <div class="home-view">
    <main class="main-content">
      
      <section class="section">
        <CategoriasList />
      </section>
      
      <section class="section">
        <ProductosList />
      </section>
      
    </main>
  </div>
</template>

<script setup>
import CategoriasList from '@/components/CategoriasList.vue'
import ProductosList from '@/components/ProductosList.vue'
</script>

<style scoped>
.home-view {
  /* Usamos 'home-view' para ser más específicos que el div principal en App.vue */
  min-height: 100vh;
  /* El color de fondo se define a nivel de la app o en el main-content para consistencia */
  background-color: #f5f7fa; 
}

.main-content {
  /* Mantén el padding para dar espacio a los lados */
  padding: 20px;
  /* Si ajustaste el max-width en main.css o App.vue, 
     el centrado se maneja a ese nivel. Aquí quitamos el max-width explícito
     para que use el ancho del contenedor padre. */
  /* max-width: 1400px; */ 
  margin: 0 auto; 
}

.section {
  margin-bottom: 40px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  overflow: hidden;
}
</style>