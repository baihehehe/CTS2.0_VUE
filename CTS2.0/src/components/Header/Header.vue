<template>
  <header class="box-head">
    <div class="skiing-back fl">
      <i class="skiing-logobox-i fr">
        <img src="/static/img/bxlogo_1.png" @click="$router.replace('/msite')"/>
      </i>
    </div>
    <div class="skiing-logobox fr">
      <span class="skiing-logobox-span fl">中国大众滑雪技术网</span>
      <span class="skiing-logobox-span test fl">CHINA TECHNICAL SKI</span>
    </div>
  </header>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  .box-head
    position:fixed
    top 0
    left 0
    z-index 1000
    width 100%
    height 49px
    background #02aff0
    box-shadow 2px 7px 13px -2px gray
    .skiing-back
      width 55px
      height 49px
      line-height 49px
      margin-left 14px
      a
        display block
        font-size 13px
        color #fff
    .skiing-back-btn
      display block
      width 10px
      height 12px
      margin-right 5px
      margin-top 19px
      background-position 0 -793px
      background-size 50px auto
    .skiing-logobox
      width 195px
      height 49px
      margin-right 14px
    .skiing-logobox-span
      width 145px
      height 21px
      font-size 12px
      color #ffffff
      position absolute
      left 50px
      top 15px
      float left
    .test
      top 30px
    .skiing-logobox-i
      display block
      width 31px
      height 46px
      overflow hidden
      img
        width 100%
        height 100%
</style>
