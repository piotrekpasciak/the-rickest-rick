<template>
  <div>
    <h1 class="episodes__title">Episodes</h1>

    <div class="episodes__search">
      <SearchIcon />
      <input @input="debounceSearchOnInput($event.target.value)" type="text" placeholder="Search">
    </div>

    <ul class="episodes__list">
      <li v-for="episode in episodes" v-bind:key="episode.id">
        <GenericEpisodeItem
          v-bind:name="episode.name"
          v-bind:episode="episode.episode"
          v-bind:airDate="episode.air_date"
        />
      </li>
    </ul>

    <div class="episodes__loader">
      Loading more
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
import SearchIcon from '../assets/icon-search.svg'
import GenericEpisodeItem from '../components/GenericEpisodeItem'
import getEpisodes from '../modules/Episode'

export default {
  components: {
    SearchIcon,
    GenericEpisodeItem
  },
  data() {
    return {
      episodes: []
    }
  },
  methods: {
    getEpisodesHandler(page = 1, query = '') {
      getEpisodes(page, query).then(success => {
        this.episodes = success.data.results
      }, failure => {
        this.episodes = []
      })
    },
    debounceSearchOnInput: debounce(function(query) {
      this.getEpisodesHandler(1, query)
    }, 200)
  },
  created: function() {
    this.getEpisodesHandler()
  }
}
</script>
