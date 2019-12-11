// 所有POST请求在此发送
import axios from 'axios'
import Qs from 'qs'

/**
 * @return {string}
 */
export function POST(url, params) {
  var result = "2121";
  //统一去首尾空格
  var strings = Object.keys(params);
  var trimParams = {};
  for (let i in strings) {
    trimParams[strings[i]] = params[strings[i]].trim()
  }
  axios.post(url, Qs.stringify(trimParams))
    .then(res => {
      // console.log(res.data);
      result = res.data;
    })
    .catch(err => {
      alert(err);
    });
  return result;
}


