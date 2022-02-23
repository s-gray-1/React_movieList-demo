import React, { Component } from 'react'
import axios from 'axios'
export default class Cinema extends Component {
  constructor(){
    super()
    // axios第三方库 专门用于请求数据
   /*  axios.get("https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=820614").then(res=>{
      console.log(res);
    }).catch(err=>{
      console.log(err);
    }) */
    this.state = {
      cinemalist:[],
      copyCinemaList:[]
    }
    axios({
      url:"https://m.maizuo.com/gateway?cityId=110100&ticketFlag=1&k=820614",
      method:'get',
      headers:{
        'X-Client-Info': '{"a":"3000","ch":"1002","v":"5.2.0","e":"16455458346017545534439425","bc":"110100"}',
        'X-Host': 'mall.film-ticket.cinema.list'
      }
    }).then(res=>{
      console.log(res.data.data.cinemas);
      this.setState({
        cinemalist:res.data.data.cinemas,
        copyCinemaList:res.data.data.cinemas
      })
    })
   
  }
  render() {
    return (
      <div>
          <input onInput={
            this.handelInput
          }/>
          {
            this.state.cinemalist.map(item=>
              <dl key={item.cinemaId}>
                <dt>{item.name}</dt>
                <dd>{item.address}</dd>
              </dl>
              
            )
          }
      
      </div>
    )
  }
  handelInput=(event)=>{
    console.log("input",event.target.value);
   var newlist =  this.state.copyCinemaList.filter(item=>item.name.toUpperCase().includes(event.target.value.toUpperCase())
    ||item.address.toUpperCase().includes(event.target.value.toUpperCase())
   )
    console.log(newlist);
    this.setState({
     cinemalist:newlist
   })
  //  cinemalist每次都会被重新覆盖

  }
}
// filter
/* var arr = ["aaa","abc","ccc"]
var newarr = arr.filter(item=>item.includes('a'))
console.log(newarr); */