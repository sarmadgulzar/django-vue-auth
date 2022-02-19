<template>
  <div>
    <form @submit.prevent="login">
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" value />
      <label for="password">Password</label>
      <input v-model="password" type="text" name="password" value />
      <button type="submit" name="button">Login</button>
    </form>
  </div>
</template>
<script>
import { defineComponent } from "vue";

export default defineComponent({
  name: "Login",
  data() {
    return {
      username: "",
      password: "",
    };
  },
  methods: {
    login() {
      this.$store.dispatch("auth/login", {
        username: this.username,
        password: this.password,
      });
    },
  },
});
</script>
