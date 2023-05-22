import { defineStore } from 'pinia'
import { useUserStore } from './user'
import { useGlobalStore } from './global'


export const useStoreResponse = defineStore('response', {
    state: () => ({
        response: null,
        currentQuestion: 1,
        answersToCurrentSurvey: [],
    }),
    getters: {
      getAnswersToCurrentSurvey: (state) => state.answersToCurrentSurvey
    },
    actions: {
        setResponse(response) {
            this.response = response
        },
        setCurrentQuestion(questionNumber) {
            this.currentQuestion = questionNumber
        },
        async getResponse({ id }) {
            console.log('get response id //> ', id)
            const { data: survey } = await useAsyncData(() => $cmsApi('/api/surveys/' + id + '/'));
            return survey
        },
        async createResponse({ id }) {

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                },
                method: 'POST',
                //   // Pass the data for the new Response object as the request body
                //   // TODO: have the respondent set to the logged in user
                body: {
                    survey: '/api/surveys/' + id + "/",
                    interview_uuid: "123",
                    respondent: "/api/users/me/"
                },
            }

            const { data: survey } = await useAsyncData(() => $cmsApi('/api/responses/' + id + '/', config));
            console.log("CreateResponse retrieved survey:")
            console.log(survey)

        },
      async submitAnswer(answers) {
        const user = useUserStore()
        const global = useGlobalStore()
        const csrftoken = user.getCookie('csrftoken');
        const token = user.getAuthToken

        const config = {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken,
          },
          method: 'POST',
          //   // Pass the data for the new Response object as the request body
          //   // TODO: have the respondent set to the logged in user
          body: {
            // survey: '/api/surveys/' + id + "/",
            interview_uuid: "123",
            respondent: "/api/users/me/",
            answers: answers,
            responseId: 1,
          },
        }

        if (token) {
          config.headers['Authorization'] = `Token ${token}`
        }

        const { data: survey } = await useAsyncData(() => $cmsApi('/api/responses/submit-response/', config));
        // console.log("CreateResponse retrieved survey:")
        // console.log(survey)

        console.log("Response:")
        console.log(answers)
      }

    }
})
