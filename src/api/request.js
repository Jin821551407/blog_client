import axios from "axios";
import showMessage from "@/utils/showMessage";

//创建axios实例
const ins = axios.create();
//添加请求拦截器
ins.interceptors.request.use(function (config) {
  console.log(config, 'config')
  config.url = 'http://39.105.222.196:3001' + config.url
  config.headers['Access-Control-Allow-Origin'] = 'http://39.105.222.196:3001'
  return config
})

//添加响应拦截器
ins.interceptors.response.use(function (res) {
  if (res.data.code !== 0) {
    showMessage({
      content: JSON.parse(res.data).msg,
      type: "error",
    });
    return null;
  }
  return res.data.data;
});

export default ins;
