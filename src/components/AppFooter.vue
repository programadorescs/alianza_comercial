<template>
  <footer class="app-footer">
    <div class="footer-content">
      
      <div class="footer-column contact-info">
        <h3>Nuestra Ubicación</h3>
        <div class="info-item">
          <span class="icon">📍</span>
          <p>Calle 16 #87, Col. Juárez Pantitlán, C.P. 57460, Nezahualcóyotl, Edo. de México</p>
        </div>
        <div class="info-item">
          <span class="icon">📞</span>
          <a href="tel:+515565077614">5565077614 / 5592023405</a>
        </div>
        <div class="info-item">
          <span class="icon">✉️</span>
          <a href="mailto:contacto@alianzacomercial.com.mx">contacto@alianzacomercial.com.mx</a>
        </div>
      </div>

      <div class="footer-column social-media">
        <h3>Nuestras Redes Sociales</h3>
        <div class="social-icons">
          
          <a href="https://www.facebook.com/tupagina" target="_blank" aria-label="Facebook">
            <span class="social-icon">📘</span>
          </a>
          
          <a href="https://www.instagram.com/tuperfil" target="_blank" aria-label="Instagram">
            <span class="social-icon">📸</span>
          </a>
          
          <a href="https://wa.me/51987654321" target="_blank" aria-label="WhatsApp">
            <span class="social-icon">🟢</span>
          </a>
          
          <a href="https://www.tiktok.com/@tuperfil" target="_blank" aria-label="TikTok">
            <span class="social-icon">🎶</span>
          </a>
          
        </div>
      </div>
    </div>
    
    <div class="footer-bottom">
      <p>&copy; {{ new Date().getFullYear() }} Mi Tienda. Todos los derechos reservados.</p>
    </div>
  </footer>
</template>

<script setup>
// No necesita lógica en JavaScript.
</script>

<style scoped>
.app-footer {
  background-color: #2c3e50; /* Color oscuro para el pie de página */
  color: #ecf0f1;
  padding: 40px 20px 20px;
  margin-top: 0px; /* Separación del contenido principal */
}

.footer-content {
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  flex-wrap: wrap; /* Permite que las columnas se apilen en móvil */
  justify-content: space-between;
  gap: 30px; /* Espacio entre columnas */
  padding-bottom: 20px;
  border-bottom: 1px solid #4a637a;
}

.footer-column {
  flex: 1; /* Ocupa el espacio disponible */
  min-width: 250px; /* Mínimo para evitar que se pongan demasiado estrechas */
}

.footer-column h3 {
  color: #42b883; /* Color de acento de Vue */
  border-bottom: 2px solid #42b883;
  padding-bottom: 5px;
  margin-bottom: 15px;
  font-size: 1.2rem;
}

/* --- Estilos de Información de Contacto --- */
.info-item {
  display: flex;
  align-items: center;
  margin-bottom: 10px;
}

.info-item .icon {
  font-size: 1.2rem;
  margin-right: 10px;
  width: 20px; /* Asegura alineación */
  text-align: center;
}

.info-item a, .info-item p {
  color: #ecf0f1;
  text-decoration: none;
  transition: color 0.3s;
}

.info-item a:hover {
  color: #42b883;
}

/* --- Estilos de Redes Sociales --- */
.social-icons {
  display: flex;
  gap: 15px;
  margin-top: 10px;
}

.social-icon {
  font-size: 2rem; /* Haz los íconos grandes y visibles */
  transition: transform 0.2s;
  cursor: pointer;
}

.social-icon:hover {
  transform: scale(1.1); /* Efecto de zoom al pasar el ratón */
}

/* --- Estilos de Pie de Página Inferior --- */
.footer-bottom {
  text-align: center;
  padding-top: 20px;
  font-size: 0.9rem;
  opacity: 0.8;
}
</style>