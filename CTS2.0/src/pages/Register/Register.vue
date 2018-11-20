<template>
    <div class="web-body">
      <div class="binding-mobile">
        <div class="big-logo">
          <img src="/static/img/big-logo.png" alt="">
        </div>
        <div class="binding denglu">
          <div class="binding-bg"></div>
          <div class="binding-content">
            <p>注册
            </p>
            <form id="loginForm">
              <div><input type="text" class="phone" name="username" value="" autocomplete="off" placeholder="请输入您的手机号"><em class="em-wp"></em></div>
              <div><input type="password" name="password" placeholder="请设置密码"><em class="em-wp"></em></div>
              <div>
                <input type="password" id="confirmPassword" class="confirmPassword" name="confirmPassword"  placeholder="请再次设置密码"><em></em>
              </div>
              <div class="captcha_ynn">
                <p class="fl">
                  <input type="text" class="yanzm db" name="captcha"
                         autocomplete="off" placeholder="请输入验证码" v-model="code"/>
                </p>
                <button :disabled="times > 0 || (!/^\d{6}$/.test(code))" class="fl ValidateCode"
                        @click.prevent="getValidateCode">{{times > 0 ? `已发送${times}s`:'获取验证码'}}</button>
              </div>
              <button class="bind-btn" @click="$router.replace('/index')">注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</button>
              <p class="dl cl">
                已有账号？现在<a class="red" href="javascript: ;" @click="$router.replace('/')">登录</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
    export default {
        data() {
            return {
              times: 0, //倒计时初始值
              code: ''  //验证码初始值为空
            }
        },

        methods: {
          getValidateCode () {
            this.times = 30
            const intervalId = setInterval(() => {

              if (this.times === 0) {
                clearInterval(intervalId)
                return
              }

              this.times--
            },1000)
          }
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
@media screen and (min-width: 980px)
  .web-body
    width 100%
    height 100%
    position fixed
    background url(/static/img/bg3.jpg) no-repeat
    background-size 100%
  .binding-mobile
    width 876px
    height 510px
    margin 97px auto 60px
    div
      float: left
  .binding
    width 365px
    height 440px
    margin 60px 0 0 165px
    position relative
    .binding-bg
      width 100%
      height 100%
      background-color #fff
      opacity 0.5
    .binding-content
      position absolute
      top 0
      left 0
      font-size 20px
      padding 0 25px
      p
        height 60px
        line-height 76px
      input
        border none
        font-size 14px
        color #000
        text-indent 25px
        border-radius 5px
        font-family "微软雅黑"
      .captcha_ynn
        position relative
        margin-bottom 30px
      .phone
        width: 315px
        height 44px
        margin-bottom 30px
      .confirmPassword
        margin-top 20px
      .yanzm
        width 171px
        height 44px
      .ValidateCode
        width 120px
        height 40px
        position absolute
        top 21px
        left 172px
      input[type="password"]
        width 315px
        height 44px
        margin-bottom 10px
      code
        width 171px
        height 44px
      .check
        margin 0
      button
        width 133px
        height 44px
        line-height 44px
        text-align center
        border none
        border-radius 5px
        margin-left 6px
        font-size 14px
        color #fff
        background-color #71B7E6
        font-family"微软雅黑"
      .bind-btn
        width 315px
        height 34px
        line-height 34px
        text-align center
        background-color #42a8ec
        border-radius 5px
        margin 0
    .tm-footer
      opacity .7
      position absolute
      bottom 0
      left 0
      width 100%
      .shezhimm
        .bind-btn
          background-color #71B7E6
    .binding
      .zhuce
        height 408px
        margin 62px 0 0 165px
      .denglu
        height 440px
        margin-top 60px
    .em-wp
      font-size 12px
      color red/* position: absolute; */
      bottom 6px
      left 0
    form
      .dl
        font-size 12px
        height 30px
        line-height 30px
        position relative
        label
          font-size: 14px
          margin-top 20px
        a
          color:#535353
        .fr
          float right
          margin-top 20px
        .red
          color red
        img
          position absolute
      .cl
        margin-top 20px

</style>
