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
  return (
    <div
      style={{ width: "100%", height: "100%" }}
    >
      <Canvas
        frameloop="demand"
        dpr={[1, 2]}
        gl={(canvas) => {
          canvas.toneMapping = THREE.LinearToneMapping;
          canvas.outputColorSpace = THREE.SRGBColorSpace;
          canvas.physicallyCorrectLights = false;
          canvas.toneMappingExposure = 1.0;
          return canvas;
        }}
      >
        <Suspense fallback={<CanvasLoader />}>
          <OrbitControls
            enableZoom={false}
          />
          <Ball imgUrl={icon} />
        </Suspense>
        <Preload all />
      </Canvas>
    </div>
  );
};

export default BallCanvas;
