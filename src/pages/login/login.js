import React, { Component } from 'react'
import './login.css'
import logo from './images/logo.png'
import { Form, Input, Button,} from 'antd';
import { UserOutlined, LockOutlined } from '@ant-design/icons';

const Item=Form.Item
// 登录路由组件
export default class Login extends Component {
  handleSubmit=(event)=>{
    event.preventDefaule()
    this.props.form.validator((err,values)=>{
      if(!err){
        console.log('提交登录的ajax请求',values)
      }
    })
  }
  //密码验证
  validatorPwd=(rule,value)=>{
    if(!value){
      return Promise.reject('请输入密码')
    }else if(value.length<4){
      return Promise.reject('密码长度不小于4位')
    }else if(value.length>10){
      return Promise.reject('密码长度不超过10位')
    }else if(!/^[a-zA-Z0-9_]+$/.test(value)){
      return Promise.reject('密码必须是英文、数字组成')
    }else{
      return Promise.resolve();
    }
  }

  render() {

    
    return (



      <div className="login">
        <header className="login-header">
          <img src={logo} alt='logo'/>
          <h1>React项目:后台管理系统</h1>
        </header>
        <section className="login-content">
          <h2>用户登录</h2>
      
      
                  <Form
              name="normal_login"
              className="login-form"
              initialValues={{
                remember: true,
              }}
            
            >
              <Item
                name="username"
                rules={[
                  {
                    required: true,whitespace:true,
                    message: 'Please input your Username!', 
                  },
                  {
                    min:4,message:"用户名至少输入四位"
                  },
                  {
                    max:9,message:"用户名至多输入九位"
                  },
                 {pattern:/^[a-zA-Z0-9_]+$/,message:"用户名必须是英文、数字、下划线组成"},
                ]}
              >
                <Input prefix={<UserOutlined className="site-form-item-icon" />} placeholder="用户名" />
              </Item>
              <Item
                name="password"
                rules={[
                  {
                    validator:this.validatorPwd

                  }
                ]}
              >
                <Input
                  prefix={<LockOutlined className="site-form-item-icon" />}
                  type="password"
                  placeholder="密码"
                />
              </Item>
              

              <Item>
                <Button type="primary" htmlType="submit" className="login-form-button">
                登录
                </Button>
              
              </Item>
            </Form>
        </section>
      </div> 
    );
  }
}
