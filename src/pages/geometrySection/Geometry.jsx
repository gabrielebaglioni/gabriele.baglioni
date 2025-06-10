import React, { useRef, useEffect, useState, useMemo } from "react";
import { Float } from "@react-three/drei";
import * as THREE from "three";
import gsap from "gsap";
import hit1Sound from '../../assets/static/sounds/hit1.ogg';
import hit2Sound from '../../assets/static/sounds/hit2.ogg';
import hit3Sound from '../../assets/static/sounds/hit3.ogg';

const soundEffects = [
  new Audio(hit1Sound),
  new Audio(hit2Sound),
  new Audio(hit3Sound),
];

const materialParams = [
    { color: 0x2ecc71, roughness: 0 },
    { color: 0xf1c40f, roughness: 0.4 },
    { color: 0xe74c3c, roughness: 0.1 },
    { color: 0x8e44ad, roughness: 0.1 },
    { color: 0x1abc9c, roughness: 0.1 },
    { color: 0x2980b9, roughness: 0, metalness: 0.5 },
    { color: 0x2c3e50, roughness: 0.1, metalness: 0.5 }
];

function getRandomMaterial() {
    const randomInt = gsap.utils.random(1, 10, 1);
    if (randomInt === 1) {
        return new THREE.MeshNormalMaterial();
    }
    return new THREE.MeshStandardMaterial(gsap.utils.random(materialParams));
}


const Geometry = ({ position, geometry, rate }) => {
    const meshRef = useRef();
    const [visible, setVisible] = useState(false);
    
    const [material, setMaterial] = useState(() => getRandomMaterial());

    const [reducedMotionRate, setReducedMotionRate] = useState(1);
    useEffect(() => {
        const mediaQuery = window.matchMedia('(prefers-reduced-motion: reduce)');
        setReducedMotionRate(mediaQuery.matches ? 0 : 1);
        
        const handleChange = (e) => {
            setReducedMotionRate(e.matches ? 0 : 1);
        };
        mediaQuery.addEventListener('change', handleChange);
        return () => mediaQuery.removeEventListener('change', handleChange);
    }, []);

    const compoundRate = useMemo(() => rate * reducedMotionRate, [rate, reducedMotionRate]);

    const handleClick = (e) => {
        e.stopPropagation();
        gsap.utils.random(soundEffects).play();

        gsap.to(e.object.rotation, {
            x: `+=${gsap.utils.random(0, 3)}`,
            y: `+=${gsap.utils.random(0, 3)}`,
            z: `+=${gsap.utils.random(0, 3)}`,
            duration: 1.3,
            ease: "elastic.out(1,0.3)",
            yoyo: true,
        });

        setMaterial(getRandomMaterial());
    };

    useEffect(() => {
        if (meshRef.current) {
            setVisible(true);
            gsap.fromTo(
                meshRef.current.scale,
                { x: 0, y: 0, z: 0 },
                {
                    x: 1,
                    y: 1,
                    z: 1,
                    duration: gsap.utils.random(0.8, 1.2),
                    delay: gsap.utils.random(0, 0.5),
                    ease: "elastic.out(1, 0.3)",
                }
            );
        }
    }, []);

    return (
        <group position={position.map((p) => p * 2)}>
            <Float
                speed={5 * compoundRate}
                rotationIntensity={6 * compoundRate}
                floatIntensity={5 * compoundRate}
            >
                <mesh
                    ref={meshRef}
                    geometry={geometry}
                    material={material}
                    onClick={handleClick}
                    visible={visible}
                    scale={[0, 0, 0]}
                />
            </Float>
        </group>
    );
};

export default Geometry; 