import React, { Component } from 'react';
import './index.css'
import Logo from '../../assets/images/logo.png'
import { Menu } from 'antd';
import {
  AppstoreOutlined,
  HomeOutlined,
  PieChartOutlined,
  DesktopOutlined,
  ContainerOutlined,
  BarsOutlined,
  DatabaseOutlined,
  BarChartOutlined,
  LineChartOutlined,
  AreaChartOutlined,
} from '@ant-design/icons';
import { Link ,withRouter} from 'react-router-dom';




const { SubMenu } = Menu;
class LeftNav extends Component {
  constructor(props){
    super(props)
    this.state = {
      collapsed: false,
    };
  
    
  }
  toggleCollapsed = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };
  render() {
   const path=this.props.location.pathname
    return (
      <div className='left-nav' >
        
        <Link  to='/' className='left-nav-header'>
          <img src={Logo} alt="logo"/>
          <h1>硅谷后台</h1>
        </Link>
        <Menu
          selectedKeys={[path]}
         
          mode="inline"
          theme="dark" 
          inlineCollapsed={this.state.collapsed}
        >
          <Menu.Item key="/home" icon={<HomeOutlined />}>
            <Link to='/home'>首页</Link>
          </Menu.Item>
          <SubMenu key="sub1" icon={<AppstoreOutlined />} title="商品">
            <Menu.Item key="/category" icon={<BarsOutlined />}>
              <Link to='/category'> 品类管理</Link>
              </Menu.Item>
            <Menu.Item key="/product" icon={<DatabaseOutlined />}>
              <Link to='/product'> 商品管理 </Link>
              </Menu.Item>
          </SubMenu>
          <Menu.Item key="/user" icon={<DesktopOutlined />}>
          <Link to='/user'>用户管理</Link> 
          </Menu.Item>
          <Menu.Item key="/role" icon={<ContainerOutlined />}>
           <Link to='/role'>角色管理</Link> 
          </Menu.Item>
          
          <SubMenu key="sub2" icon={<AreaChartOutlined />} title="图形图表">
            <Menu.Item key="/charts/bar" icon={<BarChartOutlined />}>
              <Link to='/charts/bar'>柱形图</Link> 
              </Menu.Item>
            <Menu.Item key="/charts/line" icon={<LineChartOutlined />}>
            <Link to='/charts/line'>折线图</Link> 
              </Menu.Item>
            <Menu.Item key="/charts/pie" icon={<PieChartOutlined />}>
             <Link to='/charts/pie'> 饼图 </Link> 
              </Menu.Item>
           
          </SubMenu>
        </Menu>
      </div>
    );
  }
}

export default withRouter(LeftNav) ;