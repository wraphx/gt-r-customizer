import React, { useRef } from 'react'
import { useSnapshot } from "valtio"

import { useGLTF } from '@react-three/drei'
import { useCustomization } from '../context/Customization';
import { state } from '../components/ColorPicker';


export function GTR(props) {
  const { nodes, materials } = useGLTF('models/GTR.glb')
  const { overlay } = useCustomization()
  const snap1 = useSnapshot(state)

  const canvasRef = useRef(document.createElement("canvas"));
  const textureRef = useRef();
  const context = useRef(canvasRef.current.getContext("2d"));
console.log()

  canvasRef.current.width = 1600;
  canvasRef.current.height = 1600;

  let ctx = context.current;

  ctx.globalCompositeOperation = "hue";

  const img = document.getElementById(`overlay${overlay}`);

  if (img.complete) {
    ctx.drawImage(img, 0, 0);
    if (snap1.base.BaseMtl !== "none") {
      if(overlay!==1){
      ctx.fillStyle = snap1.base.BaseMtl;
      ctx.fillRect(0, 0, 1600, 1600);
      }
    }


    if (textureRef.current) {
      textureRef.current.needsUpdate = true;
    }
  }

  else {
    img.onload = function () {
      ctx.drawImage(img, 0, 0);
      if (snap1.base.BaseMtl !== "none") {
        if(overlay!==1){
        ctx.fillStyle = snap1.base.BaseMtl;
        ctx.fillRect(0, 0, 1600, 1600);
        }
      }
      


      if (textureRef.current) {
        textureRef.current.needsUpdate = true;
      }
    }
  }



  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Body.geometry}>
        <meshStandardMaterial {...materials.BaseMtl} color={overlay==1 || overlay==13 ? (snap1.base.BaseMtl!=="none" ? snap1.base.BaseMtl : 0xffffff) : 0xffffff}>
          <canvasTexture
            flipY={false}
            wrapS={1000}
            wrapT={1000}
            colorSpace='srgb'
            ref={textureRef}
            attach="map"
            image={canvasRef.current}
          />
        </meshStandardMaterial>
      </mesh>
      <mesh geometry={nodes.body_Black_colour001_0.geometry} material={materials['Black_colour.001']} />
      <mesh geometry={nodes.body_Black_colour001_0001.geometry} material={materials['Black_colour.001']} />
      <mesh geometry={nodes.body_Black_colour001_0002.geometry} material={materials['Black_colour.001']} />
      <mesh geometry={nodes.body_Black_colour001_0003.geometry} material={materials['Black_colour.001']} />
      <mesh geometry={nodes.body_black002_0.geometry} material={materials['black.002']} />
      <mesh geometry={nodes.body_Car_paint003_0.geometry} material={materials['Car_paint.003']} />
      <mesh geometry={nodes.body_Car_paint003_0001.geometry} material={materials['Car_paint.003']} />
      <mesh geometry={nodes.body_Exaust001_0.geometry} material={materials['Exaust.001']} />
      <mesh geometry={nodes.body_Glass001_0.geometry} material={materials['Glass.001']} />
      <mesh geometry={nodes.body_Grey_colour001_0.geometry} material={materials['Grey_colour.001']} />
      <mesh geometry={nodes.body_Headlights001_0.geometry} material={materials['Headlights.001']} />
      <mesh geometry={nodes.body_Material001_0.geometry} material={materials['Material.001']} />
      <mesh geometry={nodes.body_Material002_0.geometry} material={materials['Material.002']} />
      <mesh geometry={nodes.body_Material003_0.geometry} material={materials['Material.003']} />
      <mesh geometry={nodes.body_Material005_0.geometry} material={materials['Material.005']} />
      <mesh geometry={nodes.body_Metal001_0.geometry} material={materials['Metal.001']} />
      <mesh geometry={nodes.body_Mirror001_0.geometry} material={materials['Mirror.001']} />
      <mesh geometry={nodes.body_Red_colour001_0.geometry} material={materials['Red_colour.001']} />
      <mesh geometry={nodes.body_Speedometr001_0.geometry} material={materials['Speedometr.001']} />
      <mesh geometry={nodes.body_Tire003_0.geometry} material={materials['Tire.003']} />
    </group>
  );
}

useGLTF.preload('/models/GTR.glb');
