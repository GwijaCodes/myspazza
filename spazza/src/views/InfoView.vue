<script setup>
import { ref, computed } from 'vue'
import { trashData } from '../data/trashData.js'

const selectedBin = ref(null)
const searchTerm = ref('')

// Filtra gli items in base alla ricerca
const filteredItems = computed(() => {
    if (!selectedBin.value) return []
    if (!searchTerm.value) return selectedBin.value.items
    return selectedBin.value.items.filter(item =>
        item.toLowerCase().includes(searchTerm.value.toLowerCase())
    )
})

function selectBin(bin) {
    selectedBin.value = bin
    searchTerm.value = ''
}
</script>

<template>
    <div class="info-view">
        <h1>Tipi di Bidoni</h1>
        <div class="bins-list" style="display: flex; gap: 1rem;">
            <button v-for="bin in trashData" :key="bin.binType" @click="selectBin(bin)"
                :class="{ selected: selectedBin && selectedBin.binType === bin.binType }"
                style="padding: 0.5rem 1rem; cursor: pointer;">
                {{ bin.binType }}
            </button>
        </div>

        <div v-if="selectedBin" style="margin-top: 1rem;">
            <h2>{{ selectedBin.binType }}</h2>
            <p>{{ selectedBin.description }}</p>
            <input v-model="searchTerm" placeholder="Cerca un rifiuto..."
                style="margin: 0.5rem 0; padding: 0.3rem; width: 100%;" />
            <ul>
                <li v-for="item in filteredItems" :key="item">{{ item }}</li>
                <li v-if="filteredItems.length === 0">Nessun rifiuto trovato.</li>
            </ul>
        </div>
    </div>
</template>

<style scoped>
.selected {
    background-color: #3b82f6;
    color: white;
    border-radius: 4px;
}
</style>
