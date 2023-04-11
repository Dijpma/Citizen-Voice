import { defineStore } from 'pinia'
import { useUserStore } from './user'
import { useGlobalStore } from './global'

export const useSurveyStore = defineStore('survey', {
    state: () => {
        return {
            id: null,
            questions_of_survey: {},
        }
    },
    getters: {

    },
    actions: {
        /**
        * Create survey
        * @param {*} name
        * @param {*} description
        * @param {*} publish_date
        * @param {*} expire_date
        * @param {id} id
        */

        /**
         * Create a new survey based on the passed parameters
         */
        async createSurvey(
            name,
            description,
            publish_date,
            expire_date
        ) {
            const user = useUserStore()
            const global = useGlobalStore()
            const csrftoken = user.getCookie('csrftoken');
            const token = user.userData.token

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                method: 'POST',
                body: {
                    name,
                    description,
                    publish_date,
                    expire_date
                },
            }

            if (token) {
                config.headers['Authorization'] = `Token ${token}`
            }

            const { data: register, pending, error } = await useAsyncData('createSurvey', () => $cmsApi('/api/surveys/create-survey/', config))

            if (error.value) {
                let warnMessage = null
                for (const [key, value] of Object.entries(error._value.data)) {
                    warnMessage = warnMessage ? `${warnMessage} \n\n ${key}: ${value}` : `${key}: ${value}`
                }
                // Notification
                global.warning(warnMessage)
                console.log(warnMessage)
                return null

            }
            if (register?.value) {
                // Notification
                global.succes('createSurvey complete')
                this.id = 1
                return register.value
            }
            // TODO: Return the id of the created survey
            return 1
        },

        /**
         * Get surveys of the current user
         */
        async getSurveysOfCurrentUser() {
            const user = useUserStore()
            await user.loadUser()
            const global = useGlobalStore()
            const csrftoken = user.getCookie('csrftoken');
            const token = user.userData.token

            const config = {
                headers: {
                    'Content-Type': 'application/json',
                    'X-CSRFToken': csrftoken
                },
                method: 'GET'
            }

            if (token) {
                config.headers['Authorization'] = `Token ${token}`
            }

            const response = await useAsyncData('getSurveys', () => $cmsApi('/api/surveys/my-surveys', config))

            const error = response.error
            if (error.value) {
                let warnMessage = null
                for (const [key, value] of Object.entries(error._value.data)) {
                    warnMessage = warnMessage ? `${warnMessage} \n\n ${key}: ${value}` : `${key}: ${value}`
                }
                // Notification
                global.warning(warnMessage)
            }
            else {
            }

          return response
        },

      /**
       * Delete an existing survey based on the passed ID
       */
      async deleteSurvey(
        id
      ) {
        const user = useUserStore()
        const global = useGlobalStore()
        const csrftoken = user.getCookie('csrftoken');
        const token = user.userData.token

        const config = {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
          },
          method: 'DELETE'
        }


        if (token) {
          config.headers['Authorization'] = `Token ${token}`
        }

        const { data: register, pending, error } = await useAsyncData('deleteSurvey', () => $cmsApi('/api/surveys/' + id, config))

        if (error.value) {
          let warnMessage = null
          for (const [key, value] of Object.entries(error._value.data)) {
            warnMessage = warnMessage ? `${warnMessage} \n\n ${key}: ${value}` : `${key}: ${value}`
          }
          // Notification
          global.warning(warnMessage)

        }
        else {
          // Notification
          global.succes('deleteSurvey complete')
          this.id = 1
          await navigateTo('/design')
        }

      },

      async getQuestionsOfSurvey(id) {
        const user = useUserStore()
        const global = useGlobalStore()
        const csrftoken = user.getCookie('csrftoken');
        const token = user.userData.token

        const config = {
          headers: {
            'Content-Type': 'application/json',
            'X-CSRFToken': csrftoken
          },
          method: 'GET'
        }


        if (token) {
          config.headers['Authorization'] = `Token ${token}`
        }

        const res = await useAsyncData('getSurveys', () => $cmsApi('/api/surveys/' + id + '/questions', config))
        return res
      },
    }
})
