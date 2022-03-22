<template>
  <b-container>
    <h3 class="list-title">IMDB top 250</h3>
    <b-row>
      <template v-if="isExist">
        <b-col cols="3" v-for="(movie, key) in list" :key="key">
          <MovieItem :movie="movie" />
        </b-col>
      </template>
      <template v-else>
        <b-alert show variant="primary">IMDP top 250 not found</b-alert>
      </template>
    </b-row>
  </b-container>
</template>

<script>
import MovieItem from "./MovieItem.vue";

export default {
  name: "MoviesList",
  props: {
    list: {
      type: Object,
      default: () => ({}),
    },
  },
  components: {
    MovieItem,
  },
  computed: {
    isExist() {
      return Boolean(Object.keys(this.list).length);
    },
  },
};
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
.list-title {
  font-size: 50px;
  margin-bottom: 30px;
}
</style>
