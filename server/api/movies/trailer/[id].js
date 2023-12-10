export default defineEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();
  const movieId = event.context.params.id;
  try {
    const data = await $fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos?api_key=${movieKey}`
    );
    return data;
  } catch (error) {
    return null;
  }
});
