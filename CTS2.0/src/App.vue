<template>
  <div class="app">
    <router-view/>
  </div>
</template>

<script>

  import Login from './pages/Login/Login'
export default {
  name: 'App',
  components: {
    Login
  }
}
</script>

<style lang="stylus" rel="stylesheet/stylus">

</style>
