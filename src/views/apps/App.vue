<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>
    <router-view />
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
