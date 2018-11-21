<template>
    <div class="web-body">
      <!--web端登录页面-->
      <div class="binding-mobile">
        <div class="big-logo">
          <img src="/static/img/big-logo.png" alt="">
        </div>
        <div class="binding denglu">
          <div class="binding-bg"></div>
          <div class="binding-content">
            <p>登录
            </p>
            <form id="loginForm">
              <div><input type="text" class="phone" autocomplete="off" placeholder="请输入您的手机号"><em class="em-wp"></em></div>
              <div><input type="password" placeholder="请输入密码"><em class="em-wp"></em></div>
              <div class="captcha_ynn">
                <p class="fl">
                  <input type="text" class="yanzm db" autocomplete="off" placeholder="验证码"/>
                </p>
                <img src="/static/img/captcha.svg" class="captcha"/>
              </div>
              <button class="bind-btn">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
              <p class="dl mt20">
                <label class="fl"><input name="rememberMe" type="checkbox" class="check">30天内免登陆</label>
                <a class="fr red" href="javascript: ;">忘记密码?</a>
              </p>
              <p class="dl cl">
                没有账号？现在<a class="red" href="javascript: ;" @click="$router.replace('/register')">注册</a>
              </p>
            </form>
          </div>
        </div>
      </div>
      <div>
        <Header/>
        <!--warp端中屏登录页面-->
        <div class="warp-login">
          <section class="box-con">
            <div class="binding denglu">
              <div class="binding-bg"></div>
              <div class="binding-content">
                <p>登录
                </p>
                <form>
                  <div><input type="text" class="phone" autocomplete="off" placeholder="请输入您的手机号"><em class="em-wp"></em></div>
                  <div><input type="password" placeholder="请输入密码"><em class="em-wp"></em></div>
                  <div class="captcha_ynn">
                    <p class="fl">
                      <input type="text" class="yanzm db" autocomplete="off" placeholder="验证码"/>
                    </p>
                    <img src="/static/img/captcha.svg" class="captcha"/>
                  </div>
                  <button class="bind-btn">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
                  <p class="dl mt20">
                    <label class="fl"><input name="rememberMe" type="checkbox" class="check">30天内免登陆</label>
                    <a class="fr red" href="javascript: ;">忘记密码?</a>
                  </p>
                  <p class="dl cl">
                    没有账号？现在<a class="red" href="javascript: ;" @click="$router.replace('/register')">注册</a>
                  </p>
                </form>
              </div>
            </div>
          </section>
        </div>
        <!--warp端小屏登录页面-->
        <div class="smallWarp-login">
          <section class="box-con">
            <div class="binding denglu">
              <div class="binding-bg"></div>
              <div class="binding-content">
                <p>登录
                </p>
                <form>
                  <div><input type="text" class="phone" autocomplete="off" placeholder="请输入您的手机号"><em class="em-wp"></em></div>
                  <div><input type="password" placeholder="请输入密码"><em class="em-wp"></em></div>
                  <div class="captcha_ynn">
                    <p class="fl">
                      <input type="text" class="yanzm db" autocomplete="off" placeholder="验证码"/>
                    </p>
                    <img src="/static/img/captcha.svg" class="captcha"/>
                  </div>
                  <button class="bind-btn">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
                  <p class="dl mt20">
                    <label class="fl"><input name="rememberMe" type="checkbox" class="check">30天内免登陆</label>
                    <a class="fr red" href="javascript: ;">忘记密码?</a>
                  </p>
                  <p class="dl cl">
                    没有账号？现在<a class="red" href="javascript: ;" @click="$router.replace('/register')">注册</a>
                  </p>
                </form>
              </div>
            </div>
          </section>
        </div>
        <Footer/>
      </div>
    </div>
</template>

<script>
  import Header from '../../components/Header/Header'
  import Footer from '../../components/Footer/Footer'
    export default {
        data() {
            return {

            }
        },
      components: {
        Footer,
        Header
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @media screen and (min-width: 769px)
    .warp-login
      display none
    .smallWarp-login
      display none
    Header
      display: none
    Footer
      display none
    /*web端登录页面*/
    .web-body
      width 100%
      height 100%
      position fixed
      background url(/static/img/bg3.jpg) no-repeat
      background-size 100% 100%
      margin 0
      padding 0
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
          .yanzm
            width 171px
            height 44px
          .captcha
            width 120px
            height 40px
            position absolute
            top 20px
            left 180px
            background-color #fff
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

  @media (max-width: 768.9px) and (min-width: 420px)
    .binding-mobile
      display none
    .smallWarp-login
      display none
    /*warp端中屏登录页面*/
    .warp-login
      width 100%
      height 100%
      position relative
      .box-con
        width 100%
        height 430px
        overflow hidden
        padding-top 49px
        min-height 333px
        display flex
        justify-content center
        align-items center
        .binding
          width 50%
          height 100%
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
              line-height 40px
            input
              border none
              font-size 14px
              color #000
              text-indent 25px
              border-radius 5px
              font-family "微软雅黑"
            .captcha_ynn
              position relative
              .fl
                border 1px solid #BFBFBF
                width 303px
                height 47px
                margin-bottom 10px
                border-radius 5px
            .phone
              width: 303px
              height 44px
              margin-bottom 10px
              border 1px solid #BFBFBF
            .yanzm
              width 171px
              height 44px
            .captcha
              width 120px
              height 40px
              position absolute
              top 1px
              left 180px
              background-color #fff
            input[type="password"]
              width 303px
              height 44px
              margin-bottom 10px
              border 1px solid #BFBFBF
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
              line-height 10px
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

  @media screen and (max-width: 419.9px)
    .warp-login
      display none
    .binding-mobile
      display none
    /*warp端小屏登录页面*/
    .smallWarp-login
      width 100%
      height 100%
      position relative
      .box-con
        width 100%
        height 575px
        overflow hidden
        padding-top 49px
        min-height 333px
        display flex
        justify-content center
        align-items center
        .binding
          width 100%
          height 100%
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
              line-height 40px
            input
              border none
              font-size 14px
              color #000
              text-indent 25px
              border-radius 5px
              font-family "微软雅黑"
            .captcha_ynn
              position relative
              .fl
                border 1px solid #BFBFBF
                width 303px
                height 47px
                margin-bottom 10px
                border-radius 5px
            .phone
              width: 303px
              height 44px
              margin-bottom 10px
              border 1px solid #BFBFBF
            .yanzm
              width 171px
              height 44px
            .captcha
              width 120px
              height 40px
              position absolute
              top 1px
              left 180px
              background-color #fff
            input[type="password"]
              width 303px
              height 44px
              margin-bottom 10px
              border 1px solid #BFBFBF
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
              line-height 10px
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
