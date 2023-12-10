<script setup>
definePageMeta({
  layout: "custom",
});

// const movieId = ref(123);
// const title = ref("One Piece");
// const releaseDate = ref("20 Januari 2023");
// const poster = ref(
//   "https://upload.wikimedia.org/wikipedia/id/4/44/One_Piece_Film_Red_Visual_Poster.jpg"
// );

// const revenue = ref(45467545);
// const overview = ref(
//   "For the first time ever, Uta - the most beloved singer in the world - will reveal herself to the world at a live concert. The voice that the whole world has been waiting for is about to resound. Uta - the most beloved singer in the world. Her voice, which she sings with while concealing her true identity, has been described as otherworldly. She will appear in public for the first time at a live concert. As the venue fills with all kinds of Uta fans - excited pirates, the Navy watching closely, and the Straw Hats led by Luffy who simply came to enjoy her sonorous performance - the voice that the whole world has been waiting for is about to resound. The story begins with the shocking fact that she is Shanks daughter"
// );
const route = useRoute();
// Fetch Single Movie
const { data: movie, error } = await useFetch(`/api/movies/${route.params.id}`);

// Fetch Trailler Movie
const { data: video } = await useFetch(
  `/api/movies/trailer/${route.params.id}`
);
const allVideo = toRaw(video.value.results);
console.log("allVideo -->", allVideo);

const trailer = computed(() => {
  let trailer = [];
  for (let i = 0; i < allVideo.length; i++) {
    if (allVideo[i].type === "Trailer") {
      trailer.push(allVideo[i]);
    }
  }
  return trailer[0].key;
});
</script>

<template>
  <div>
    <MovieDetail
      :title="movie.title"
      :releaseDate="movie.release_date"
      :poster="movie.poster_path"
      :revenue="movie.revenue"
      :overview="movie.overview"
      :trailer="trailer"
    />
  </div>
</template>
