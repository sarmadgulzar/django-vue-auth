<template>
  <div>
    <form @submit.prevent="login">
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" value />
      <ul>
        <li v-for="(error, index) in usernameErrors" :key="index">
          {{ error }}
        </li>
      </ul>
      <label for="password">Password</label>
      <input v-model="password" type="text" name="password" value />
      <ul>
        <li v-for="(error, index) in passwordErrors" :key="index">
          {{ error }}
        </li>
      </ul>
      <button type="submit" name="button">Login</button>
      <ul>
        <li v-for="(error, index) in nonFieldErrors" :key="index">
          {{ error }}
        </li>
      </ul>
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
      usernameErrors: [],
      passwordErrors: [],
      nonFieldErrors: [],
    };
  },
  methods: {
    login() {
      this.$store
        .dispatch("auth/login", {
          username: this.username,
          password: this.password,
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch((err) => {
          this.usernameErrors = err.response.data.username;
          this.passwordErrors = err.response.data.password;
          this.nonFieldErrors = err.response.data.non_field_errors;
        });
    },
  },
});
</script>
