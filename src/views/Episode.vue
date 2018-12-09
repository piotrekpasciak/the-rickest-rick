<template>
  <div>
    <p>Episode page no. {{ episodeId }}</p>
  </div>
</template>

<script>
import GenericEpisodeItem from '../components/GenericEpisodeItem'

export default {
  components: {
    GenericEpisodeItem
  },
  data() {
    return {
      episodeId: null
    }
  },
  created: function() {
    this.episodeId = this.$route.params.id
  }
}
</script>
