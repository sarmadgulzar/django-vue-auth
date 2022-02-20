<template>
  <div>
    <form @submit.prevent="register">
      <label for="username">Username</label>
      <input v-model="username" type="text" name="username" value />
      <label for="password1">Password</label>
      <input v-model="password1" type="text" name="password1" value />
      <label for="password2">Password Again</label>
      <input v-model="password2" type="text" name="password2" value />
      <button type="submit" name="button">Register</button>
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
        });
    },
  },
});
</script>
