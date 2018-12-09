<template>
  <div class="base-item">
    <header class="base-item__header">
      <div class="base-item__header-content">
        <h3 class="base-item__title">{{ author }}</h3>
        <span class="base-item__subtitle">{{ createdAt }}</span>
      </div>
    </header>

    <p class="base-item__content">
      {{ content }}
    </p>
  </div>
</template>

<script>
  export default {
    props: {
      author: {
        type: String,
        required: true
      },
      content: {
        type: String,
        required: true
      },
      createdAt: {
        type: String,
        rquired: true
      }
    },
    components: {

    },
    data() {
      return {

      }
    },
    methods: {
    }
  }
</script>
