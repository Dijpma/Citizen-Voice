<template>
    <NuxtLayout name="default">
          <survey-design-select-survey @edit_survey="(survey) => go_edit_survey(survey)" v-if="is_survey_select" :surveys="surveys"></survey-design-select-survey>
          <survey-design-edit-survey @return_page="() => go_select_survey()" v-else :survey="current_survey_to_edit"></survey-design-edit-survey>
<!--          <survey-design-edit-survey @return_page="() => go_select_survey()" :survey="current_survey_to_edit"></survey-design-edit-survey>-->


<!--      <q-page>-->
<!--            <div class="padding-16">-->
<!--                <h2>My Surveys</h2>-->
<!--                <div class="custom-sub-container">-->
<!--                    <q-list bordered class="rounded-borders custom-width-60-pc" style="max-width: 800px">-->
<!--                        <list-item-survey-design v-for="survey in surveys" :survey_object="survey" :refresh="refresh">-->
<!--                        </list-item-survey-design>-->
<!--                    </q-list>-->
<!--                    <q-input v-model="textName" label="Name" />-->
<!--                    <q-input v-model="textDescription" label="Description" />-->
<!--                    <q-btn color="white" text-color="black" label="Add survey" @click="addNewSurvey" />-->
<!--                </div>-->
<!--            </div>-->
<!--        </q-page>-->
    </NuxtLayout>
<!--=======-->
<!--  <NuxtLayout name="default">-->
<!--&lt;!&ndash;    <breadcrums></breadcrums>&ndash;&gt;-->
<!--    <survey-design-select-survey @edit_survey="(survey) => go_edit_survey(survey)" v-if="is_survey_select" :surveys="surveys_list"></survey-design-select-survey>-->
<!--    <survey-design-edit-survey @return_page="() => go_select_survey()" v-else :survey="current_survey_to_edit"></survey-design-edit-survey>-->
<!--  </NuxtLayout>-->
<!--&gt;>>>>>> origin/sd-edit-survey-->
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from "../components/BaseButton";
import ListItemSurveyDesign from "../components/ListItemSurveyDesign";
import { formatDate } from "~/utils/formatData"
import { useSurveyStore } from "~/stores/survey"
import SurveyDesignSelectSurvey from "../layouts/surveyDesignSelectSurvey";
import SurveyDesignEditSurvey from "../layouts/surveyDesignEditSurvey";

// Make sure the user is authenticated or trigger the reroute to login
definePageMeta({ middleware: 'authorization' })


/**
 * All `/api/**` are proxies pointing to the local or production server of the backend.
 */
const url = "/api/surveys/"
const surveyStore = useSurveyStore()
const { data: surveys, refresh } = await useAsyncData(() => $cmsApi(url));
var expire_date = new Date();
var current_date = new Date();
const textName = ref(null)
const textDescription = ref(null)

// set default expire date 100 days after current day
expire_date.setDate(expire_date.getDate() + 100);
current_date.setDate(current_date.getDate());

// Add a new survey using the surveyStore, based on what is entered in the field.
const addNewSurvey = async () => {
  await surveyStore.createSurvey(textName.value, textDescription.value, current_date, expire_date)
  refresh()
}
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
    background: transparent;
    /* make scrollbar transparent */
}

.custom-scroll {
    position: relative;
    max-height: 100%;
    overflow-y: scroll;
}

::-webkit-scrollbar {
    width: 0;
    background: transparent;
    /* make scrollbar transparent */
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

.padding-16 {
    padding: 16px;
}
</style>
