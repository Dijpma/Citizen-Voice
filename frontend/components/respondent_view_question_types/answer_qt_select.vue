<template>
  <v-container style="padding: 16px">
    <v-radio-group @input="event => updateAnswer(event)">
      <v-radio label="Option 1" value="1"></v-radio>
      <v-radio label="Option 2" value="2"></v-radio>
      <v-radio label="Option 3" value="3"></v-radio>
    </v-radio-group>
  </v-container>
</template>

<script>
export default {
  name: "answer_qt_select",
}
</script>

<script setup>
const emit = defineEmits(['updateAnswer'])

const props = defineProps({
  question_index: Number,
    question: Object,
    answer: Object,
})

function updateAnswer(event) {
  console.log("updating answer")
  props.answer.text = event.target.value
  emit('updateAnswer', props.answer, question_index)
}
</script>

<style scoped>

</style>
