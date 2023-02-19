<style scoped>

</style>

<template>
  <q-item clickable @click.native="emit_question_edit()">
    <q-item-section avatar top>
      <q-icon name="description" color="black" size="30px" />
    </q-item-section>

    <q-item-section top class="col-2">
      <q-item-label class="q-mt-sm">{{ props.question_object}}</q-item-label>
      <q-item-label>Some question item</q-item-label>
    </q-item-section>

    <q-item-section top>
    </q-item-section>

    <q-item-section top side>
      <div class="text-grey-8 q-gutter-xs">
        <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
        <q-btn size="12px" flat dense round icon="more_vert" />
        <q-btn class="gt-xs" size="12px" flat dense round icon="delete" @click="deleteHandler" />
      </div>
    </q-item-section>
  </q-item>
</template>

<script setup>
import { matAllInbox } from '@quasar/extras/material-icons'
import { useSurveyStore } from "~/stores/survey"

const props = defineProps({
  question_object: Object,
  refresh: Function
})

const surveyStore = useSurveyStore()

const deleteHandler = async () => {
  // DELETE request using the surveyStore with error handling
  // const survey_object = props.survey_object;
  // await surveyStore.deleteSurvey(survey_object.id)
  // props.refresh()
}

</script>
<script>
export default {
  name: "ListItemQuestion",
  props: {
    question_object: Object
  },
  methods: {
    emit_question_edit: function () {
      alert("Edit question")
      // this.$emit('edit_survey', this.survey_object)
    }
  }
}
</script>
<style scoped>

</style>
