<template>
  <NuxtLayout name="default">
    <q-page>
      <div class="padding-16">
        <h2>My Surveys</h2>
        <q-list bordered class="rounded-borders" style="max-width: 800px">
<!--          <q-item-label header>Google Inbox style</q-item-label>-->
          <list-item-survey-design v-for="survey in surveys" :survey_object="survey"> </list-item-survey-design>
<!--          <q-separator/>-->
        </q-list>
      </div>
    </q-page>
  </NuxtLayout>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from "../components/BaseButton";
import ListItemSurveyDesign from "../components/ListItemSurveyDesign";

import { formatDate } from "~/utils/formatData"
/**
 * All `/api/**` are proxies pointing to the local or production server of the backend.
 */
const url = "/api/surveys/"

const { data: surveys } = await useAsyncData(() => $fetch(url));


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

.padding-16{
  padding: 16px;
}
</style>
