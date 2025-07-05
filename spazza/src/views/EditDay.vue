<script setup>
import { ref } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import calendarStore from '../stores/calendarStore'

const route = useRoute()
const router = useRouter()
const dayId = Number(route.params.dayId)
const day = calendarStore.state.days[dayId]

// Stato locale per editing
const newTrashType = ref('')
const editedTypes = ref([...day.trashTypes])

function addType() {
    if (newTrashType.value && !editedTypes.value.includes(newTrashType.value)) {
        editedTypes.value.push(newTrashType.value)
        newTrashType.value = ''
    }
}

function removeType(type) {
    editedTypes.value = editedTypes.value.filter(t => t !== type)
}

function saveEdit() {
    calendarStore.updateTrashTypes(dayId, editedTypes.value)
    router.push({ name: 'CalendarView' }) // Torna alla lista
}

function cancelEdit() {
    router.back()
}
</script>

<template>
    <h1>Modifica {{ day.name }}</h1>

    <p>Tipi attuali:</p>
    <ul>
        <li v-for="type in editedTypes" :key="type">
            {{ type }}
            <button @click="removeType(type)">Rimuovi</button>
        </li>
    </ul>

    <input v-model="newTrashType" placeholder="Nuovo tipo di spazzatura" />
    <button @click="addType">Aggiungi</button>

    <hr>

    <button @click="cancelEdit">Annulla</button>
    <button @click="saveEdit">Salva</button>
</template>
