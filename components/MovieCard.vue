<script setup>
defineProps(["movieId", "title", "releaseDate", "poster"]);
</script>

<template>
  <div class="bg-cyan-50 rounded-lg shadow-md overflow-hidden m-4 px-2">
    <div class="p-1 py-4">
      <h3 class="font-semibold text-lg mb-2 text-center">{{ title }}</h3>
      <div class="overflow-hidden mb-4">
        <img
          class="h-400 2-300 object-cover"
          :src="`https://image.tmdb.org/t/p/w500/${poster}`"
          alt="placeholder Image"
        />
      </div>
      <p class="text-gray-500 text-sm mb-2 px-2">
        Release Date: {{ releaseDate }}
      </p>
      <div class="mt-4 p-2 text-right">
        <NuxtLink
          :to="`/movies/${movieId}`"
          class="bg-rose-500 hover:bg-rose-600 text-white font-medium py-2 px-2 rounded"
          >Get Details</NuxtLink
        >
      </div>
    </div>
  </div>
</template>

<style scoped>
.h-400 {
  height: 400px;
}

.w-300 {
  width: 300px;
}
</style>
