import React, { Component } from 'react'

export default class App extends Component {
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
    var newlist = this.state.list.map(item=>
      <li key={item.id}>{item.text}</li>)
    return (
      <div>
        <ul>
         {
           newlist
          }
        </ul>
      </div>
    )
  }
}
// 为了列表的复用和重排 设置key值 提高性能
// 理想key item.id
// 不涉及到列表的增加删除 重排 设置成索引没问题 
/* 
 原生js - map

*/
var list = ["aaa","bbb","ccc"]
var newlist = list.map(item=>`<li>${item}</li>`)
console.log(newlist.join(""));