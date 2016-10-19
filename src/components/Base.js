import React from 'react'
import { Link } from 'react-router'
import { connect } from 'react-redux'
import { push } from 'react-router-redux'
require('antd/dist/antd.css');
import { Menu, Icon, Row, Col, Select, Form, Input, DatePicker, Button } from 'antd'

const SubMenu = Menu.SubMenu
const FormItem = Form.Item
const Option = Select.Option

class Base extends React.Component {
  constructor(props) {
    super(props);
    this.state = {

    }
  }

  onChange = (value) => {
    console.log('Selected Time: ', value)
  }

  render() {
    const { children } = this.props
    console.log('props in base', this.props)
    return (
      <div style={{position: 'relative', minHeight: '100%'}}>
        <h2 style={{margin: 20, textAlign: 'center'}}>React-Framework</h2>
        <Menu
          style={{position: 'absolute', width: 224, height: '100%'}}
          theme='light'
          mode="inline">
          <Menu.Item key="todomvc"><Link to="todomvc">todomvc222</Link></Menu.Item>
        </Menu>
        <div style={{marginLeft: 224, padding: 20}}>
          <Button type="primary" size="large">test antd</Button>
          <Input size="large" placeholder="large size" />
          <DatePicker showTime format="YYYY-MM-DD HH:mm:ss" placeholder="Select Time" onChange={this.onChange} />
          {children}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {

  }
}
export default connect(mapStateToProps)(Base)