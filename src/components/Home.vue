<template>
  <div class="home">
    <h1>{{ msg }}</h1>
    <ul>
      <li><a href="/admin">admin</a></li>
      <li><a href="/video">video</a></li>
      <li><a href="/bi">bi</a></li>
    </ul>
  </div>
</template>

<script>
export default {
  name: 'home',
  data () {
    return {
      msg: 'please login',
      routerList: [
        'admin',
        'video',
        'bi'
      ]
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
