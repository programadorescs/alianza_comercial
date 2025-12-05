<template>
  <div class="contacto-view">
    <div class="contacto-container">
      <h2>Contáctanos</h2>
      <p>¡Estamos aquí para ayudarte! Completa el siguiente formulario o envíanos un correo a **info@mitienda.com**.</p>
      
      <ContactoForm /> 
      
    </div>
  </div>
</template>

<script setup>
// Importamos el formulario
import ContactoForm from '@/components/ContactoForm.vue' 
</script>

<style scoped>
.contacto-view {
  padding: 40px 20px;
  background-color: #f5f7fa;
  min-height: 80vh; /* Para que ocupe espacio vertical */
}

.contacto-container {
  max-width: 600px;
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
}
</style>