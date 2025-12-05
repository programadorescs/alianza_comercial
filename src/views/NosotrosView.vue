<template>
  <div class="nosotros-view">
    <div class="nosotros-container">
      <h2>Nuestra Historia</h2>
      
      <p>
        Mi Tienda - Supabase + Vue nació de la pasión por ofrecer productos de alta calidad
        con la transparencia y eficiencia que solo la tecnología moderna puede proporcionar.
        Utilizamos **Supabase** como nuestro potente backend para gestionar la base de datos de 
        productos y la autenticación, garantizando velocidad y seguridad.
      </p>
      
      <p>
        Nuestro equipo está compuesto por desarrolladores entusiastas y expertos en el sector de 
        la venta minorista, dedicados a hacer que tu experiencia de compra sea lo más fluida posible.
      </p>
      
      <h3>Nuestra Misión</h3>
      <p>
        Ser la plataforma líder en comercio electrónico, conectando a los mejores proveedores 
        con nuestros clientes a través de una interfaz rápida, segura y fácil de usar, 
        construida con **Vue 3**.
      </p>

      <img src="/src/assets/trabajando_noche.jpg" alt="Equipo de desarrolladores" class="team-image">
      
    </div>
  </div>
</template>

<script setup>
// No necesita lógica de JavaScript por ahora.
</script>

<style scoped>
.nosotros-view {
  padding: 40px 20px;
  background-color: #f5f7fa;
  min-height: 80vh;
}

.nosotros-container {
  max-width: 800px;
  margin: 0 auto;
  padding: 30px;
  background: white;
  border-radius: 10px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.1);
}

h2 {
  color: #347474;
  border-bottom: 2px solid #42b883;
  padding-bottom: 10px;
  margin-bottom: 20px;
  text-align: center;
}

h3 {
  color: #42b883;
  margin-top: 30px;
  margin-bottom: 15px;
}

p {
  line-height: 1.8;
  margin-bottom: 15px;
  color: #555;
}

.team-image {
    width: 100%;
    max-width: 400px; 
    height: auto;
    display: block;
    margin: 30px auto 0;
    border-radius: 8px;
    box-shadow: 0 2px 4px rgba(0,0,0,0.1);
}
</style>