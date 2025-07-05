<template>
  <div id="app" :class="{ dark: isDarkMode }">
    <header>
      <nav>
        <button @click="toggleDarkMode">
          {{ isDarkMode ? '☀️' : '🌙' }}
        </button>
        <router-link to="/info">Info Raccolta</router-link>
      </nav>
    </header>

    <main>
      <router-view />
    </main>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'

const isDarkMode = ref(false)

onMounted(() => {
  const saved = localStorage.getItem('isDarkMode')
  if (saved) isDarkMode.value = JSON.parse(saved)
})

function toggleDarkMode() {
  isDarkMode.value = !isDarkMode.value
  localStorage.setItem('isDarkMode', JSON.stringify(isDarkMode.value))
}
</script>

<style scoped>
nav {
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
}

nav a {
  text-decoration: none;
  color: inherit;
}

.dark {
  background: #222;
  color: #eee;
}

main {
  padding: 2rem;
}
</style>
