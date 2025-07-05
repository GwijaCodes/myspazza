import { reactive, readonly } from 'vue'

const state = reactive({
  days: [
    { name: 'Lunedì', trashTypes: ['Organico'] },
    { name: 'Martedì', trashTypes: ['Plastica', 'Vetro'] },
    { name: 'Mercoledì', trashTypes: ['Carta'] },
    { name: 'Giovedì', trashTypes: ['Indifferenziato'] },
    { name: 'Venerdì', trashTypes: [] },
    { name: 'Sabato', trashTypes: [] },
    { name: 'Domenica', trashTypes: [] }
  ]
})

function addTrashType(dayIndex, newType) {
  const types = state.days[dayIndex].trashTypes
  if (!types.includes(newType)) {
    types.push(newType)
  }
}

function removeTrashType(dayIndex, typeToRemove) {
  const types = state.days[dayIndex].trashTypes
  const idx = types.indexOf(typeToRemove)
  if (idx !== -1) {
    types.splice(idx, 1)
  }
}

function updateTrashTypes(dayIndex, newTypes) {
  state.days[dayIndex].trashTypes = [...newTypes]
}

export default {
  state: readonly(state),
  addTrashType,
  removeTrashType,
  updateTrashTypes
}
