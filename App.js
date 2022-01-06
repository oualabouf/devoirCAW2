import React from 'react';

import Lancerde from './components/LancerDe';


class App extends React.Component {

  state = {
    n1:0,
    n2:0,
    tentative:0,
    score:0,
    
  }
  

    lancer = () =>{
      const n1 = Math.floor(Math.random()*(6)+0)
      const n2 = Math.floor(Math.random()*(6)+0)
      const tentative = this.state.tentative+1
      const score = this.state.score
      if(n1==n2){
        score = this.state.score+1
      }
      
      this.setState({n1,n2,tentative,score})
    }

    reset = () =>{
      const n1 = Math.floor(Math.random()*(6)+0)
      const n2 = Math.floor(Math.random()*(6)+0)
      const tentative = 0
      const score = 0
      
      this.setState({n1,n2,tentative,score})
    }

  render(){
    const { n1,n2,tentative,score } = this.state
    let message = null
    let button = null
    if (n1==n2) {
      message = (
        <strong>you win !!!</strong>
      )
    }
    if (tentative<10) {
      button = (
        <Lancerde  lancer={() =>this.lancer()} num1={n1} num2={n2} button={"lancer"}/>
      )
    }else{
      button = (
        <Lancerde  lancer={() =>this.reset()} num1={n1} num2={n2} button={"reset"}/>
      )
    }

  return(
    <div>
      <h1>Tentative numero : {tentative}</h1>
      <br></br>
      <h1>Score : {score}</h1>
      <br></br>

      {button}
      

    <br></br>
    {message}
    </div>
  )
  }
  
}

export default App;