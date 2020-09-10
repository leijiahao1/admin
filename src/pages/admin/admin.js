import React from 'react'
import {Redirect,Route,Switch} from 'react-router-dom'
import { Layout } from 'antd';
import LeftNav from '../../components/left-nav'
import Header from '../../components/header'

import Home from '../home/home'
import Category from '../category/category'
import Product from '../product/product'
import Role from '../role/role'
import User from '../user/user'
import Bar from '../charts/bar'
import Line from '../charts/line'
import Pie from '../charts/pie'
const {  Footer, Sider, Content } = Layout;

// import { Layout } from 'antd';
// 登录路由组件
export default class Admin extends React.Component {
  
  render() {
    const user=window.sessionStorage.getItem('isLogin')
    
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
        <Content style={{margin:20,backgroundColor:'#ccc'}} >
          <Switch>
            <Route path='/home' component={Home}/>
            <Route path='/category' component={Category}/>
            <Route path='/product' component={Product}/>
            <Route path='/role' component={Role}/>
            <Route path='/user' component={User}/>
            <Route path='/charts/bar' component={Bar}/>
            <Route path='/charts/line' component={Line}/>
            <Route path='/charts/pie' component={Pie}/>
            <Redirect to='/home' />
          </Switch>
        </Content>
        <Footer style={{textAlign:'center',color:'#ccc'}}>推荐使用谷歌浏览器,可获得更佳页面操作体验</Footer>
      </Layout>
    </Layout>
    )}
    

  }




  

