import React, { Component } from 'react';
import './category.css'
import {
  Card,
  Table,
  Button,
  Icon,
  message,
  Modal
} from 'antd'
import {reqCategorys, reqUpdateCategory, reqAddCategory} from '../../api'



class Category extends Component {
  state={
    categorys:[]//一级分类列表
  }
  // 初始化table所有列的数组
  initColumns = () => {
     this.columns = [
      {
        title: '分类的名称',
        dataIndex: 'name', // 显示数据对应的属性名
      },
      {
        title: '操作',
        width: 300,
        render: (category) => ( // 返回需要显示的界面标签
          <span>
            <Button onClick={() => this.showUpdate(category)}>修改分类</Button>
            {/*如何向事件回调函数传递参数: 先定义一个匿名函数, 在函数调用处理的函数并传入数据*/}
            {this.state.parentId==='0' ? <Button onClick={() => this.showSubCategorys(category)}>查看子分类</Button> : null}

          </span>
        )
      }
    ]
  }
  getCategorys = async (parentId) => {

    // 在发请求前, 显示loading
    this.setState({loading: true})
    parentId = parentId || this.state.parentId
    // 发异步ajax请求, 获取数据
    const result = await reqCategorys(parentId)
    // 在请求完成后, 隐藏loading
    this.setState({loading: false})

    if(result.status===0) {
      // 取出分类数组(可能是一级也可能二级的)
      const categorys = result.data
      if(parentId==='0') {
        // 更新一级分类状态
        this.setState({
          categorys
        })
        console.log('----', this.state.categorys.length)
      } else {
        // 更新二级分类状态
        this.setState({
          subCategorys: categorys
        })
      }
    } else {
      message.error('获取分类列表失败')
    }
  }
  componentWillMount(){//第一次render准备数据
    this.initColumns()
    } 
    //执行异步任务 发请求
  componentDidMount(){
    this.getCategorys()
  }
  render() {
    const {categorys}=this.state
    const  title="一级分类列表"
    const extra=(
      <Button type='primary'>
        <Icon type='plus'/>
        添加
      </Button>
    )
   
   
    return (
    
      <Card title={title} extra={extra}>
       <Table 
       bordered
       rowKey='_id'
       dataSource={categorys} 
       columns={this.columns}>



       </Table>
      </Card>
    
     
    );
  }
}

export default Category;