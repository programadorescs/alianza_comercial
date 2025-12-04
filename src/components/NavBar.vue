<template>
  <header class="navbar">
    <div class="header-content">
      <RouterLink to="/" class="brand-title">
        <h1>📦 Alianza Comercial - Supabase + Vue</h1>
      </RouterLink>
      
      <p class="subtitle">Datos obtenidos desde Supabase (lectura pública)</p>
    </div>

    <nav class="nav-links">
      <RouterLink to="/" class="nav-item">Inicio</RouterLink>
      <RouterLink to="/categorias" class="nav-item">Categorías</RouterLink> 
      <RouterLink to="/nosotros" class="nav-item">Nosotros</RouterLink>
      <RouterLink to="/contacto" class="nav-item">Contáctanos</RouterLink>
      </nav>
  </header>
</template>

<script setup>
// No necesita lógica de JavaScript por ahora, solo la estructura.
// Vue Router ya está disponible globalmente.
</script>

<style scoped>
.navbar {
  /* Usamos Flexbox para organizar el título/subtítulo y los enlaces */
  display: flex;
  flex-direction: column; /* Apila elementos en móvil */
  align-items: center;
  text-align: center;
  padding: 20px 20px 10px; /* Reducimos el padding vertical */
  background: linear-gradient(135deg, #42b883 0%, #347474 100%);
  color: white;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
}

.brand-title {
  color: white; /* Asegura que el color del enlace sea blanco */
  text-decoration: none; /* Quita la línea de subrayado del enlace */
}

.navbar h1 {
  margin: 0;
  font-size: 2rem;
}

.subtitle {
  margin-top: 5px;
  opacity: 0.9;
  font-size: 1rem;
}

.nav-links {
  margin-top: 15px;
  display: flex;
  gap: 20px; /* Espacio entre los elementos del menú */
  flex-wrap: wrap;
  justify-content: center;
}

.nav-item {
  color: white;
  text-decoration: none;
  font-weight: bold;
  padding: 5px 10px;
  border-radius: 4px;
  transition: background-color 0.3s;
}

.nav-item:hover,
.nav-item.router-link-active {
  /* Destaca el enlace activo o al pasar el ratón */
  background-color: rgba(255, 255, 255, 0.2); 
}

/* Diseño para escritorio */
@media (min-width: 768px) {
  .navbar {
    flex-direction: row; /* En pantallas grandes, alinea horizontalmente */
    justify-content: space-between; /* Separa el título del menú */
    padding: 20px 40px;
  }
  
  .header-content {
      text-align: left;
  }

  .nav-links {
    margin-top: 0;
  }
}
</style>