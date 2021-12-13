import axios from 'axios'

export function request(config) {
  const instance = axios.create({
    baseURL: 'http://152.136.185.210:7878/api/hy66',
    timeout: 5000
  })

  // axios拦截器
  instance.interceptors.request.use(config => {
    // config中的一些信息不符合服务器要求
    console.log(config);
    // 发送网络请求时希望在界面中显示一个图标 show() disappear()
    // 某些网络请求比如登录必须写代一些特殊的信息
    return config
  }, err => {
    console.log(err);
  });

  // 响应拦截
  instance.interceptors.response.use(res => {
    return res.data
  }, err => {
    console.log(err);
  });

  // 发送网络请求
  return instance(config)
}
