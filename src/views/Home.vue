<template>
  <div
    v-infinite-scroll="getAdditionalEpisodesHandler"
    infinite-scroll-disabled="isInfiniteScrollDisabled"
    infinite-scroll-distance="10"
  >
    <h1 class="episodes__title">
      Episodes
    </h1>

    <div class="episodes__search">
      <SearchIcon />
      <input
        v-model="currentQuery"
        type="text"
        placeholder="Search"
        @input="debounceSearchOnInput()"
      >
    </div>

    <ul class="episodes__list">
      <li
        v-for="episode in episodes"
        :key="episode.id"
      >
        <RouterLink :to="{ name: 'episode', params: { id: episode.id } }">
          <GenericEpisodeItem
            :name="episode.name"
            :episode="episode.episode"
          />
        </RouterLink>
      </li>
    </ul>

    <div
      v-if="isLoading"
      class="episodes__loader"
    >
      Loading more
    </div>
  </div>
</template>

<script>
import debounce from 'lodash.debounce'
import SearchIcon from '../assets/icon-search.svg'
import GenericEpisodeItem from '../components/GenericEpisodeItem/GenericEpisodeItem'
import { getEpisodes } from '../modules/Episode'

export default {
  components: {
    SearchIcon,
    GenericEpisodeItem
  },
  data() {
    return {
      episodes: [],
      currentQuery: '',
      currentPage: 1,
      maxPages: 0,
      isLoading: false
    }
  },
  computed: {
    isInfiniteScrollDisabled() {
      return this.isLoading || this.currentPage >= this.maxPages
    }
  },
  methods: {
    getEpisodesHandler() {
      this.currentPage = 1
      this.isLoading = true
      getEpisodes(this.currentPage, this.currentQuery).then(success => {
        this.episodes = success.data.results
        this.maxPages = success.data.info.pages
      }, failure => {
        this.episodes = []
      })
      this.isLoading = false
    },
    getAdditionalEpisodesHandler: function() {
      this.isLoading = true
      this.currentPage += 1
      getEpisodes(this.currentPage, this.currentQuery).then(success => {
        this.episodes = this.episodes.concat(success.data.results)
      })
      this.isLoading = false
    },
    debounceSearchOnInput: debounce(function() {
      this.getEpisodesHandler()
    }, 200)
  },
  created: function() {
    this.getEpisodesHandler()
  }
}
</script>
