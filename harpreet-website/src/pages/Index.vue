<template>
  <q-page class="flex flex-center bg-dark" style="text-align:center;">
    <div class="row justify-center" style="width:100%">
      <q-img
      src="https://media-exp1.licdn.com/dms/image/C5103AQFwt7Z_XIDBrg/profile-displayphoto-shrink_400_400/0/1520529970197?e=1614816000&v=beta&t=dHBX9pn1ge_hdr671sK5Ha2kJ7PY7PuaqhiIMRWXgDo"
      spinner-color="white"
      style="max-width: 250px; border-radius:50%; border: 2px solid #fff;"
    />
      <h1 style="font-size:8vw; width:100%; color:white"> Hi, I'm Harpreet Virk</h1>
        <div class="q-pa-sm q-gutter-lg" style="padding:0px 0px 60px 0px; width:100%">
          <a class='icon-ref' target="_blank" href="mailto:harpreet.virk_asp21@ashoka.edu.in"><q-btn class="shadow-21 inset-shadow-down" :ripple="{ center: true }" round color='white' text-color="dark" icon="far fa-envelope" /></a>
          <a class='icon-ref' target="_blank" href="https://www.linkedin.com/in/harpreetsinghvirk/"><q-btn class="shadow-21 inset-shadow-down" :ripple="{ center: true }" round color='white' text-color="dark" icon="fab fa-linkedin" /></a>
          <a class='icon-ref' target="_blank" href="https://github.com/harpreetvirkk"><q-btn class="shadow-21 inset-shadow-down" :ripple="{ center: true }" round color='white' text-color="dark" icon="fab fa-github" /></a>
          <a class='icon-ref' target="_blank" href="https://instagram.com/harpreettvirk"><q-btn class="shadow-21 inset-shadow-down" :ripple="{ center: true }" round color='white' text-color="dark" icon="fab fa-instagram" /></a>
        </div>
        <q-btn to="/resume" class="shadow-21 inset-shadow-down" no-caps color='white' text-color="dark" icon="fas fa-download" label="Résumé"> </q-btn>
    </div>
  </q-page>
</template>

<script>
export default {
  name: 'PageIndex',
  data () {
    return {
      tab: 'mails'
    }
  }
}
</script>
<style>
.icon-ref {
  color:  #840000;
  background-color: transparent;
  text-decoration: none;
}
.icon-ref:hover {
  color: #840000;
  background-color: transparent;
}
.head-ref:hover {
  color: #840000;
  background-color: transparent;
}
</style>
