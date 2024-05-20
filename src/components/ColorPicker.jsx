import React from 'react';
import { proxy, useSnapshot } from 'valtio';
import '../App.css';

// Define state object with BaseMtl property initialized to white
export const state = proxy({
  current: 'none',
  base: {
    BaseMtl: "none" // White color
  }
});

// Function to update the BaseMtl value in the snap1 state object
export const updateBaseMtl = (color) => {
  const snap1Proxy = proxy(state);
  snap1Proxy.base.BaseMtl = color;
};

// ColorPicker component
const ColorPicker = () => {
  const snap1 = useSnapshot(state);

  return (
    <>
      <div className='container'>
        <div className='btn' onClick={() => updateBaseMtl("#fc9700")}><a>Burnt Orange</a></div>
        <div className='btn' onClick={() => updateBaseMtl("#FF0000")}><a>Red</a></div>
        <div className='btn' onClick={() => updateBaseMtl("#0000FF")}><a>Blue</a></div>
        <div className='btn' onClick={() => updateBaseMtl("#00FF00")}><a>Green</a></div>
        <div className='btn' onClick={() => updateBaseMtl("#f2ff00")}><a>Yellow</a></div>
        <div className='btn' onClick={() => updateBaseMtl("#800080")}><a>Purple</a></div>
        <div className='btn' onClick={() => updateBaseMtl("#808080")}><a>Grey</a></div>
        {/* <p>Current button: {snap1.current}</p>
      <p>Current color: {snap1.base.BaseMtl}</p> */}
      </div>
      <div className='btn-space'>
        <button className='glowing-btn' onClick={() => updateBaseMtl("none")}>Reset To Original Color</button>
      </div>
    </>
  );
};

export default ColorPicker;
