<template>
  <div class="video">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'video',
  data () {
    return {
      msg: 'Welcome to Video Page'
    }
  }
}
</script>

<style scoped>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
