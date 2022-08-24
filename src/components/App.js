import React, {useState, useEffect} from "react";
import SushiContainer from "./SushiContainer";
import Table from "./Table";


const API = "http://localhost:3001/sushis";

function App() {
  const [sushis, setSushis]=useState([])
  const [moneyRemaining, setMoneyRemaining]=useState(100)
  useEffect(()=>{
    fetch(API)
    .then(resp=>resp.json())
    .then(data=>{
      const newSushiArray=data.map((sushi)=>{
        return {...sushi, eaten:false}
      })
      setSushis(newSushiArray)
    })
  },[])

  function handleEatSushi(eatSushi){
    if(moneyRemaining<eatSushi.price) return false
    setMoneyRemaining((moneyRemaining)=>moneyRemaining-eatSushi.price)
    const updatedSushiArray=sushis.map((sushi)=>{
    if(sushi.id===eatSushi.id) return {...sushi, eaten:true}
    return sushi
   })
   const eatenSushiArray=updatedSushiArray.filter((sushi)=>{
    if(sushi.eaten===true) return false
    return true
   })
   setSushis(updatedSushiArray)
  }
  
  // const eatenSushis = sushis.filter((sushi) => sushi)

  return (
    <div className="app">
      <SushiContainer sushis={sushis} handleEatSushi={handleEatSushi}/>
      <Table moneyRemaining={moneyRemaining} sushis={sushis}/>
    </div>
  );
}

export default App;
