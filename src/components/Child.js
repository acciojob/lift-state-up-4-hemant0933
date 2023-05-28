import React, { useState } from 'react';

const Child = ({data,setData}) => {

   const handleRemove = (index) => {
    let noIndexArr = data.filter((item,i)=>i!=index)
    setData(noIndexArr)
   }

  return (
    <div className='child'>
        <h1>Child Component</h1>
      <div>
         <ul>
         {data.map((value,index)=>(
             <li className='child li' key={index}>
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
