<template>
  <h2>Question {{question_index + 1}}</h2>
  <h2>{{question.text}}</h2>
  <v-container fluid>
<!--    <p>{{ selected }}</p>-->
    <v-checkbox
      v-model="selected"
      label="Option 1"
      value="Option 1"
    ></v-checkbox>
    <v-checkbox
      v-model="selected"
      label="Option 2"
      value="Option 2"
    ></v-checkbox>
  </v-container>
</template>

<script>
export default {
  name: "qt_select_multiple",
  props: {
    question_index: Number,
    question: Object,
  },
  data () {
    return {
      selected: [],
    }
  },
}
</script>

<style scoped>

</style>
