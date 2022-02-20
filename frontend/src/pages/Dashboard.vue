<template>
  <div>
    <p>{{ user }}</p>
  </div>
</template>
<script>
import { defineComponent } from "vue";
import { mapGetters } from "vuex";

export default defineComponent({
  name: "Dashboard",
  computed: {
    ...mapGetters("auth", ["user"]),
  },
});
</script>
