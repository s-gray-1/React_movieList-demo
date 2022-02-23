/*  class Test{
   constructor(){
     this.a=1
   }
   testa(){
     console.log("testa");
   }
 
 } */
/*  const obj = new Test()
 obj.testa()
 console.log(obj.a); */

/*  class ChildTest extends Test{
  testb(){
    console.log("testb");
  }
}
var obj = new ChildTest()
obj.testa()
console.log(obj.a); */
import React from "react";
class App extends React.Component{
  render(){
    return (
    <div>hello react component
      <ul>
        <li>111</li>
        <li>222</li>
      </ul>
    </div>
    )
  }
}

export default  App