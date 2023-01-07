<template>
  <div class="q-pa-md">
    <q-markup-table class="bg-indigo-1">
      <thead>
      <tr>
        <th class="text-left">Question</th>
        <th class="text-right">Type</th>
        <th class="text-right">Is Required</th>
        <th class="text-right">Carbs (g)</th>
        <th class="text-right">Protein (g)</th>
        <th class="text-right">Sodium (mg)</th>
      </tr>
      </thead>
      <tbody>
      <tr onclick="alert('Hello')" v-for="question in questions_prop">
        <td class="text-left">{{question.text}}</td>
        <td class="text-right">159</td>
        <td class="text-right">
          <q-checkbox v-bind="question.required"/>
        </td>
        <td class="text-right">24</td>
        <td class="text-right">4</td>
        <td class="text-right">87</td>
      </tr>
      </tbody>
    </q-markup-table>
  </div>
</template>
<script>
export default {
  name: "questionTable",
  props: {
    questions_prop: Object
  },
  methods: {
  }
}
</script>

<style scoped>

</style>
