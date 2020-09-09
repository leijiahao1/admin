import React from 'react'
import {Redirect} from 'react-router-dom'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'
const {  Footer, Sider, Content } = Layout;

// import { Layout } from 'antd';
// 登录路由组件
export default class Admin extends React.Component {
  
  render() {
    const user=window.localStorage.getItem('isLogin')
    
    if(user==='') {
      // 自动跳转到登陆(在render()中)
      return <Redirect to='/login'/>
    }else if(Number(user)!==0){
      return <Redirect to='/login'/>
    }if(user===null){
      return <Redirect to='/login'/>
    }
    console.log(user)
    return (
      <Layout style={{height:'100%'}}>
      <Sider>
        <LeftNav/>
      </Sider>
      <Layout>
        <Header>Header</Header>
        <Content>Content</Content>
        <Footer style={{textAlign:'center',color:'#ccc'}}>推荐使用谷歌浏览器,可获得更佳页面操作体验</Footer>
      </Layout>
    </Layout>
    )}
    

  }




  

