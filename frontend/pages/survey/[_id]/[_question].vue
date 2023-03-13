<template>
    <NuxtLayout name="default">
        <div class="">
            <!-- Question card: number & text -->
            <v-card class="my-card">
                <div class="text-h2 q-mt-sm q-mb-xs">Question {{ (current_question_index + 1) }}</div>
                <div v-if="questions.length > 0" class="text-h5 q-mt-sm q-mb-xs">{{questions[current_question_index].text}}</div>
                <div v-if="questions.length > 0" class="text-h5 q-mt-sm q-mb-xs">{{questions}}</div>
                <div v-else><p>This survey does not have any questions</p></div>
            </v-card>
        </div>

        <div class="">
            <!-- Map card
          real v-if statement = (question.map_view != null || question.is_geospatial)-->
<!--          TODO: fix issue with is_geospatial-->
<!--            <v-card v-if="questions[current_question_index].is_geospatial" style="min-width: 300px;" class="my-card col">-->
<!--                <div class="text-h5 q-mt-sm q-mb-xs">Map here</div>-->
<!--                <div id="map"></div>-->
<!--            </v-card>-->
        </div>


        <!-- Navigation -->
        <div class="q-pa-md row">
            <v-btn @click="prevQuestion" color="primary">
                <i class="fa-solid fa-arrow-left"></i>
                 <span class="q-pa-sm">Previous Question</span>
            </v-btn>
            <v-btn @click="nextQuestion" color="primary">
                <i class="fa-solid fa-arrow-right"></i>
                 <span class="q-pa-sm">Next Question</span>
            </v-btn>
        </div>

    </NuxtLayout>
</template>


<script setup>
import { ref } from "vue"
import { navigateTo } from "nuxt/app";
import {useSurveyStore} from "~/stores/survey.js";

/**
 * All `/api/**` are proxies pointing to the local or production server of the backend.
 */
const survey_url = "/api/surveys/"
const question_url = "/api/questions/"
const data = ref([])
const route = useRoute()
const survey_store = useSurveyStore()

// const { data: surveys } = await surveyStore.getSurveysOfCurrentUser()

const { data : questions } = await survey_store.getQuestionsOfSurvey(route.params._id)
let current_question_index = 0
// const { data: survey } = await useAsyncData(() => $cmsApi(survey_url + route.params._id));

// TODO: use an API to get n'th question of the selected survey
// for demo only, I will use (5 + question id).
// let demo_question = parseInt(route.params._question, 10) + 5
// let { data: question } = await useAsyncData(() => $cmsApi(question_url + demo_question));

const prevQuestion = () => {
    if(current_question_index > 0) {
      current_question_index -= 1
    }
    // if this is not the first question:
    // let question_to_navigate = (parseInt(route.params._question, 10) - 1)
    // if (question_to_navigate != 0) {
    //     return navigateTo('/survey/' + route.params._id + '/' + question_to_navigate)
    // } else {
    //     return navigateTo('/survey/' + route.params._id)
    // }
}

const nextQuestion = () => {
    // if this is not the last question:
    // return navigateTo('/survey/' + route.params._id + '/' + (parseInt(route.params._question, 10) + 1))
    current_question_index += 1

    if(current_question_index < questions.length-1) {
      current_question_index += 1
    } else {
      alert("index would be out of bounds" + questions.length + ", " + current_question_index)
    }
}


</script>

<style lang="scss">
#map {
    height: 180px;
}
</style>
