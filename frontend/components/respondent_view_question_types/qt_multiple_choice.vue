<template>
  <h2>Question {{question_index + 1}}</h2>
  <h2>{{question.text}}</h2>
  <v-radio-group>
    <v-radio label="Option 1" value="1"></v-radio>
    <v-radio label="Option 2" value="2"></v-radio>
    <v-radio label="Option 3" value="3"></v-radio>
  </v-radio-group>
</template>

<script>
export default {
  name: "qt_multiple_choice",
  props: {
    question_index: Number,
    question: Object,
  }
}
</script>

<style scoped>

</style>
