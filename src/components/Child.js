import React, { useState } from 'react';

const Child = ({data,setData}) => {

   const handleRemove = (index) => {
    let noIndexArr = data.filter((item,i)=>i!=index)
    setData(noIndexArr)
   }

  return (
    <div>
        <h1>Child Component</h1>
      <div>
         <ul className='child'>
         {data.map((value,index)=>(
            <li key={index}>
                {value.name} - ${value.price} 
                <button onClick={() => handleRemove(index)}>Remove</button>
            </li>
        ))}
        </ul>
      
      </div>
    </div>
  );
}

export default Child;
