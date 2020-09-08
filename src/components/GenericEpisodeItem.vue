<template>
  <div class="episode-item">
    <h3 class="episode-item__num">Episode {{ EpisodeNumber }}</h3>
    <h2 class="episode-item__name">{{ name }}</h2>
    <span class="episode-item__season-badge">Season {{ SeasonNumber }}</span>
    <slot />
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
        const seasonNumberRegex = /S(.*)E/
        return parseInt(this.episode.match(seasonNumberRegex)[1], 10)
      },
      EpisodeNumber() {
        const episodeNumberRegex = /E(.*)/
        return parseInt(this.episode.match(episodeNumberRegex)[1], 10)
      }
    }
  }
</script>
