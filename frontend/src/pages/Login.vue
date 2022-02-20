<template>
  <div class="flex justify-center q-mt-xl">
    <form @submit.prevent="login" style="width: 300px">
      <q-input
        class="q-mb-sm"
        filled
        bottom-slots
        v-model="username"
        label="Username"
        :no-error-icon="true"
        :error-message="usernameError"
        :error="!!usernameError"
      />
      <q-input
        class="q-mb-sm"
        filled
        bottom-slots
        v-model="password"
        label="Password"
        type="password"
        :no-error-icon="true"
        :error-message="passwordError"
        :error="!!passwordError"
      />
      <q-btn
        class="q-mt-sm"
        :loading="buttonLoading"
        type="submit"
        color="primary"
        name="button"
        label="Login"
      />
    </form>
  </div>
</template>
<script>
import { useQuasar } from "quasar";
import { defineComponent, ref } from "vue";
import { useStore } from "vuex";
import { useRouter } from "vue-router";

export default defineComponent({
  name: "Login",
  setup() {
    const $q = useQuasar();
    const $store = useStore();
    const $router = useRouter();

    const username = ref("");
    const usernameError = ref("");

    const password = ref("");
    const passwordError = ref("");

    const buttonLoading = ref(false);

    return {
      username,
      usernameError,
      password,
      passwordError,
      buttonLoading,
      login() {
        buttonLoading.value = true;
        $store
          .dispatch("auth/login", {
            username: username.value,
            password: password.value,
          })
          .then(() => {
            buttonLoading.value = false;
            $q.notify({
              icon: "done",
              color: "positive",
              message: "Logged in",
              timeout: 500,
            });
            setTimeout(() => {
              $router.push({ name: "dashboard" });
            }, 1000);
          })
          .catch((err) => {
            let get_first_or_null = (arr) => {
              if (!arr) {
                return null;
              } else {
                return arr[0];
              }
            };
            buttonLoading.value = false;
            let data = err.response.data;
            usernameError.value = get_first_or_null(data.username);
            passwordError.value = get_first_or_null(data.password);
            let non_field_error = get_first_or_null(data.non_field_errors);

            if (non_field_error) {
              $q.notify({
                color: "negative",
                message: non_field_error,
              });
            }
          });
      },
    };
  },
});
</script>
