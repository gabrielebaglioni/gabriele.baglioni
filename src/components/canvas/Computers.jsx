import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader2.jsx";
import AndroidError from "../AndroidError.jsx";

const Computers = ({ isMobile }) => {
    const computer = useGLTF("./desktop_pc/scene.gltf");

    // Modifica dei materiali per migliorarne la resa visiva
    useEffect(() => {
        computer.scene.traverse((child) => {
            if (child.isMesh && child.material) {
                child.material.metalness = 0;
                child.material.roughness = 1;
                if (child.material.map) {
                    child.material.map.colorSpace = THREE.SRGBColorSpace;
                }
            }
        });
    }, [computer]);

    return (
        <mesh>
            {/* Simplified lighting for performance and compatibility */}
            <ambientLight intensity={1.0} />
            <directionalLight
                intensity={2.5}
                position={[10, 10, 10]}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
            />

            <primitive
                object={computer.scene}
                scale={isMobile ? 0.40 : 0.75}
                position={isMobile ? [-2.4, -3.2, -1.5] : [0, -3.75, -1.5]}
                rotation={[-0.01, -0.2, -0.1]}
            />
        </mesh>
    );
};

const ComputersCanvas = () => {
    const [isMobile, setIsMobile] = useState(false);

    useEffect(() => {
        const mediaQuery = window.matchMedia("(max-width: 500px)");
        setIsMobile(mediaQuery.matches);

        const handleMediaQueryChange = (event) => {
            setIsMobile(event.matches);
        };

        mediaQuery.addEventListener("change", handleMediaQueryChange);

        return () => {
            mediaQuery.removeEventListener("change", handleMediaQueryChange);
        };
    }, []);

    const isAndroid = typeof window !== 'undefined' && /android/i.test(navigator.userAgent);

    if (isAndroid) {
        return <AndroidError />;
    }

    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
            gl={{
                preserveDrawingBuffer: true,
                toneMapping: THREE.LinearToneMapping,
                outputColorSpace: THREE.SRGBColorSpace,
                toneMappingExposure: 1.0,
            }}
            useLegacyLights
        >
            <Suspense fallback={<CanvasLoader />}>
                <OrbitControls
                    enableZoom={false}
                    maxPolarAngle={Math.PI / 2}
                    minPolarAngle={Math.PI / 2}
                />
                <Computers isMobile={isMobile} />
            </Suspense>
            <Preload all />
        </Canvas>
    );
};

export default ComputersCanvas;
