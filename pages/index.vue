<script setup>
const movies = ref([]);
const searchError = ref(false);

const searchMovie = async (searchInput) => {
  console.log("search text: ", searchInput);
  if (searchInput === "") {
    searchError.value = true;
  }
  if (searchInput !== "") {
    searchError.value = false;

    // write the code movies
    const { data, error } = await useFetch(
      `/api/movies/search?searchInput=${searchInput}`
    );

    movies.value = data.value;
  }
};

// fetch API
const { data, error } = await useFetch("/api/movies");
movies.value = data.value;

// const movieId = ref(123);
// const title = ref("One Piece");
// const releaseDate = ref("20 Januari 2023");
// const poster = ref(
//   "https://upload.wikimedia.org/wikipedia/id/4/44/One_Piece_Film_Red_Visual_Poster.jpg"
// );
</script>

<template>
  <div>
    <SearchBar @search-movie="searchMovie" :searchError="searchError" />
    <div
      class="grid md:grid-cols-4 sm:grid-cols-1 justify-items-center bg-cyan-50"
    >
      <div v-for="movie in movies.results" :key="movie.id">
        <MovieCard
          :movieId="movie.id"
          :title="movie.title"
          :releaseDate="movie.release_date"
          :poster="movie.poster_path"
        />
      </div>
    </div>
  </div>
</template>

<style></style>
