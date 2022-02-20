<template>
  <div class="flex justify-center q-mt-xl">
    <form @submit.prevent="register" style="width: 300px">
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
        v-model="password1"
        label="Password"
        type="password"
        :no-error-icon="true"
        :error-message="password1Error"
        :error="!!password1Error"
      />
      <q-input
        class="q-mb-sm"
        filled
        bottom-slots
        v-model="password2"
        label="Password Again"
        type="password"
        :no-error-icon="true"
        :error-message="password2Error"
        :error="!!password2Error"
      />
      <q-btn
        class="q-mt-sm"
        :loading="buttonLoading"
        type="submit"
        color="primary"
        name="button"
        label="Register"
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
  name: "Register",
  setup() {
    const $q = useQuasar();
    const $store = useStore();
    const $router = useRouter();

    const username = ref("");
    const usernameError = ref("");

    const password1 = ref("");
    const password1Error = ref("");

    const password2 = ref("");
    const password2Error = ref("");

    const buttonLoading = ref(false);

    return {
      username,
      usernameError,
      password1,
      password1Error,
      password2,
      password2Error,
      buttonLoading,
      register() {
        buttonLoading.value = true;
        $store
          .dispatch("auth/register", {
            username: username.value,
            password1: password1.value,
            password2: password2.value,
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
            password1Error.value = get_first_or_null(data.password1);
            password2Error.value = get_first_or_null(data.password2);
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
