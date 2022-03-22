<template>
  <div id="app">
    <MoviesList :list="moviesList" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "@/components/MoviesList";
export default {
  name: "Home",
  data() {
    return {
      text: "Text",
    };
  },
  components: {
    MoviesList,
  },

  computed: {
    ...mapGetters("moviesStore", ["moviesList"]),
  },

  methods: {
    ...mapActions("moviesStore", ["fetchMovies"]),
  },
};
</script>
