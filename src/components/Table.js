import React from "react";

function Table({ sushis,moneyRemaining,plates = [] }) {
  // renders an empty plate for every element in the array
  const ateSushi=sushis.filter((sushi)=>sushi.eaten===true)
  console.log(ateSushi)

  const emptyPlates = ateSushi.map((_, index) => (
    <div key={index} className="empty-plate" style={{ top: -7 * index }} />
  ));

  return (
    <>
      <h1 className="remaining">
        You have: ${moneyRemaining} remaining!
      </h1>
      <div className="table">
        <div className="stack">{emptyPlates}</div>
      </div>
    </>
  );
}

export default Table;
