<template>
  <div>
    <form @submit.prevent="register">
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" value />
      <ul>
        <li v-for="(error, index) in usernameErrors" :key="index">
          {{ error }}
        </li>
      </ul>
      <label for="password1">Password</label>
      <input v-model="password1" type="text" name="password1" value />
      <ul>
        <li v-for="(error, index) in password1Errors" :key="index">
          {{ error }}
        </li>
      </ul>
      <label for="password2">Password Again</label>
      <input v-model="password2" type="text" name="password2" value />
      <ul>
        <li v-for="(error, index) in password2Errors" :key="index">
          {{ error }}
        </li>
      </ul>
      <button type="submit" name="button">Register</button>
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
  name: "Register",
  data() {
    return {
      username: "",
      password1: "",
      password2: "",
      usernameErrors: [],
      password1Errors: [],
      password2Errors: [],
      nonFieldErrors: [],
    };
  },
  methods: {
    register() {
      this.$store
        .dispatch("auth/register", {
          username: this.username,
          password1: this.password1,
          password2: this.password2,
        })
        .then(() => {
          this.$router.push({ name: "dashboard" });
        })
        .catch((err) => {
          this.usernameErrors = err.response.data.username;
          this.password1Errors = err.response.data.password1;
          this.password2Errors = err.response.data.password2;
          this.nonFieldErrors = err.response.data.non_field_errors;
        });
    },
  },
});
</script>
