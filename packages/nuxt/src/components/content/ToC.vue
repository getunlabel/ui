<template lang='pug'>
aside
  h2 Table of Contents
  TntUITableOfContents(:toc='article.toc')
</template>

<script>
export default {
  props: [
    'article'
  ]
}
</script>

<style lang='postcss' scoped>
aside {
  @apply py-5;
}
</style>