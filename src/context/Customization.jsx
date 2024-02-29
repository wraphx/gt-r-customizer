import { createContext, useContext, useState } from 'react'
import { proxy, useSnapshot } from 'valtio';

const CustomizationContext = createContext({})

export const CustomizationProvider = (props) => {
    const materialsMap = {
        BaseMtl: 'white',
        Slaughter: 'white',
        BatLady: 'white',
        BrakeLine: 'white',
        Embers: 'white',
        SpiderID: 'white',
        Fluid: 'white',
        HotRods: 'white',
        Mayan: 'white',
        SeaBreeze: 'white',
        ShapeShifter: 'white',
        Silk: 'white',
        SnakeSkin: 'white',
        Flare: 'white',
        Dominator: 'white',
        TopGun: 'white',
        Explosion: 'white',
        WildWest: 'white',
        Zombie: 'white',
      
      };

    const [overlay, setOverlay] = useState(1)
    const state = proxy({
        current: null,
        main: { ...materialsMap },
      });

      const snap = useSnapshot(state);
    
    return (

        <CustomizationContext.Provider
            value={{
                overlay,
                setOverlay,
                state,
                snap,
            }}
        >
            {props.children}
        </CustomizationContext.Provider>

    )
}

export const useCustomization = () => {
    const context = useContext(CustomizationContext);

    return context;
}