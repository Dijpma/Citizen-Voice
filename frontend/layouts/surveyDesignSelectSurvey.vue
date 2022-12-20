<template>
  <q-page>
    <div class="padding-16">
      <h5>Surveys</h5>
      <div class="custom-sub-container">
        <q-list bordered class="rounded-borders custom-width-60-pc" style="max-width: 800px">
          <list-item-survey-design @edit_survey="(survey_var) => $emit('edit_survey', survey_var)" v-for="survey in surveys" :survey_object="survey"> </list-item-survey-design>
        </q-list>

        <q-btn color="white" text-color="black" label="Add survey" />
      </div>
  </div>
  </q-page>
</template>

<script>
export default {
  name: "surveyDesignSelectSurvey",
  props: {
    surveys: Object
  },
  methods: {
  }
}
</script>

<style lang="scss" scoped>
.custom-bg-white {
  background-color: #fff;
}
.custom-list-item {
  //min-height: 50vh;
  height: calc(100vh/3);
  background: #fff;
  overflow: hidden;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent; /* make scrollbar transparent */
}
.custom-scroll {
  position: relative;
  max-height: 100%;
  overflow-y: scroll;
}
::-webkit-scrollbar {
  width: 0;
  background: transparent; /* make scrollbar transparent */
}
.custom-bg-red {
  min-width: 100%;
  min-height: 100%;
  background: #b02a37;
}
.custom-sub-container {
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: flex-start;
}
.custom-width-60-pc {
  width: 60%;
}
.padding-16{
  padding: 16px;
}
</style>

