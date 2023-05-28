import React, { useState } from 'react';
import Child from './Child';
const arr = [];
const Parent = () => {
    const [name,setName] = useState('')
    const [price,setPrice] = useState('')
    const [data,setData] = useState([])

    const handleValue = () => {
        const obj = {
            name:name,
            price:price
        };
        arr.push(obj);
        setData(arr);
        // console.log(arr)
    }

  return (
    <div className='parent'>
      <h1>Parent Component</h1><br/><br/>

      <label >Item Name:</label>
      <input id='itemName' type='text' value={name} onChange={(e)=> setName(e.target.value)}/>
      
      <label >Item Price:</label>
      <input id='itemPrice' type='number' value={price} onChange={(e)=> setPrice(e.target.value)}/>
      
      <button onClick={handleValue}>Add Item</button> <br/><br/><br/>
      <Child data={data} setData={setData} />
    </div>
  );
}

export default Parent;
