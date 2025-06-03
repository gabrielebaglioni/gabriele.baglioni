import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader2.jsx";

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
            {/* Luci aggiuntive */}
            <ambientLight intensity={1.5} />
            <directionalLight intensity={2} position={[10, 10, 10]} />
            <hemisphereLight intensity={0.15} groundColor="black" />
            <spotLight
                position={[-20, 50, 10]}
                angle={0.12}
                penumbra={1}
                intensity={10}
                castShadow
                shadow-mapSize={1024}
            />
            <pointLight intensity={1.5} />

            <primitive
                object={computer.scene}
                scale={isMobile ? 0.40 : 0.75}
                position={isMobile ? [-1, -1.7, -1.5] : [0, -3.75, -1.5]}
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

    return (
        <Canvas
            frameloop="demand"
            shadows
            dpr={[1, 2]}
            camera={{ position: [20, 3, 5], fov: 25 }}
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
