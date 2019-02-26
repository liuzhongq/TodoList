<template>
  <li @click="handleDelete">{{content}}</li>
</template>

<script>
export default {
  props: ['content'],
  methods: {
    handleDelete (index) {
      this.$emit('delete', this.index)
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
