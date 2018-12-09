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
          <div v-for="character in episodeCharacters" :key="character.id">
            <GenericCharacterItem
              :name="character.name"
              :imageSrc="character.image"
              :species="character.species"
              :originLocation="character.origin.name"
            />
          </div>

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
import GenericCharacterItem from '../components/GenericCharacterItem'
import { getEpisode } from '../modules/Episode'
import { getMultipleCharacters } from '../modules/Character'

export default {
  components: {
    ArrowIcon,
    GenericEpisodeItem,
    GenericCharacterItem
  },
  props: {
    id: {
      type: [Number, String],
      required: true
    }
  },
  data() {
    return {
      name: '',
      episode: '',
      airDate: '',
      withEpisodeInfo: true,
      charactersLinks: [],
      episodeCharacters: []
    }
  },
  computed: {
    getCharactersIds() {
      return this.charactersLinks.map(characterLink => {
        const lastSlashIndex = characterLink.lastIndexOf('/') + 1
        return characterLink.substring(lastSlashIndex)
      })
    }
  },
  methods: {
    getEpisodeHandler() {
      return getEpisode(this.id).then(success => {
        this.name = success.data.name
        this.episode = success.data.episode
        this.airDate = success.data.air_date
        this.charactersLinks = success.data.characters
      })
    },
    getCharactersHandler() {
      getMultipleCharacters(this.getCharactersIds.join(',')).then(success => {
        this.episodeCharacters = success.data
      })
    }
  },
  created: function() {
    this.getEpisodeHandler().then(() => {
      this.getCharactersHandler()
    })
  }
}
</script>
