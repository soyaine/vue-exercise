<template>
  <div class="soyaine">
    <h1>Soyaine article</h1>
    <ul>
      <li v-for="item in list">
        {{ item }}
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'soyaine',
  data () {
    return {
      mag: 'soyaine',
      list: [
        '第一篇文章',
        '公众号的文章',
        '简书文章'
      ]
    }
  }
}
</script>

<style media="screen" scoped>

</style>
