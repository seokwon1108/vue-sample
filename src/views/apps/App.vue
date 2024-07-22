<template>
  <div class="flex flex-col">
    <nav class="pb-5">
      <router-link class="border p-5 hover:bg-slate-400 hover:text-white" to="/"
        >Home</router-link
      >
      <router-link
        class="border p-5 hover:bg-slate-400 hover:text-white"
        to="/about"
        >About</router-link
      >
      <router-link
        class="border p-5 hover:bg-slate-400 hover:text-white"
        to="/table-grid"
        >Table Grid</router-link
      >
    </nav>

    <div class="flex flex-col flex-1">
      <router-view class="h-full" />
    </div>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped>
nav {
  margin-bottom: 1em;
}

nav a {
  margin-right: 1em;
}
</style>
