<template>
  <NuxtLayout name="default">
<!--    <breadcrums></breadcrums>-->
    <survey-design-select-survey @edit_survey="(survey) => go_edit_survey(survey)" v-if="is_survey_select" :surveys="surveys_list"></survey-design-select-survey>
    <survey-design-edit-survey @return_page="() => go_select_survey()" v-else :survey="current_survey_to_edit"></survey-design-edit-survey>
  </NuxtLayout>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from "../components/BaseButton";
import ListItemSurveyDesign from "../components/ListItemSurveyDesign";
import { formatDate } from "~/utils/formatData"
import SurveyDesignSelectSurvey from "../layouts/surveyDesignSelectSurvey";
import SurveyDesignEditSurvey from "../layouts/surveyDesignEditSurvey";
/**
 * All `/api/**` are proxies pointing to the local or production server of the backend.
 */
const url = "/api/surveys/"
const { data: surveys_list } = await useAsyncData(() => $fetch(url));
</script>

<script>
export default {
  data() {
    return {
      is_survey_select: true,
      current_survey_to_edit: null
    }
  },
  methods: {
    go_edit_survey: function (survey) {
      this.current_survey_to_edit = survey;
      console.log(this.current_survey_to_edit)
      this.is_survey_select=false;
    },
    go_select_survey: function () {
      this.is_survey_select = true;
    }
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
