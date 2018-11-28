<template>
    <div class="web-body">
      <Header/>
      <div class="warp-login">
        <div class="binding-mobile" >
          <div class="big-logo">
            <img src="/static/img/big-logo_1.png" alt="" @click="$router.replace('/msite')">
            <p>中国大众滑雪技术网</p>
          </div>
          <div class="binding denglu">
            <div class="binding-bg"></div>
            <div class="binding-content">
              <p>登录
              </p>
              <div class="form-ynn">
                <div><input type="tel" class="phone" maxlength="11" autocomplete="off" placeholder="请输入您的手机号" v-model="username"
                            onfocus="this.placeholder=''" onblur="this.placeholder=`请输入您的手机号`">
                  <div class="em-wp" v-show="!this.username">{{this.alertPhone}}</div>
                </div>
                <div><input type="password" placeholder="请输入密码" v-model="password"
                            onfocus="this.placeholder=''" onblur="this.placeholder=`请输入密码`">
                  <em class="em-wp pwd" v-show="!this.password">{{this.alertPwd}}</em>
                </div>
                <div class="captcha_ynn">
                    <input type="text" class="yanzm" autocomplete="off" placeholder="验证码"
                           onfocus="this.placeholder=''" onblur="this.placeholder=`验证码`" v-model="captcha"/>
                    <img ref="captcha" src="http://192.168.101.123:8080/captcha" class="captcha" @click="getCaptchaCode"/>
                  <em class="em-wp em-fl">{{this.alertCode}}</em>
                </div>
                <button class="bind-btn" @click="login">登&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;录</button>
                <Modal
                  v-model="modal10"
                  class-name="vertical-center-modal" style="text-align: center;">
                  <p style="font-size: 18px;margin-top: 35px;color: #000000">登录成功</p>
                </Modal>
                <p class="dl">
                  <label class="fl"><input type="checkbox" class="check">30天内自动登录</label>
                  <a class="fr red" href="javascript: ;">忘记密码?</a>
                </p>
                <p class="dl cl">
                  没有账号？现在<a class="red" href="javascript: ;" @click="$router.replace('/register')">注册</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import {Toast} from 'mint-ui'
  import {reqLoginin} from '../../api/ajax'
  import {bassPath} from '../../assets/reset/reset'
  import Header from '../../components/Header/Header'
    export default {
        data() {
            return {
              alertPhone: '', //错误语句初始值
              alertPwd: '',
              alertCode: '',
              captcha: '',  //图片验证码
              username: '', //手机号初始值
              password: '', //密码初始值
              modal10: false, //遮罩层是否显示
            }
        },

      methods: {

        /*判断设备类型*/
        _isMobile() {
          let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
          return flag;
        },

        //获取验证码
        getCaptchaCode () {
          this.$refs.captcha.src = bassPath + 'captcha?time='+new Date().getTime()
        },

        //发送登录信息
       async login () {

          let result = null;
         const {username,password,captcha} = this;
          if (this._isMobile()){
            console.log('wap端');
            if(!username) {

              return Toast('手机号错误')

            } else if (!password) {

              return Toast('密码错误')

            } else if (!/^.{4}$/.test(captcha)) {

              return Toast('验证码错误')
            }

            // 发登陆的请求
            result = await reqLoginin({username, password, captcha})
            if (result.success){
              /*成功*/
              Toast(result.message)
              this.$router.replace('/msite')
              return
            }else {
              /*失败*/
              Toast(result.message)
              return
            }

          } else {

            if (!username) {

              this.alertPhone = '手机号错误'
              return
            } if (!password) {

              this.alertPwd = '密码错误'
              return
            }else if (!/^.{4}$/.test(captcha)) {

              this.alertCode = '验证码错误'
              return
            }
            /*web端登录成功*/
            result = await reqLoginin ({username,password,captcha})

            if (result.success){

              this.modal10 = true
              this.$router.replace('/msite')
              return
            }else {

              this.alertCode = result.message
              return
            }

          }

         /*请求成功刷新验证码*/
         this.getCaptchaCode()
        }
      },
      components: {
        Header
      }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @media screen and (min-width: 980px)
    header
      display none
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
      margin 45px auto 60px
      .big-logo
        text-align center
        line-height 35px
        p
          font-size 35px
          font-weight bold
          color #fff
      div
        float: left
      .binding
        width 365px
        height 440px
        margin 60px 0 0 135px
        position relative
        .zhuce
          height 408px
          margin 62px 0 0 165px
        .denglu
          height 440px
          margin-top 60px
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
            margin-bottom 20px
          .captcha_ynn
            position relative
            margin-bottom 10px
          .phone
            width: 315px
            height 44px
          .yanzm
            width 171px
            height 44px
            margin-top 10px
          .captcha
            width 120px
            height 40px
            position absolute
            top 10px
            left 180px
            background-color #fff
          input[type="password"]
            width 315px
            height 44px
            margin-top 10px
          code
            width 171px
            height 44px
          .check
            margin 0
            vertical-align middle
          .em-wp
            font-size 12px
            color red
            position absolute
            top 110px
            left 27px
            display inline-block
            font-style normal
          .pwd
            top 186px
          .sms
            top 258px
          .em-fl
            position absolute
            top 60px
            left 5px
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
        .form-ynn
          .dl
            font-size 12px
            height 30px
            line-height 30px
            position relative
            label
              font-size: 13px
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

  @media (max-width: 979.9px) and (min-width: 667px)
    /*wap端中屏登录样式*/
    .binding-mobile
      max-width 568px
      height 510px
      margin 97px auto -67px
      div
        float: left
      .big-logo
        display none
      .binding
        width 60%
        height 440px
        position relative
        .zhuce
          height 408px
          margin 62px 0 0 165px
        .denglu
          height 440px
          margin-top 60px
        .binding-bg
          width 100%
          height 100%
          background-color #fff
          opacity 0.5
        .binding-content
          position absolute
          top 0
          left 35%
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
            line-height 20px
            padding 16px 0
          .captcha_ynn
            position relative
            margin-bottom 30px
          .phone
            width: 200%
            height 44px
            margin-bottom 30px
            border 1px solid #BFBFBF
          .yanzm
            width 110%
            height 44px
            border 1px solid #BFBFBF
            margin-top 20px
          .captcha
            width 80%
            height 40px
            position absolute
            top 35%
            left 123%
            background-color #fff
          input[type="password"]
            width 200%
            height 44px
            margin-bottom 10px
            border 1px solid #BFBFBF
          code
            width 110%
            height 44px
          .check
            margin 0
            vertical-align middle
          .em-wp
            font-size 12px
            color red
            position absolute
            top 110px
            left 27px
            display inline-block
            font-style normal
          .pwd
            top 186px
          .sms
            top 258px
          .em-fl
            position absolute
            top 60px
            left 5px
          button
            width 80%
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
            width 190%
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
        .form-ynn
          .dl
            font-size 12px
            height 30px
            line-height 30px
            position relative
            label
              font-size: 13px
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
  @media screen and (max-width: 666.9px)
    /*wap端小屏登录样式*/
    .binding-mobile
      max-width 568px
      height 510px
      margin 97px auto 60px
      div
        float: left
      .big-logo
        display none
      .binding
        max-width 10%
        height 440px
        position relative
        .binding-bg
          width 100%
          height 100%
          background-color #fff
          opacity 0.5
        .binding-content
          position absolute
          top 0
          left 50%
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
            line-height 20px
            padding 16px 0
          .captcha_ynn
            position relative
            margin-bottom 30px
          .phone
            width: 200%
            height 44px
            margin-bottom 30px
            border 1px solid #BFBFBF
          .yanzm
            width 110%
            height 44px
            border 1px solid #BFBFBF
            margin-top 20px
          .captcha
            width 80%
            height 40px
            position absolute
            top 33%
            left 116%
            background-color #fff
          input[type="password"]
            width 200%
            height 44px
            margin-bottom 10px
            border 1px solid #BFBFBF
          code
            width 110%
            height 44px
          .check
            margin 0
            vertical-align middle
          .em-wp
            font-size 12px
            color red
            position absolute
            top 110px
            left 27px
            display inline-block
            font-style normal
          .pwd
            top 186px
          .sms
            top 258px
          .em-fl
            position absolute
            top 60px
            left 5px
          button
            width 80%
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
        .form-ynn
          .dl
            font-size 12px
            height 30px
            line-height 30px
            position relative
            label
              font-size: 13px
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
