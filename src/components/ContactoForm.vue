<template>
  <form @submit.prevent="enviarFormulario" class="contact-form">
    
    <div class="form-group">
      <label for="nombre">Nombre:</label>
      <input type="text" id="nombre" v-model="form.nombre" required />
    </div>
    
    <div class="form-group">
      <label for="email">Email:</label>
      <input type="email" id="email" v-model="form.email" required />
    </div>
    
    <div class="form-group">
      <label for="mensaje">Mensaje:</label>
      <textarea id="mensaje" v-model="form.mensaje" rows="5" required></textarea>
    </div>
    
    <button type="submit" :disabled="isSubmitting">
      {{ isSubmitting ? 'Enviando...' : 'Enviar Mensaje' }}
    </button>
    
    <p v-if="successMessage" class="success">{{ successMessage }}</p>
    <p v-if="errorMessage" class="error-message">Error: {{ errorMessage }}</p>
  </form>
</template>

<script setup>
import { reactive, ref } from 'vue'
// NOTA: Para enviar datos REALMENTE, necesitarías una función en el backend (Supabase Edge Function o RLS en tu tabla)
// Por simplicidad, solo haremos una simulación aquí.

const form = reactive({
  nombre: '',
  email: '',
  mensaje: ''
})

const isSubmitting = ref(false)
const successMessage = ref('')
const errorMessage = ref('')

const enviarFormulario = async () => {
  // 1. Validaciones básicas
  if (!form.nombre || !form.email || !form.mensaje) {
    errorMessage.value = 'Por favor, completa todos los campos.'
    return
  }
  
  isSubmitting.value = true
  errorMessage.value = ''
  successMessage.value = ''

  try {
    // 2. SIMULACIÓN DE ENVÍO a Supabase
    console.log('Datos a enviar:', form)
    
    // Aquí iría tu lógica de Supabase, por ejemplo:
    /* const { error } = await supabase.from('contacto_mensajes').insert(form)
    if (error) throw error
    */

    // Simular tiempo de respuesta del servidor
    await new Promise(resolve => setTimeout(resolve, 1500)) 
    
    successMessage.value = '¡Mensaje enviado con éxito! Te responderemos pronto.'
    // Limpiar el formulario
    form.nombre = ''
    form.email = ''
    form.mensaje = ''
    
  } catch (error) {
    errorMessage.value = `Hubo un error al enviar el mensaje: ${error.message || 'Inténtalo de nuevo.'}`
  } finally {
    isSubmitting.value = false
  }
}
</script>

<style scoped>
.form-group {
  margin-bottom: 15px;
}

label {
  display: block;
  margin-bottom: 5px;
  font-weight: bold;
  color: #333;
}

input[type="text"],
input[type="email"],
textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ccc;
  border-radius: 4px;
  box-sizing: border-box; /* Asegura que padding no aumente el ancho */
  font-size: 1rem;
}

textarea {
  resize: vertical;
}

button {
  background-color: #42b883;
  color: white;
  padding: 10px 15px;
  border: none;
  border-radius: 4px;
  cursor: pointer;
  font-size: 1rem;
  transition: background-color 0.3s;
}

button:hover:not(:disabled) {
  background-color: #347474;
}

button:disabled {
  background-color: #a5a5a5;
  cursor: not-allowed;
}

.success {
    color: #42b883;
    margin-top: 10px;
    font-weight: bold;
}

.error-message {
    color: #c62828;
    margin-top: 10px;
}
</style>