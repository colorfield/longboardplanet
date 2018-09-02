<template>
  <div class="wrapper content">
    <prismic-edit-button :documentId="documentId"/>
    <h1 class="title is-1">
      {{ $prismic.richTextAsPlain(fields.title) }}
    </h1>
    <prismic-rich-text :field="fields.description" class="description"/>
  </div>
</template>

<script>
  // @todo refactor in a generic component for Spot, Page, Trick, ...
  export default {
    name: 'Page',
    data () {
      return {
        documentId: '',
        fields: {
          title: null,
          description: null,
        }
      }
    },
    methods: {
      getContent (uid) {
        this.$prismic.client.getByUID('page', uid)
          .then((document) => {
            if (document) {
              this.documentId = document.id
              this.fields.title = document.data.title
              this.fields.description = document.data.description
            } else {
              this.$router.push({ name: 'not-found' })
            }
          })
      }
    },
    created () {
      this.getContent(this.$route.params.uid)
    },
    beforeRouteUpdate (to, from, next) {
      this.getContent(to.params.uid)
      next()
    }
  }
</script>

<style scoped>
</style>
