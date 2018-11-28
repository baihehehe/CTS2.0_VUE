<template>
    <div class="web-body">
      <Header/>
      <div>
        <div class="binding-mobile">
          <div class="big-logo">
            <img src="/static/img/big-logo_1.png" alt="" @click="$router.replace('/msite')">
            <p>中国大众滑雪技术网</p>
          </div>
          <div class="binding denglu">
            <div class="binding-bg"></div>
            <div class="binding-content">
              <p>注册
              </p>
              <div class="form-ynn">
                <div class="ynn_input">
                  <input type="tel" class="phone" maxlength="11" autocomplete="off" placeholder="请输入您的手机号"
                         onfocus="this.placeholder=''" onblur="this.placeholder=`请输入您的手机号`" v-model="phone">
                  <div class="em-wp" v-show="!this.isPhone">{{this.alertPhone}}</div>
                </div>
                <div class="ynn_input">
                  <input type="password" placeholder="请设置密码"
                         onfocus="this.placeholder=''" onblur="this.placeholder=`请设置密码`" v-model="password">
                  <em class="em-wp pwd" v-show="!this.isPwd">{{this.alertPwd}}</em>
                </div>
                <div class="ynn_input">
                  <input type="password" class="confirmPassword" placeholder="请再次设置密码"
                         onfocus="this.placeholder=''" onblur="this.placeholder=`请再次设置密码`" v-model="pwd">
                  <em class="em-wp sms" v-show="this.password !== this.pwd">{{this.alertPassword}}</em>
                </div>
                <div class="captcha_ynn">
                  <div class="fl">
                    <input type="text" class="yanzm db" autocomplete="off" placeholder="请输入验证码" v-model="smsCode"
                           onfocus="this.placeholder=''" onblur="this.placeholder=`请输入验证码`"/>
                    <em class="em-wp em-fl" v-show="!this.smsCode">{{this.alertCode}}</em>
                  </div>
                  <button :disabled="times > 0 || !isPhone" class="fl ValidateCode"
                          @click.prevent="getValidateCode">{{times > 0 ? `已发送${times}s`:'获取验证码'}}</button>
                </div>
                <button class="bind-btn" @click="getRegister">注&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;册</button>
                <Modal
                  v-model="modal10"
                  class-name="vertical-center-modal" style="text-align: center;">
                  <p style="font-size: 18px;margin-top: 35px;color: #000000">{{this.alertRegister}}</p>
                </Modal>
                <p class="dl cl">
                  已有账号？现在<a class="red" href="javascript: ;" @click="$router.replace('/')">登录</a>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
  import Header from '../../components/Header/Header'
  import {Toast,MessageBox} from 'mint-ui'
  import {sendCode,reqRegister} from '../../api/ajax'
    export default {
        data() {
            return {
              times: 0, //倒计时初始值
              smsCode: '',  //验证码初始值为空
              phone: '',  //手机号初始值
              password: '', //密码初始值
              pwd: '', //再次设置密码初始值
              showEm: false, //是否显示错误提示
              alertPhone: '', //错误信息提示语
              alertPwd: '',
              alertPassword: '',
              alertCode: '',
              registerFrom: '',  //注册来源初始值
              modal10: false, //遮罩层是否显示
              alertRegister: '', //遮罩层内容
            }
        },
      computed: {

        isPhone () {
          return /^[1][3-8]\d{9}$|^([5|6|9])\d{7}$|^[0][9]\d{8}$|^[6]([8|6])\d{5}$/.test(this.phone)
        },
        isPwd () {
          let length = this.password.length
          return length >= 6 && length <= 20
        }
      },

        methods: {

          /*判断设备类型*/
          _isMobile() {
            let flag = navigator.userAgent.match(/(phone|pad|pod|iPhone|iPod|ios|iPad|Android|Mobile|BlackBerry|IEMobile|MQQBrowser|JUC|Fennec|wOSBrowser|BrowserNG|WebOS|Symbian|Windows Phone)/i);
            return flag
          },

          async getValidateCode () {
            this.times = 30
            const intervalId = setInterval(() => {

              if (this.times === 0) {
                clearInterval(intervalId)
                return
              }
              this.times--
            },1000)
            //发送验证码
            let result = await sendCode(this.phone)
            if (result.flag === 1){
                this.alertText = '发送成功'
                return
            }
          },

          /*注册用户*/
          async getRegister () {

            let result = null;
            const {phone,pwd,smsCode,password} = this
            if (this._isMobile()) {
              //console.log("检验各项数据wap")
              if (!this.isPhone) {

                return Toast('手机号错误')

              } if(password.length > 20) {

                return Toast('密码长度超过20')

              }if(password.length < 6) {

                return Toast('密码不能少于6位')

              } if(password !== pwd) {

                return Toast('两次密码不一致')

              }else if (!/^\d{4}$/gi.test(smsCode)) {

                return Toast('验证码错误')
              }
              /*wap端注册*/
              this.registerFrom = WAP
              result = await reqRegister({phone,password,smsCode,registerFrom:this.registerFrom})
              if (result.success){
                Toast(result.message)
                this.$router.replace('/msite')
                return
              } else {
                Toast(result.message)
                return
              }

            } else {
              //console.log("检验各项数据web")
              if (!this.isPhone) {
                return this.alertPhone = '手机号错误'

              } if(password.length > 20) {
                return this.alertPwd = '密码长度超过20'

              }if(password.length < 6) {
                return this.alertPwd = '密码不能少于6位'

              } if(password !== pwd) {
                return this.alertPassword = '两次密码不一致'

              }else if (!(/^\d{6}$/gi.test(smsCode))) {

                return this.alertCode = '验证码错误'
              }

              this.registerFrom = WEB
              result = await reqRegister({phone,password,smsCode,registerFrom:this.registerFrom})
              if (result.success){
                this.alertRegister = result.message;
                this.modal10 = true;
                this.$router.replace('/msite')
                return
              } else {

                this.alertRegister = result.message
                return
              }
            }
          }

        },
        components: {
          Header
        }
    }
</script>

<style lang="stylus" rel="stylesheet/stylus" scoped>
  @media screen and (min-width: 980px)
    Header
      display none
    Footer
      display none
    .web-body
      width 100%
      height 100%
      position fixed
      background url(/static/img/bg3.jpg) no-repeat
      background-size 100% 100%
      margin 0
      padding 0
    /*web端注册页面*/
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
          height 108%
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
          .input_ynn
            margin-bottom 30px
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
          .confirmPassword
            margin-top 10px
          .ValidateCode
            width 120px
            height 40px
            position absolute
            top 10px
            left 172px
            padding-bottom 42px
          input[type="password"]
            width 315px
            height 44px
            margin-top 10px
          code
            width 171px
            height 44px
          .check
            margin 0
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
            bottom -17px
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

  @media (max-width: 979.9px) and (min-width: 420px)
    /*wap端中屏注册样式*/
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
          .confirmPassword
            margin-top 20px
          .yanzm
            width 110%
            height 44px
            border 1px solid #BFBFBF
            margin-top 20px
          .ValidateCode
            width 80%
            height 40px
            position absolute
            top 35%
            left 116%
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
    /*wap端小屏注册样式*/
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
          left 7%
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
          .confirmPassword
            margin-top 20px
          .yanzm
            width 110%
            height 44px
            border 1px solid #BFBFBF
            margin-top 20px
          .ValidateCode
            width 120px
            height 40px
            position absolute
            top 33%
            left 116%
          input[type="password"]
            width 200%
            height 44px
            margin-bottom 10px
            border 1px solid #BFBFBF
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
