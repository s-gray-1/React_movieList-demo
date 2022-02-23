import React, { Component } from 'react'
import './css/01-index.css'
export default class App extends Component {
  a=100
  myref=React.createRef()
  state = {
    list:[{
      id:1,
      text:"111"
    },
    {
      id:2,
      text:"222"
    },
    {
      id:3,
      text:"333"
    }
  ]
  }
  render() {
    return (
      <div>
        {/* <input ref="mytext"></input> */}
        <input ref = {this.myref}/>
      
        <button onClick={this.handleClick2}>add2</button>
        <ul>
          {
            this.state.list.map((item,index)=>
              <li key={item.id}>
                {/* {item.text} */}
                {/* 富文本展示 */}
                <span dangerouslySetInnerHTML={
                  {
                    __html:item.text
                  }
                }></span>
                {/* 
                   <button onClick={
                  this.handleDelClick.bind(this,index)
                  }>del</button>
                */}
                <button onClick={()=>{
                  this.handleDelClick(index)
                }}>del</button>
              </li>
            )
          }
        </ul>
        {/* 条件渲染 */}
        {/* {this.state.list.length===0?<div>暂无待办事项</div>:null} */}
        {/* {this.state.list.length===0 && <div>暂无待办事项</div>} */}
        <div className={this.state.list.length===0?'':'hidden'}>暂无待办事项</div>
      </div>
    )
    
  }
  handleClick2=()=>{
    console.log("click2",this.myref.current.value);
    let newlist = [...this.state.list]
    newlist.push({
      id:Math.random()*10000,
      text:this.myref.current.value
    })
      
    this.setState({
      list:newlist
    })
    // 清空输入框
    this.myref.current.value=''
  }
  handleDelClick=(index)=>{
    // console.log(index);
    let newlist = this.state.list.slice()
    newlist.splice(index,1)
    this.setState(
      {
        list:newlist
      }
    )
  }

}
