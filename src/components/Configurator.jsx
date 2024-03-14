import { useCustomization } from '../context/Customization';
import Select, { components } from 'react-select';
import '../App.css';
import ColorPicker from './ColorPicker';

const options = [
    { value: 1, label: 'Raven', image: 'https://static.wixstatic.com/media/4fb926_f0a8461680e54e1cb39928ca1d09ea2c~mv2.png' },
    { value: 2, label: 'Absolute Slaughter', image: 'https://static.wixstatic.com/media/4fb926_46a63b9b42df4274898c07241a02e71a~mv2.png' },
    { value: 3, label: 'Bat Lady', image: 'https://static.wixstatic.com/media/4fb926_e3819bbf778d4d248e915270edc6f4c0~mv2.png' },
    { value: 4, label: 'Brake Line', image: 'https://static.wixstatic.com/media/4fb926_d99d1a69d05148bea106d95edd6994d1~mv2.png ' },
    { value: 5, label: 'Danger Inside', image: 'https://static.wixstatic.com/media/4fb926_fb9ea3dfd569455ea18424dc4b9bc99d~mv2.png' },
    { value: 6, label: 'Embers', image: 'https://static.wixstatic.com/media/4fb926_ccdcacc2f9d549fe9d349bd8d4ae29df~mv2.png' },
    { value: 7, label: 'Spider ID', image: 'https://static.wixstatic.com/media/4fb926_3277dcb3471e43adaa327a945c3ec498~mv2.png' },
    { value: 8, label: 'Fluid', image: 'https://static.wixstatic.com/media/4fb926_883e65359e294ee799bd65b96b52e2aa~mv2.png' },
    { value: 9, label: 'Hot Rods', image: 'https://static.wixstatic.com/media/4fb926_b719c9eb114149049040504ed2e12f47~mv2.png' },
    { value: 10, label: 'Mayan', image: 'https://static.wixstatic.com/media/4fb926_426e2d02ec1c496f95b92d884f55afee~mv2.png' },
    { value: 11, label: 'Sea Breeze', image: 'https://static.wixstatic.com/media/4fb926_01a0d1ff62384a9f8583d115ee73b5d9~mv2.png' },
    { value: 12, label: 'Shape Shifter', image: 'https://static.wixstatic.com/media/4fb926_08ed88ea7e334117a0142dc93145a8bf~mv2.png' },
    { value: 13, label: 'Silk', image: 'https://static.wixstatic.com/media/4fb926_6a4b3f421d1f48b5a8f60c5bc98c03a3~mv2.png' },
    { value: 14, label: 'Snake Skin', image: 'https://static.wixstatic.com/media/4fb926_42a32af70a12422ea4d85096ebffc870~mv2.png' },
    { value: 15, label: 'Solar Flare', image: 'https://static.wixstatic.com/media/4fb926_89bbeb3f9eec47819975e068f7e6091a~mv2.png' },
    { value: 16, label: 'Dominator', image: 'https://static.wixstatic.com/media/4fb926_4debefd8472e43bb82dcdaad0dc1255a~mv2.png' },
    { value: 17, label: 'Top Gun', image: 'https://static.wixstatic.com/media/4fb926_cb987dc7568f4aaf92fe9e58184bc242~mv2.png' },
    { value: 18, label: 'Water Explosion', image: 'https://static.wixstatic.com/media/4fb926_70764f672ca246f9b6c55c838247352c~mv2.png' },
    { value: 19, label: 'Wild West', image: 'https://static.wixstatic.com/media/4fb926_1ba79fea1a4e4385aa2282b28a59a735~mv2.png' },
    { value: 20, label: 'Zombie', image: 'https://static.wixstatic.com/media/4fb926_25166cde3d0c419baef3b03b416e2a7e~mv2.png' },
];

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

    const handleOverlayChange = (selectedOption) => {
        setOverlay(selectedOption.value);
    };


    return (
        <>

            <div className='configurator'>
                <div className='conic all' />
                <div className='configurator__section__title'>
                    Select Vehicle Wrap
                </div>
                <div className='selector' >
                    <Select
                        value={options.find(option => option.value === overlay)}
                        options={options}
                        onChange={handleOverlayChange}
                        placeholder="Select Material"
                        components={{ Option }}
                        isSearchable={false}
                        getOptionLabel={(option) => option.label}
                        getOptionValue={(option) => option.value}                        
                    />
                    <div className='picker-color'>
                         <ColorPicker />
                         </div>
                </div>                        
                   
            </div>
        </>
    );
};

export default Configurator;