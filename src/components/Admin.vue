<template>
  <div class="admin">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script>
export default {
  name: 'admin',
  data () {
    return {
      msg: 'Welcome to Your Admin Page'
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
