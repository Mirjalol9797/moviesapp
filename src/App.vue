<template>
  <div id="app">
    <PosterBg :poster="posterBg" />
    <MoviesList :list="moviesList" @changePoster="onChangePoster" />
    <MoviesPagination
      :current-page="currentPage"
      :per-page="moviesPerPage"
      :total="moviesLength"
      @pageChanged="onPageChanged"
    />
  </div>
</template>

<script>
import { mapActions, mapGetters } from "vuex";
import MoviesList from "@/components/MoviesList";
import PosterBg from "@/components/PosterBg";
import MoviesPagination from "@/components/MoviesPagination";

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
    MoviesPagination,
  },

  computed: {
    ...mapGetters("moviesStore", [
      "moviesList",
      "currentPage",
      "moviesPerPage",
      "moviesLength",
    ]),
  },

  methods: {
    ...mapActions("moviesStore", ["changeCurrentPage"]),
    onChangePoster(poster) {
      this.posterBg = poster;
      console.log(poster);
    },
    onPageChanged(page) {
      this.changeCurrentPage(page);
    },
  },
};
</script>

<style scoped>
#app {
  position: relative;
}
</style>
