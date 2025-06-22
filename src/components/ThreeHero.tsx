import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Environment, PresentationControls, ContactShadows } from '@react-three/drei';
import * as THREE from 'three';

const AnimatedScreen = () => {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (ref.current) {
      const t = state.clock.getElapsedTime();
      ref.current.rotation.y = Math.sin(t) * 0.2;
      ref.current.rotation.x = Math.cos(t / 2) * 0.1;
    }
  });

  return (
    <Float speed={2} rotationIntensity={0.4} floatIntensity={0.6}>
      <mesh ref={ref} position={[0, 0, 0]} rotation={[0, Math.PI, 0]} castShadow>
        <planeGeometry args={[4, 2.5]} />
        <meshStandardMaterial 
          color="#0c87eb"
          emissive="#0c87eb"
          emissiveIntensity={0.5}
          roughness={0.3}
          metalness={0.6}
        />
      </mesh>
    </Float>
  );
};

const ThreeHero: React.FC = () => {
  return (
    <Canvas
      shadows
      camera={{ position: [0, 0, 8], fov: 50 }}
      style={{ background: 'transparent' }}
    >
      <ambientLight intensity={0.6} />
      <spotLight 
        position={[10, 15, 10]} 
        angle={0.2} 
        penumbra={1} 
        intensity={1} 
        castShadow 
      />
      <pointLight position={[-10, -10, -10]} intensity={0.5} />
      <fog attach="fog" args={['#000', 5, 15]} />

      <PresentationControls
        global
        rotation={[0, 0, 0]}
        polar={[-Math.PI / 6, Math.PI / 6]}
        azimuth={[-Math.PI / 6, Math.PI / 6]}
        config={{ mass: 1, tension: 400 }}
        snap={{ mass: 2, tension: 300 }}
      >
        <AnimatedScreen />
      </PresentationControls>

      <ContactShadows
        position={[0, -2.5, 0]}
        opacity={0.3}
        scale={8}
        blur={1.5}
      />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default ThreeHero;
