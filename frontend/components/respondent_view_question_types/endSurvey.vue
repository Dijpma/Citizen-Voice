<template>
  <v-btn color="primary" @click="event => finishSurvey(event)">
    <i class="fa-solid fa-arrow-right"></i>
    <span class="q-pa-sm">End Survey</span>
  </v-btn>
  <v-btn color="primary" @click="event =>returnToSurvey(event)">
    <i class="fa-solid fa-arrow-right"></i>
    <span class="q-pa-sm">Return to Survey</span>
  </v-btn>
</template>

<script>
export default {
  name: "endSurvey"
}
</script>

<script setup>
const emit = defineEmits(['returnToSurvey', 'finishSurvey'])
const props = defineProps({

})
function returnToSurvey(event) {
  console.log("endSurvey returnToSurvey")
  emit('returnToSurvey', props)
}

function finishSurvey(event) {
  console.log(" endSurvey end survey")
  emit('finishSurvey', props)
}
</script>

<style scoped>

</style>
