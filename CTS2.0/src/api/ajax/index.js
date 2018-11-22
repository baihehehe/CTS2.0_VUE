
import ajax from './ajax'

/*
* 获取图片验证码
* */
export const reqCaptcha = () => ajax('http://192.168.101.123:8080/captcha')
