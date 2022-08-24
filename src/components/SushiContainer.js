import React, {useState} from "react";
import MoreButton from "./MoreButton";
import Sushi from "./Sushi";

function SushiContainer({sushis, handleEatSushi}) {
  const [index, setIndex]=useState(4)
  const [index2, setIndex2]=useState(0)
  function updateSection(){
    setIndex2(index)
    setIndex(index+4)
  }
  const showSushiArray = sushis.map((sushi)=><Sushi key={sushi.id} sushi={sushi} handleEatSushi={handleEatSushi}/>)
  const show4sushi= showSushiArray.slice(index2,index) 
  
  // console.log(sushis)

  return (
    <div className="belt">
      {show4sushi}
      <MoreButton onUpdate={updateSection}/>
    </div>
  );
}

export default SushiContainer;
