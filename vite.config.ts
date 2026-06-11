import { defineConfig } from 'vite';

export default defineConfig({
  // Mantenemos tu ruta base para GitHub Pages
  base: '/Sabores_de_Nuestra_Tierra/',
  
  // Le indicamos a Vite que construya las múltiples páginas
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        integrantes: 'integrantes.html',
        receta: 'receta.html'
      }
    }
  }
});