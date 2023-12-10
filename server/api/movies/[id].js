export default defineEventHandler(async (event) => {
  const { movieKey } = useRuntimeConfig();
  const movieId = event.context.params.id;
  try {
    const data = await $fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=${movieKey}&language=en-US`
    );
    return data;
  } catch (error) {
    return null;
  }
});
