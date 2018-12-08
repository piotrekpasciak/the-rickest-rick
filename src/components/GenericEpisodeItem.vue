<template>
  <div class="episode-item">
    <h3 class="episode-item__num">Episode {{ EpisodeNumber }}</h3>
    <h2 class="episode-item__name">{{ name }}</h2>
    <span class="episode-item__season-badge">Season {{ SeasonNumber }}</span>
    <div v-if="withEpisodeInfo" class="episode-info">
      <span class="episode-info__label">Air date</span>
      <span class="episode-info__value">{{ airDate }}</span>
    </div>
  </div>
</template>

<script>
  export default {
    props: {
      airDate: String,
      withEpisodeInfo: {
        type: Boolean,
        default: false
      },
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
        return parseInt(this.episode.substring(1,3), 10)
      },
      EpisodeNumber() {
        return parseInt(this.episode.substring(4,6), 10)
      }
    }
  }
</script>
