<template>
  <q-layout view="lHh Lpr lFf" style="font-family: 'Nunito Sans', sans-serif;">
    <q-page-container>
      <router-view />
    </q-page-container>
    <q-footer bordered class="bg-white text-primary">
        <q-tabs narrow-indicator no-caps active-color="primary" class="text-grey" v-model="tab">
          <q-route-tab to='/index' name="home" label="Home" />
          <q-route-tab to='/journey' name="journey" label="Journey" />
          <q-route-tab to='/projects' name="projects" label="Projects" />
          <q-route-tab to='/blog' name="blog" label="Blog" />
        </q-tabs>
      </q-footer>
  </q-layout>
</template>
<script>
export default {
  data () {
    return {
      tab: 'home'
    }
  }
}
</script>
