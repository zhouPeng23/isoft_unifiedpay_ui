// 所有界面的跨站请求在此统一管理，统一为POST请求
import {POST} from './POST'
const baseUrl = '/wechatPayApi';

export const QueryOrder = (params) => POST(baseUrl+'/QueryOrder',params);


