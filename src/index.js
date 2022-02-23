import React from "react";
import ReactDOM from "react-dom";
// import App from "./01-base/01-class组件"; 
// import App from './01-base/02-函数式组件.js'
// import App from './01-base/03-组件的嵌套.js'
// import App from './01-base/04-组件的样式.js'
// import App from './01-base/05-事件绑定-1.js'
// import App from  './01-base/06-事件绑定-2.js'
// import App from './01-base/07-ref.js'
// import App from './01-base/08-state.js'
// import App from './01-base/09-循环渲染.js'
// import App from './01-base/10-todolist.js'
// import App from './01-base/11-dangerouslySetInnerHTML.js'
import App from './01-base/12-卖座选项卡.js'

// ReactDOM.render(<div>
//   <b>1111</b>
//   <ul>
//     <li>1111</li>
//     <li>1111</li>
//     <li>1111</li> 
//     <li>1111</li>
//     <li>1111</li>
//   </ul>
// </div>,document.getElementById('root'))

/* ReactDOM.render(
  React.createElement("div",
  {id:'aaa',
  class:"bbb"
},"1111111"),document.getElementById('root'))  */
// jsx==js+xml


ReactDOM.render(<App></App>,document.getElementById("root"))