<template>
  <div>
    <h1 class="episodes__title">Episodes</h1>

    <div class="episodes__search">
      <!-- search icon -->
      <input type="text" placeholder="Search">
    </div>

    <ul class="episodes__list">
      <li v-for="episode in episodes" v-bind:key="episode.id">
        <GenericEpisodeItem
          v-bind:name="episode.name"
          v-bind:episode="episode.episode"
          v-bind:airDate="episode.air_date"
        />
      </li>
      <!-- ... -->
    </ul>

    <div class="episodes__loader">
      Loading more
    </div>
  </div>
</template>

<script>
import GenericEpisodeItem from '../components/GenericEpisodeItem'
import getEpisodes from '../modules/Episode'

export default {
  components: {
    GenericEpisodeItem
  },
  data() {
    return {
      episodes: []
    }
  },
  methods: {

  },
  created: function() {
    getEpisodes().then(success => {
      this.episodes = success.data.results
    }, failure => {
      this.episodes = []
    })
  }
}
</script>
