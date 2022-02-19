<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Dummy App </q-toolbar-title>
        <q-btn
          v-if="!loggedIn"
          stretch
          flat
          label="Login"
          @click="$router.replace('/login')"
        />
        <q-btn
          v-if="!loggedIn"
          stretch
          flat
          label="Register"
          @click="$router.replace('/register')"
        />
      </q-toolbar>
    </q-header>
    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "MainLayout",
  computed: {
    ...mapGetters("auth", ["loggedIn"]),
  },
});
</script>
