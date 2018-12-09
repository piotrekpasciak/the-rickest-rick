<template>
  <div class="base-item">
    <header class="base-item__header">
      <img :src="imageSrc" class="base-item__img">
      <div class="base-item__header-content">
        <h3 class="base-item__title">{{ name }}</h3>
        <span class="base-item__subtitle">{{ species }} from {{ originLocation }}</span>
      </div>
    </header>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      imageSrc: {
        type: String,
        required: true
      },
      species: {
        type: String,
        required: true
      },
      originLocation: {
        type: String,
        required: true
      }
    },
    components: {

    },
    data() {
      return {

      }
    },
    computed: {
    }
  }
</script>
