import React, { Suspense, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import * as THREE from "three";

import CanvasLoader from "../Loader2.jsx";

const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl]);

  useEffect(() => {
    // Imposta il color space della texture decal (importantissimo per la resa)
    if (decal) {
      decal.colorSpace = THREE.SRGBColorSpace;
    }
  }, [decal]);

  return (
    <>
      <ambientLight intensity={1.5} />
      <directionalLight position={[0, 0, 0.5]} intensity={1} />
      <mesh castShadow receiveShadow scale={2.75}>
        <icosahedronGeometry args={[1, 1]} />
        <meshStandardMaterial
            color="#fff8eb"
            polygonOffset
            polygonOffsetFactor={-5}
            flatShading
        />
        <Decal
            position={[0, 0, 1]}
            rotation={[2 * Math.PI, 0, 6.25]}
            scale={1}
            map={decal}
            flatShading
        />
      </mesh>
    </>
  );
};

const BallCanvas = ({ icon }) => {
  const fallbackUI = (
    <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', width: '100%', height: '100%', textAlign: 'center', color: 'white', fontFamily: 'monospace', fontSize: '12px' }}>
      Render<br/>Error
    </div>
  );

  const isAndroid = typeof window !== 'undefined' && /android/i.test(navigator.userAgent);

  if (isAndroid) {
    return fallbackUI;
  }

  return (
    <Canvas
      frameloop='demand'
      dpr={[1, 2]}
      gl={{
        preserveDrawingBuffer: true,
        toneMapping: THREE.LinearToneMapping,
        outputColorSpace: THREE.SRGBColorSpace,
        toneMappingExposure: 1.0,
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

export default BallCanvas;
