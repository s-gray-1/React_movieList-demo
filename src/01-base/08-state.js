import React, { Component } from 'react'

export default class App extends Component {
  // state={
  //   mytext:"收藏",
  //   myShow:true
  // }
  // 第二种方法
  constructor(){
    super()
    this.state={
        mytext:"收藏",
        myShow:true,
        myName:"kerwin"


      }
  }

  render() {
    return (
      <div>
        <h1>
          欢迎来到react开发-{this.state.myName}
        </h1>
        <button onClick={()=>{
          // this.state.mytext = "取消" 不能直接修改状态
          this.setState({
            // mytext:"取消收藏"
            myShow:!this.state.myShow,
            myName:"xiaoming"
          }) //间接修改状态
          if(this.state.myShow){
            console.log("收藏的逻辑");
          }else{
            console.log("取消收藏的逻辑");
          }
        }}>{this.state.myShow?'收藏':'取消收藏'}</button>
      </div>
    )
  }
}
