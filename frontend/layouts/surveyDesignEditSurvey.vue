<template>
  <q-page>
    <div class="padding-16">
      <q-btn @click="back_to_page()" flat round color="primary" icon="arrow_back" />
      <h5>Survey: {{survey.name}}</h5>
          <div class="custom-list-container">
              <q-list bordered>
                <q-item v-for="question in questions" clickable v-ripple>
                  <q-item-section top class="col-3 gt-sm">
                    <q-item-label class="q-mt-sm">{{question.text}}</q-item-label>
                  </q-item-section>

                  <q-item-section top>
                  </q-item-section>

                  <q-item-section>

                  </q-item-section>
                  <q-item-section top side>
                    <div class="text-grey-8 q-col-gutter-xs">
<!--                      <q-item-label>Required</q-item-label>-->
                      <q-checkbox v-bind="question.required"/>
                      <q-btn class="gt-xs" size="12px" flat dense round icon="delete" />

                    </div>
                  </q-item-section>
                </q-item>
              </q-list>
          </div>
      <q-btn @click="" color="white" text-color="black" label="Add question" />
    </div>
  </q-page>
</template>

<script>
import { ref } from 'vue'
import BaseButton from "../components/BaseButton";
import Breadcrums from "../components/breadcrums";
export default {
  name: "surveyDesignEditSurvey",
  components: {Breadcrums, BaseButton},
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
    const url = "/api/questions"
    const { data: question_list } = await useAsyncData(() => $fetch(url));
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
