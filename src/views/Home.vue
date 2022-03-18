<template>
  <div class="home">
    Home page
    {{ text }}
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Home",
  data() {
    return {
      text: "Text",
    };
  },
  components: {},
  mounted() {
    this.fetchMovies();
  },
  methods: {
    ...mapActions("moviesStore", ["fetchMovies"]),
  },
};
</script>
