import React, { Suspense, useEffect, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";
import * as THREE from "three";
import CanvasLoader from "../Loader2.jsx";

// Utility per rilevare se siamo su Android
const isAndroid = () =>
    typeof navigator !== "undefined" &&
    /Android/i.test(navigator.userAgent);

const Computers = ({ isMobile }) => {
    const computer = useGLTF("/desktop_pc/scene.gltf");

    useEffect(() => {
        computer.scene.traverse((child) => {
            if (child.isMesh) {
                // Se siamo su Android, usiamo un materiale semplice per evitare problemi
                if (isAndroid()) {
                    child.material = new THREE.MeshBasicMaterial({ color: 0xffffff });
                } else {
                    // Materiali PBR (Standard) per tutti gli altri dispositivi
                    if (child.material) {
                        child.material.metalness = 0;
                        child.material.roughness = 1;
                        if (child.material.map) {
                            child.material.map.colorSpace = THREE.SRGBColorSpace;
                            child.material.map.encoding = THREE.sRGBEncoding;
                            child.material.needsUpdate = true;
                        }
                    }
                }
            }
        });
    }, [computer]);

    return (
        <mesh>
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
                scale={isMobile ? 0.4 : 0.75}
                position={isMobile ? [-2.4, -1.7, -1.5] : [0, -3.75, -1.5]}
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
