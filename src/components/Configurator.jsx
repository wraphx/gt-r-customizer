import React, { useState } from 'react';
import { useCustomization } from '../context/Customization';
import Select, { components } from 'react-select';
import '../App.css';
import ColorPicker from './ColorPicker';
import TexturePaths from './TexturePaths';

const options = [
    { value: 1, label: 'Raven', image: '/options/raven.png' },
    { value: 2, label: 'Absolute Slaughter', image: '/options/slaughter.png' },
    { value: 3, label: 'Bat Lady', image: '/options/bats.png' },
    { value: 4, label: 'Brake Line', image: '/options/brakeline.png' },
    { value: 5, label: 'Danger Inside', image: '/options/danger.png' },
    { value: 6, label: 'Joker', image: '/options/joker.png' },
    { value: 7, label: 'Madness', image: '/options/madness.png' },
    { value: 8, label: 'Desert', image: '/options/desert.png' },
    { value: 9, label: 'Hot Rods', image: '/options/hotrod.png' },
    { value: 10, label: 'Mayan', image: '/options/mayan.png' },
    { value: 11, label: 'Sea Breeze', image: '/options/seabreaze.png' },
    { value: 12, label: 'Shape Shifter', image: '/options/shapeshifter.png' },
    { value: 13, label: 'Silk', image: '/options/silk.png' },
    { value: 14, label: 'Snake Skin', image: '/options/snake.png' },
    { value: 15, label: 'Solar Flare', image: '/options/flare.png' },
    { value: 16, label: 'Dominator', image: '/options/dominator.png' },
    { value: 17, label: 'Top Gun', image: '/options/topgun.png' },
    { value: 18, label: 'Water Explosion', image: '/options/explosion.png' },
    { value: 19, label: 'Wild West', image: '/options/wildwest.png' },
    { value: 20, label: 'Zombie', image: '/options/zombie.png' },
    { value: 21, label: 'Linearock', image: '/options/linea.png' },
    { value: 22, label: 'Euclids Theorem', image: '/options/euclid.png' },
    { value: 23, label: 'Pantone Zebra', image: '/options/pantone.png' },
    { value: 24, label: 'Heavenly Peace', image: '/options/heavenly.png' },
    { value: 25, label: 'Liquid Army', image: '/options/army.png' },
];

const reversedOptions = [...options].reverse();

const Option = ({ data, ...props }) => (
    <components.Option {...props}>
        <img
            src={data.image}
            alt={data.label}
            style={{ width: '20px', marginRight: '10px' }}
        />
        {data.label}
    </components.Option>
);
 
const Configurator = () => {
    const { overlay, setOverlay } = useCustomization();
    const [selectedOption, setSelectedOption] = useState(null);

    const handleOverlayChange = (selectedOption) => {
        setSelectedOption(selectedOption);
        setOverlay(selectedOption.value);
    };

    return (
        <div className='configurator'>
            <div className='conic all' />
            <div className='configurator__section__title'>
                Select Vehicle Wrap
            </div>
            <div className='selector'>
                <Select
                    value={selectedOption} // Set the selected option here
                    options={reversedOptions}
                    onChange={handleOverlayChange}
                    placeholder="Select Material"
                    components={{ Option }}
                    isSearchable={false}
                    getOptionLabel={(option) => option.label}
                    getOptionValue={(option) => option.value}
                />
                <div className='picker-color'>
                    <div className='configurator__section__title'>
                        Change Vehicle Color
                    </div>
                    <ColorPicker />
                </div>
            </div>

            <div className='texture-images'>
                {TexturePaths.map((v) => (
                    <img key={v.overlay} src={v.path} id={`overlay${v.overlay}`} alt={`Texture ${v.overlay}`} />
                ))}
            </div>
        </div>
    );
};

export default Configurator;
