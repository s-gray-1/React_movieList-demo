import React, { Component } from 'react'
import './css/01-index.css'   // 导入css模块 是webpack的更新
export default class App extends Component {
  render() {
    var myname = 'kerwin'
    let obj = {
      backgroundColor:"yellow",
      fontSize:"30px"
    }
    return (
      <div>
        {10+20}-{myname}
        {10>20?'aaa':'bbb'}
        
        <div style={obj}>1111</div>
        <div style={{background:"red"}}>2222</div>
        <div className="active">333333</div>
        <div id="myapp">555555</div>
        <label htmlFor="username">用户名：</label>
        <input type="text" id="username"></input>
        

      </div>
    )
  }
}
