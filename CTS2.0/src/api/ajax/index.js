
import ajax from './ajax'
import qs from 'qs'

//获取登录信息
export const reqLoginin = ({username,password,captcha}) => ajax('/api/apiLoginin',qs.stringify({username,password,captcha}),'POST')

//获取注册信息
export const reqRegister = ({phone,password,smsCode,registerFrom}) => ajax('/api/apiRegister',qs.stringify({phone,password,smsCode,registerFrom}),'POST')

//发送短信验证码
export const sendCode = phone => ajax('/api/register/getValidateCode',qs.stringify({phone}),'POST')

//退出
export const goLogin = () => ajax('/api/apiLogout')
