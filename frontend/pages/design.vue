<template>
  <NuxtLayout name="default">
    <q-page>
      <div class="padding-16">
        <h2>Survey Design</h2>
      </div>
    </q-page>
  </NuxtLayout>
</template>

<script setup>
import { ref } from 'vue'
import BaseButton from "../components/BaseButton";

const menuList = [
  {
    icon: 'inbox',
    label: 'Inbox',
    separator: true
  },
  {
    icon: 'send',
    label: 'Outbox',
    separator: false
  },
  {
    icon: 'delete',
    label: 'Trash',
    separator: false
  },
  {
    icon: 'error',
    label: 'Spam',
    separator: true
  },
  {
    icon: 'settings',
    label: 'Settings',
    separator: false
  },
  {
    icon: 'feedback',
    label: 'Send Feedback',
    separator: false
  },
  {
    icon: 'help',
    iconColor: 'primary',
    label: 'Help',
    separator: false
  }
]
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
