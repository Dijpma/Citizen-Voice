<template>
  <q-page>
    <div class="padding-16">
      <h2>Survey: {{survey.name}}</h2>
      <div class="custom-sub-container">
        <q-list bordered class="rounded-borders custom-width-60-pc" style="max-width: 800px">
          <list-item-question @edit_survey="(survey_var) => $emit('edit_survey', survey_var)" v-for="question in this.questions" :question_object="this.questions"> </list-item-question>
        </q-list>
        <q-input v-model="textName" label="Name" />
        <q-input v-model="textDescription" label="Description" />
        <q-btn @click="addNewQuestion" color="white" text-color="black" label="Add question" />

        <!--        <q-btn color="white" text-color="black" label="Add survey" />-->
      </div>
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import BaseButton from "../components/BaseButton";
import Breadcrums from "../components/breadcrums";
import QuestionTable from "../components/questionTable";


export default {
  name: "surveyDesignEditSurvey",
  components: {QuestionTable, Breadcrums, BaseButton},
  props: {
    survey: Object
  },
  data() {
    return {
      questions: null,
      check1: ref(true),
    }
  },
  async created() {
    // props are exposed on `this`
    // const url = "/api/questions"
    const url = "/api/questions/"

    // const { data: questions, refresh } = await useAsyncData(() => $cmsApi(url));
    const { data: question_list, refresh } = await useAsyncData(() => $cmsApi(url));
    this.questions = question_list;
  },
  methods: {
    ref_wrap: function (bool) {
      return ref(bool)
    },
    back_to_page: function () {
      this.$emit('return_page')
    }
  }
}
</script>

<style lang="scss" scoped>
.custom-list-container {
  max-width: 50%;
}
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
  flex-direction: row;
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
