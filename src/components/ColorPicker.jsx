import React from 'react';
import { HuePicker } from 'react-color';
import { proxy, useSnapshot } from 'valtio';

export const state = proxy({
    hue: 0, // Initialize hue to 0
    base: { BaseMtl: "white" },
});

const ColorPicker = () => {
    const snap = useSnapshot(state);

    const handleHueChange = (color) => {
        state.hue = color.hsl.h; // Update the hue in the state
        state.base.BaseMtl = `hsl(${color.hsl.h}, 100%, 50%)`; // Update the BaseMtl color
    };

    const resetHue = () => {
        state.hue = 0; // Reset the hue to 0
        state.base.BaseMtl = `hsl(0, 100%, 100%)`; // Reset the BaseMtl color
    };

    return (
        <div>
            <HuePicker
                color={snap.base.BaseMtl}
                onChange={handleHueChange}
                direction="horizontal" />
            <button className='button' onClick={resetHue}>Reset Color</button>
        </div>
    );
};

export default ColorPicker;
