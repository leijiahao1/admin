import React, { Component } from 'react';
import './index.css'
import  {formateDate} from '../../utils/dateUtils'
import { reqWeather } from '../../api/index';
import { Modal, Button,} from 'antd';
import { ExclamationCircleOutlined } from '@ant-design/icons';

const { confirm } = Modal;
class Header extends Component {
  state={
    currentTime:formateDate(Date.now()), 
    dayPictureUrl:'',
    weather: '',
   
  }
 
  logout = () => {
    confirm({
      title: 'Do you Want to logout?',
      icon: <ExclamationCircleOutlined />,
      content: '你确定返回登陆页面吗?',
      onOk:()=> {
       window.history.go(0);
        sessionStorage.removeItem("isLogin")
      
      
      },
      onCancel() {
       
      },
    });
  }
  getTime=()=>{
    this.intervalId=setInterval(() => {
      const currentTime=formateDate(Date.now())
      this.setState({currentTime})
    }, 1000);
  }
  getWeather = async () => {
    // 调用接口请求异步获取数据
    const {dayPictureUrl, weather} = await reqWeather('北京')
    // 更新状态
    this.setState({dayPictureUrl, weather})
  }
  componentDidMount(){
   this.getTime()
   this.getWeather()
  }
  componentWillUnmount(){
    clearInterval(this.intervalId)
  }
  render() {
  const {currentTime,dayPictureUrl,weather}=this.state
  const user=window.sessionStorage.getItem('username')
    return (
      <div className='header'>
        <div className="header-top">
          <span>欢迎,{user}</span>
          {/* <a href="javascript" onClick={this.logout}>退出</a> */}
          <Button onClick={this.logout}>退出登录</Button>
          
          
        </div>
        <div className="header-bottom">
          <div className="header-bottom-left"></div>
          <div className="header-bottom-right">
            <span>{currentTime}</span>
            <img src={dayPictureUrl} alt="weather"/>
            <span>{weather}</span>
          </div>
        </div>
      </div>
    );
  }
}

export default Header;
