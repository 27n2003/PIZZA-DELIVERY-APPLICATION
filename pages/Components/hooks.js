import React, { useState } from 'react';


const hooks = () => {
  const[count,setCount] = useState(0);
  
  const onClick = () => {
    setCount(count+10);
  }

  


  return (
    <>
     <div className="harry">
        <h1>{count}</h1>
     </div>
     <button className="btn-danger" onClick={onClick}>Counter</button>
    </>
  )
}

export default hooks;
