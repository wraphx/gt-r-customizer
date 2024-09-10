import { Suspense, useRef } from "react";
import { Canvas, useFrame } from "@react-three/fiber"
import { ContactShadows, Environment, Lightformer, OrbitControls, Loader } from "@react-three/drei"

import { CustomizationProvider } from "./context/Customization"
import Configurator from "./components/Configurator";
import { GTR } from "./vehicles/GTR";

export default function App() {

  return (

    <CustomizationProvider>
      <div className="App">
      <Loader />
        <Canvas shadows camera={{ position: [0, 0, 20], fov:50 }}>
          <color attach="background" args={['grey']} />
          <Suspense fallback={null}>
          <GTR scale={1.6} position={[0, 0, 0]} />
          </Suspense>
          <hemisphereLight intensity={0.5} />
        <ContactShadows position={[0, 0, 0]} opacity={0.75} scale={20} blur={2.5} far={12.8} />
        <ContactShadows resolution={1024} frames={1} position={[0, 0, 0]} scale={20} blur={1.5} opacity={0.5} far={25} />
        
        <ambientLight intensity={0.4} />
        <spotLight intensity={0.5} angle={0.1} penumbra={1} position={[10, 15, 10]} castShadow />

        {/* <Environment preset="city" /> */}
        <Environment resolution={1024} files="/st_peters_square_night_2k.hdr" background ground={{ height: 15, radius: 80, scale: 50 }} backgroundBlurriness={50} backgroundIntensity={10}  environmentIntensity={30}>
           
          </Environment>
          <ContactShadows position={[0, -0.8, 0.0]} opacity={0.75} scale={10} blur={2.5} far={0.8} />
          {/* <OrbitControls minPolarAngle={Math.PI / 2} maxPolarAngle={Math.PI / 2} enableZoom={true} enablePan={false} /> */}
          <OrbitControls   enablePan={false} enableZoom={true} minPolarAngle={Math.PI / 2.8} maxPolarAngle={Math.PI / 2.1} />
        </Canvas>
        <Configurator />
      </div>

    </CustomizationProvider>

  )
}

