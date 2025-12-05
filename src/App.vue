<template>
  <NavBar /> 
  
  <main>
    <router-view />
  </main>

  <AppFooter />
</template>

<script setup>
// Importa el nuevo componente
import NavBar from '@/components/NavBar.vue' 
import AppFooter from '@/components/AppFooter.vue'
</script>

<style>
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

body {
  font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, 
               Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif;
  line-height: 1.6;
  color: #333;
}
</style>