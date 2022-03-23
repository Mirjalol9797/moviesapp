<template>
  <div id="app">
    <PosterBg :poster="posterBg" />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "@/components/MoviesList";
import PosterBg from "@/components/PosterBg";

export default {
  name: "Home",
  data() {
    return {
      text: "Text",
      posterBg: "",
    };
  },
  components: {
    MoviesList,
    PosterBg,
  },

  computed: {
    ...mapGetters("moviesStore", ["moviesList"]),
  },

  methods: {
    ...mapActions("moviesStore", ["fetchMovies"]),
    onChangePoster(poster) {
      this.posterBg = poster;
      console.log(poster);
    },
  },
};
</script>

<style scoped>
#app {
  position: relative;
}
</style>
