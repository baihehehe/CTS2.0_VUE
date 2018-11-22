<template>
  <footer class="box-foot">
    <ul class="box-foot-ul">
      <li>
        <p>版权所有</p>
        <p>永乐文化集团</p>　　
      </li>
      <li>
        <p>委员会电话</p>
        <p>010-65545832-8202<br/><a href="tel://4006-228-228">4006-228-228</a></p>　　
      </li>
      <li>
        <p>委员会邮箱</p>
        <p>bingxuejiahua<br/>@228.com.cn</p>　　
      </li>
    </ul>
  </footer>
</template>

<script>
    export default {
        data() {
            return {}
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @media screen and (max-width: 419.9px)
    .box-foot
      width 100%
      position fixed
      bottom 0
      height 16%
      /*overflow hidden*/
      background #02aff0
      color #fff
      .box-foot-ul
        overflow hidden
        padding-top 15px
        li
          float left
          width 33%
          text-align center
          font-size 12px
        &:last-child
          margin-right 0
          p
            margin-bottom 6px
            text-align center
            word-break break-all
            a
              color #fff
  @media (max-width: 768.9px) and (min-width: 420px)
    .box-foot
      width 100%
      bottom 0
      height 16%
      /*overflow hidden*/
      background #02aff0
      color #fff
      padding: 0px 0 50px 0;
      margin-top: 60px;
      .box-foot-ul
        overflow hidden
        padding-top 15px
        li
          float left
          width 33%
          text-align center
          font-size 12px
        &:last-child
          margin-right 0
          p
            margin-bottom 6px
            text-align center
            word-break break-all
            a
              color #fff
</style>
