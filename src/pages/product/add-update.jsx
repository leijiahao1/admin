import React, { Component } from 'react'
import {
  Card,
  Form,
  Input,
  Cascader,
  Button,
  
} from 'antd'
import {
  ArrowLeftOutlined,
} from '@ant-design/icons';
import FormItemLabel from 'antd/lib/form/FormItemLabel';


const formItemLayout = {
  labelCol: {
    span: 6,
  },
  wrapperCol: {
    span: 14,
  },
};
const {Item} = Form

export default class ProductAddUpdate extends Component {
  render() {
    const onFinish = values => {
      console.log('Success:', values);
    };
  
    const onFinishFailed = errorInfo => {
      console.log('Failed:', errorInfo);
    };
  


    const title=(
      <span>
        <Button size='small'><ArrowLeftOutlined /></Button>商品详情
      </span>
    )

    
    return (
      <div>
        <Card title={title} className='product-detail'>
          <Form  {...formItemLayout} style={{'width':'1000px'}}
           onFinish={onFinish}
           onFinishFailed={onFinishFailed}
          >
            <Form.Item label="商品名称"
             rules={[
              {
                required: true,
                
              }
            ]}>
              <Input placeholder='商品名称'
              label='商品名称' 
             /> 
            </Form.Item>
             
              <Form.Item  label="商品描述">
                  <Input.TextArea placeholder='请输入商品描述' autoSize/>
              </Form.Item>
              <Form.Item  label="商品价格">
              <Input placeholder='请输入商品价格'
              label='商品价格' type='number' suffix="RMB"
             />
              </Form.Item>
              <Form.Item  label="商品分类">
              <div>商品分类</div>
              </Form.Item>
              <Form.Item  label="商品图片">
              <div>商品图片</div>
              </Form.Item>
              <Form.Item  label="商品详情">
              <div>商品详情</div>
              </Form.Item>
              <Form.Item >
              <Button type='primary'>提交</Button>
              </Form.Item>
              
          </Form>
        </Card>
      </div>
    )
  }
}
