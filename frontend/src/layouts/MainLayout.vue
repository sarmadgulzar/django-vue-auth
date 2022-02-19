<template>
  <q-layout>
    <q-header elevated>
      <q-toolbar>
        <q-toolbar-title> Dummy App </q-toolbar-title>
        <q-btn stretch flat label="Login" @click="$router.replace('/login')" />
        <q-btn
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

export default defineComponent({
  name: "MainLayout",
});
</script>
