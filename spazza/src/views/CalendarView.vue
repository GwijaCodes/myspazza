<script setup>
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import calendarStore from '../stores/calendarStore'

const router = useRouter()
const days = computed(() => calendarStore.state.days)

function editDay(index) {
    router.push({ name: 'EditDay', params: { dayId: index } })
}
</script>

<template>
    <ul>
        <li v-for="(day, i) in days" :key="i">
            {{ day.name }} - Tipi di spazzatura: {{ day.trashTypes.join(', ') || 'Nessuno' }}
            <button @click="editDay(i)">Modifica</button>
        </li>
    </ul>
</template>
