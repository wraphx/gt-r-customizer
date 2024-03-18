import React, { useEffect } from 'react';
import { useGLTF } from '@react-three/drei';
import { useSnapshot } from "valtio";
import { useCustomization } from '../context/Customization';
import { state } from '../components/ColorPicker';
import * as THREE from 'three'; // Import Three.js for blending mode

export function GTR(props) {
  const { overlay } = useCustomization();
  const snap1 = useSnapshot(state);
  const { nodes, materials } = useGLTF('/models/GTR.glb');

  useEffect(() => {
    console.log("Effect triggered. Current button:", snap1.current, "Current color:", snap1.base.BaseMtl);
    
    const materialNodes = Object.keys(nodes).map((nodeName) => materials[nodeName]);

    materialNodes.forEach((material) => {
      if (material && material.color && material.color.equals(new THREE.Color(snap1.base.BaseMtl))) {
        switch (snap1.current) {
          case 'pink':
            applyCustomBlending(material, 0xFFC0CB); // Pink color
            break;
          case 'red':
            applyCustomBlending(material, 0xFF0000); // Red color
            break;
          case 'blue':
            applyCustomBlending(material, 0x0000FF); // Blue color
            break;
          case 'green':
            applyCustomBlending(material, 0x00FF00); // Green color
            break;
          case 'yellow':
            applyCustomBlending(material, 0xFFFF00); // Yellow color
            break;
          case 'purple':
            applyCustomBlending(material, 0x800080); // Purple color
            break;
          case 'grey':
            applyCustomBlending(material, 0x808080); // Grey color
            break;
          default:
            break;
        }
      }
    });
  }, [snap1.current, snap1.base.BaseMtl, nodes, materials]);

  const applyCustomBlending = (material, hueColor) => {
    // Set the blending mode
    material.blending = THREE.CustomBlending;
    material.blendEquation = THREE.AddEquation;
    material.blendSrc = THREE.SrcAlphaFactor;
    material.blendDst = THREE.OneMinusSrcAlphaFactor;
    material.blendSrcAlpha = THREE.SrcAlphaFactor;
    material.blendDstAlpha = THREE.OneMinusSrcAlphaFactor;
    material.blendEquationAlpha = THREE.AddEquation;
    material.depthWrite = false;
  
    // Calculate the blended color
    const existingColor = material.color.clone();
    const blendedColor = blendColors(existingColor, hueColor);
  
    // Apply the blended color
    material.color = blendedColor;
  };
  
  // Function to blend two colors in a "Hue" blending mode
  const blendColors = (color1, color2) => {
    const hsv1 = new THREE.Color(color1).getHSL();
    const hsv2 = new THREE.Color(color2).getHSL();
  
    // Blend the hue of the two colors
    const blendedHue = hsv2.h;
    const blendedColor = new THREE.Color().setHSL(blendedHue, hsv1.s, hsv1.l);
  
    return blendedColor;
  };
  

  return (
    <group {...props} dispose={null}>
      <mesh geometry={nodes.Body.geometry} material={materials.BaseMtl} material-color={snap1.base.BaseMtl} visible={overlay === 1}/>
      <mesh geometry={nodes.Body001.geometry} material={materials.Slaughter} material-color={snap1.base.BaseMtl} visible={overlay === 2}/>
      <mesh geometry={nodes.Body002.geometry} material={materials.BatLady} material-color={snap1.base.BaseMtl} visible={overlay === 3}/>
      <mesh geometry={nodes.Body003.geometry} material={materials.BrakeLine} material-color={snap1.base.BaseMtl} visible={overlay === 4}/>
      <mesh geometry={nodes.Body004.geometry} material={materials.Danger} material-color={snap1.base.BaseMtl} visible={overlay === 5}/>
      <mesh geometry={nodes.Body005.geometry} material={materials.Embers} material-color={snap1.base.BaseMtl} visible={overlay === 6}/>
      <mesh geometry={nodes.Body006.geometry} material={materials.SpiderID} material-color={snap1.base.BaseMtl} visible={overlay === 7}/>
      <mesh geometry={nodes.Body007.geometry} material={materials.Fluid} material-color={snap1.base.BaseMtl} visible={overlay === 8}/>
      <mesh geometry={nodes.Body008.geometry} material={materials.HotRods} material-color={snap1.base.BaseMtl} visible={overlay === 9}/>
      <mesh geometry={nodes.Body009.geometry} material={materials.Mayan} material-color={snap1.base.BaseMtl} visible={overlay === 10}/>
      <mesh geometry={nodes.Body010.geometry} material={materials.SeaBreeze} material-color={snap1.base.BaseMtl} visible={overlay === 11}/>
      <mesh geometry={nodes.Body011.geometry} material={materials.ShapeShifter} material-color={snap1.base.BaseMtl} visible={overlay === 12}/>
      <mesh geometry={nodes.Body012.geometry} material={materials.Silk} material-color={snap1.base.BaseMtl} visible={overlay === 13}/>
      <mesh geometry={nodes.Body013.geometry} material={materials.SnakeSkin} material-color={snap1.base.BaseMtl} visible={overlay === 14}/>
      <mesh geometry={nodes.Body014.geometry} material={materials.Flare} material-color={snap1.base.BaseMtl} visible={overlay === 15}/>
      <mesh geometry={nodes.Body015.geometry} material={materials.Dominator} material-color={snap1.base.BaseMtl} visible={overlay === 16}/>
      <mesh geometry={nodes.Body016.geometry} material={materials.TopGun} material-color={snap1.base.BaseMtl} visible={overlay === 17}/>
      <mesh geometry={nodes.Body017.geometry} material={materials.Explosion} material-color={snap1.base.BaseMtl} visible={overlay === 18}/>
      <mesh geometry={nodes.Body018.geometry} material={materials.WildWest} material-color={snap1.base.BaseMtl} visible={overlay === 19}/>
      <mesh geometry={nodes.Body019.geometry} material={materials.Zombie} material-color={snap1.base.BaseMtl} visible={overlay === 20}/>
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
