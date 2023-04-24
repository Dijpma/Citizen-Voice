<template>
  <h2>Question {{question_index + 1}}</h2>
  <h2>{{question.text}}</h2>
  <v-textarea label="Your answer" variant="outlined"></v-textarea>
</template>

<script setup>
// let question_index = ref(0)
// let question = ref({})
// export default {
//   name: "qt_text",
// }
const props = defineProps({
  question_index: Number,
  question: Object,
})
</script>

<style scoped>

</style>
