<template>
  <div class="episode-item">
    <h3 class="episode-item__num">Episode {{ EpisodeNumber }}</h3>
    <h2 class="episode-item__name">{{ name }}</h2>
    <span class="episode-item__season-badge">Season {{ SeasonNumber }}</span>
    <slot></slot>
  </div>
</template>

<script>
  export default {
    props: {
      name: {
        type: String,
        required: true
      },
      episode: {
        type: String,
        required: true
      }
    },
    computed: {
      SeasonNumber() {
        debugger
        const episodeRegex = /ab+c/;
        return parseInt(
          this.episode.substring(1,3), 10
        )
      },
      EpisodeNumber() {
        return parseInt(this.episode.substring(4,6), 10)
      }
    }
  }
</script>
