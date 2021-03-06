import React, { Component } from 'react'
import {
  Card,
  List,
} from 'antd'
import {
  ArrowLeftOutlined,
} from '@ant-design/icons';

const Item=List.Item
export default class ProductDetail extends Component {
  render() { 
    const title=(
      <span>
        <ArrowLeftOutlined /><span>商品详情</span>
      </span>
    )
    return (
      <div>
       <Card title={title} className='product-detail'>
         <List >
        
         <Item >
             <span className='left'>商品名称</span>
             <span>联想Thinkpad 翼480</span>
           </Item>
           <Item>
             <span className='left'>商品描述</span>
             <span>年度新品</span>
           </Item>
           <Item>
             <span className='left'>商品价格</span>
             <span>66000元</span>
           </Item>
           <Item>
             <span className='left'>所属分类</span>
             <span>电脑 笔记本</span>
           </Item>
           <Item>
             <span className='left'>商品图片</span>
             <span>
               <img src="http://localhost:5000/upload/image-1554636776678.jpg" alt="img"/>
               <img src="http://localhost:5000/upload/image-1557738385383.jpg" alt="img"/>
             </span>
           </Item>
           
         </List>
       </Card>
      </div>
    )
  }
}
