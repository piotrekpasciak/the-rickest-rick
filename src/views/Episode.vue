<template>
  <div>
    <h1>Episode</h1>

    <a href="/" class="go-back-link">
      <ArrowIcon />
      Search results
    </a>

    <div class="episode__content">
      <div class="episode__left-col">
        <GenericEpisodeItem
          v-bind:name="name"
          v-bind:episode="episode"
          v-bind:airDate="airDate"
          v-bind:withEpisodeInfo="withEpisodeInfo"
        />

        <h2>Characters</h2>

        <div class="characters-list">
            <!-- Character Items -->

          <div class="link-container">
            <button class="primary-link is-big">
              Show more
            </button>
          </div>
        </div>
      </div>

      <div class="episode__right-col">
        <h2>Comments</h2>
        <!-- Comments -->
      </div>
    </div>
  </div>
</template>

<script>
import ArrowIcon from '../assets/icon-arrow-left.svg'
import GenericEpisodeItem from '../components/GenericEpisodeItem'
import { getEpisode } from '../modules/Episode'

export default {
  components: {
    ArrowIcon,
    GenericEpisodeItem
  },
  props: {
    id: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      name: '',
      episode: '',
      airDate: '',
      withEpisodeInfo: true
    }
  },
  methods: {
    getEpisodeHandler() {
      getEpisode(this.id).then(success => {
        this.name = success.data.name
        this.episode = success.data.episode
        this.airDate = success.data.air_date
      })
    }
  },
  created: function() {
    this.getEpisodeHandler()
  }
}
</script>
