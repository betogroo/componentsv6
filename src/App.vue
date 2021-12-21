<script setup lang="ts">
import ReloadPWAVue from './ReloadPWA.vue'
</script>

<template>
  <ReloadPWAVue />
  <div class="nav-bar">
    <div class="nav">
      <router-link :to="{ name: 'Home' }">Home</router-link> |
      <router-link :to="{ name: 'About' }">About</router-link>
    </div>
  </div>
  <router-view />
</template>
<style lang="scss" scoped>
* {
  font-family: Roboto, Helvetica, Arial, sans-serif;
  margin: 0;
  padding: 0;
}
.nav-bar {
  display: flex;
  justify-content: center;
}
.nav {
  a {
    color: red;
  }
  a:hover {
    color: blue;
  }
}
</style>
