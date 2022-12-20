<template>
  <q-item clickable @click.native="emit_survey_edit()">
    <q-item-section avatar top>
      <q-icon name="description" color="black" size="30px" />
    </q-item-section>

    <q-item-section top class="col-2 gt-sm">
      <q-item-label class="q-mt-sm">{{survey_object.name}}</q-item-label>
    </q-item-section>

    <q-item-section top>
    </q-item-section>

    <q-item-section top side>
      <div class="text-grey-8 q-gutter-xs">
        <q-btn class="gt-xs" size="12px" flat dense round icon="done" />
        <q-btn size="12px" flat dense round icon="more_vert" />
        <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />
      </div>
    </q-item-section>
  </q-item>
</template>

<script>
import { matAllInbox } from '@quasar/extras/material-icons'
export default {
  name: "ListItemSurveyDesign",
  props: {
    survey_object: Object
  },
  methods: {
    emit_survey_edit: function(){
      this.$emit('edit_survey', this.survey_object)
    }
  }
}
</script>

<style scoped>
</style>
