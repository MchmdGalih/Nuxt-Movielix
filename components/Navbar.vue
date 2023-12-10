<script setup lang="ts"></script>
<template>
  <div>
    <nav class="bg-cyan-900">
      <div class="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div class="flex justify-between h-16">
          <div class="mt-4 sm:ml-6 sm:flex sm:item-center">
            <NuxtLink
              class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700"
              to="/"
              >Home</NuxtLink
            >
            <NuxtLink
              class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700"
              to="/login"
              >Login</NuxtLink
            >

            <NuxtLink
              class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700"
              to="/registration"
              >Registration</NuxtLink
            >

            <NuxtLink
              class="px-3 py-2 rounded-md text-sm font-medium text-white hover:bg-cyan-700 focus:outline-none focus:bg-cyan-700"
              to="/contact"
              >Contact</NuxtLink
            >
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>

<style Lang="css" scoped></style>
