import React from 'react';
import { proxy, useSnapshot } from 'valtio';
import '../App.css';

// Define state object with BaseMtl property initialized to white
export const state = proxy({
  current: 'white',
  base: {
    BaseMtl: 0xffffff // White color
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
      <div className=' btn' onClick={() => updateBaseMtl(0xFFC0CB)}><a>Pink</a></div>
      <div className='btn' onClick={() => updateBaseMtl(0xFF0000)}><a>Red</a></div>
      <div className='btn' onClick={() => updateBaseMtl(0x0000FF)}><a>Blue</a></div>
      <div className='btn' onClick={() => updateBaseMtl(0x00FF00)}><a>Green</a></div>
      <div className='btn' onClick={() => updateBaseMtl(0xFFFF00)}><a>Yellow</a></div>
      <div className='btn' onClick={() => updateBaseMtl(0x800080)}><a>Purple</a></div>
      <div className='btn' onClick={() => updateBaseMtl(0x808080)}><a>Grey</a></div>
      {/* <p>Current button: {snap1.current}</p>
      <p>Current color: {snap1.base.BaseMtl}</p> */}
    </div>
    <div className='btn-space'>
      <button className='glowing-btn' onClick={() => updateBaseMtl(0xffffff)}>Reset To Original Color</button>
      </div>
    </>
  );
};

export default ColorPicker;
