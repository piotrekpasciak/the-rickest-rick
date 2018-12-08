<template>
  <div id="app">
    <TheHeader />
    <main class="main">
      <router-view />
    </main>
  </div>
</template>

<script>
  import TheHeader from './components/TheHeader.vue'

  export default {
    components: {
      TheHeader
    }
  }
</script>
