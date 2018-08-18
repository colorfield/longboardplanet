<template>
    <div class="wrapper">
        <prismic-edit-button :documentId="documentId"/>
        <h1 class="title">
            {{ $prismic.richTextAsPlain(fields.title) }}
        </h1>
        <prismic-rich-text :field="fields.description" class="description"/>
        <div class="image-wrapper">
            <prismic-image :field="fields.icon" class="image"/>
        </div>
    </div>
</template>

<script>
  export default {
    name: 'Spot',
    data () {
      return {
        documentId: '',
        fields: {
          title: null,
          description: null,
          image: null
        }
      }
    },
    methods: {
      getContent (uid) {
        this.$prismic.client.getByUID('spot', uid)
          .then((document) => {
            if (document) {
              this.documentId = document.id
              this.fields.title = document.data.title
              this.fields.description = document.data.description
              this.fields.icon = document.data.image
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
    .wrapper {
        max-width: 820px;
        margin-left: auto;
        margin-right: auto;
        padding: 40px 10px;
        font-family: Avenir, "Helvetica Neue", Helvetica, Arial, sans-serif;
    }

    .title {
        font-size: 32px;
    }

    .description {
        margin-top: 40px;
    }

    .description h2 {
        font-size: 24px;
    }

    .description h2:not(:first-child) {
        margin-top: 20px;
    }

    .description p {
        line-height: 1.5;
    }

    .description p:not(:first-child) {
        margin-top: 10px;
    }

    .description a {
        color: #404e9f;
    }

    .description a:hover {
        text-decoration: underline;
    }

    .image-wrapper {
        margin-top: 40px;
    }

    .image {
        max-width: 100%;
    }
</style>