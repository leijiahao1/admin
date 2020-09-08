//包干所有接口请求函数的模块
import ajax from './ajax'
// export function reqLogin() {
// ajax('/login',{username,password},'POST')

// }
const BASE=''
export const reqLogin=(username,password)=>ajax(BASE+'/login',{username,password},'POST')
export const reqAddUser=(user)=>ajax(BASE+'/manage/user/add',user,'POST') 