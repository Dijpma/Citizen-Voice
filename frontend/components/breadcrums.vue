<template>
  <div class="q-pa-md q-gutter-sm">
    <q-breadcrumbs >
<!--      <div v-for="link in breadcrum_stack">-->
<!--      <q-breadcrumbs-el  v-for="link in breadcrum_stack" label="{link}" />-->
<!--      </div>-->
      <q-breadcrumbs-el label="" icon="home" to="/" />
      <q-breadcrumbs-el label="Survey Design" to="/design" />
    </q-breadcrumbs>
  </div>
</template>

<script>
export default {
  name: "breadcrums",
  data() {
    return {
      breadcrum_stack: [],
    }
  },
  methods: {
    push_link: function (link) {
      this.breadcrum_stack.push(link)
    },
    pop_link: function () {
      return this.breadcrum_stack.pop();
    }
  }
}
</script>

<style scoped>

</style>
