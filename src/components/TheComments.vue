<template>
  <section class="comments">
    <form @submit.prevent="$emit('submitCommentEvent', { author, content })" class="comments__form">
      <textarea v-model="content" placeholder="Your comment here"></textarea>
      <div class="comments__bar">
        <input v-model="author" type="text" placeholder="Username">
        <button type="submit">
          <PlusIcon />
        </button>
      </div>
    </form>
    <div v-for="comment in comments" :key="comment.id">
      <GenericCommentItem
        :author="comment.author"
        :content="comment.content"
        :createdAt="comment.created"
      />
    </div>
  </section>
</template>

<script>
  import PlusIcon from '../assets/icon-add.svg'
  import GenericCommentItem from '../components/GenericCommentItem'

  export default {
    props: {
      comments: {
        type: Array,
        default: []
      }
    },
    components: {
      PlusIcon,
      GenericCommentItem
    },
    data() {
      return {
        author: '',
        content: ''
      }
    },
    methods: {

    }
  }
</script>
