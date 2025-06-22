import React, { useRef } from 'react';
import { Canvas, useFrame } from '@react-three/fiber';
import { Float, Text, Environment } from '@react-three/drei';
import * as THREE from 'three';

const SkillSphere = ({ position, size, color, text }: { position: [number, number, number], size: number, color: string, text: string }) => {
  const ref = useRef<THREE.Mesh>(null);
  
  useFrame((state) => {
    if (ref.current) {
      ref.current.rotation.x = Math.sin(state.clock.getElapsedTime() * 0.3) * 0.2;
      ref.current.rotation.y = Math.sin(state.clock.getElapsedTime() * 0.2) * 0.2;
    }
  });

  return (
    <Float
      speed={2}
      rotationIntensity={0.5}
      floatIntensity={1}
    >
      <mesh ref={ref} position={position}>
        <sphereGeometry args={[size, 32, 32]} />
        <meshStandardMaterial 
          color={color} 
          roughness={0.1} 
          metalness={0.8} 
        />
        <Text
          position={[0, 0, size + 0.1]}
          fontSize={size * 0.7}
          color="white"
          anchorX="center"
          anchorY="middle"
        >
          {text}
        </Text>
      </mesh>
    </Float>
  );
};

const SkillsScene = () => {
  const skills = [
    'HTML', 'CSS', 'JavaScript', 'TypeScript', 'PHP',
    'Laravel', 'Node.js', 'React', 'React Native',
  ];

  const radius = 4;
  const size = 0.5;

  return (
    <>
      {skills.map((text, index) => {
        const phi = Math.acos(-1 + (2 * index) / skills.length); // polar angle
        const theta = Math.sqrt(skills.length * Math.PI) * phi; // azimuthal angle

        const x = radius * Math.cos(theta) * Math.sin(phi);
        const y = radius * Math.sin(theta) * Math.sin(phi);
        const z = radius * Math.cos(phi);

        return (
          <SkillSphere
            key={index}
            position={[x, y, z]}
            size={size}
            color={`hsl(${index * 40}, 70%, 60%)`} // nicely varied colors
            text={text}
          />
        );
      })}
    </>
  );
};


const ThreeSkillsCanvas: React.FC = () => {
  return (
    <Canvas
      camera={{ position: [0, 0, 10], fov: 45 }}
      style={{ height: '100%' }}
    >
      <ambientLight intensity={0.5} />
      <pointLight position={[10, 10, 10]} intensity={0.5} />
      <SkillsScene />
      <Environment preset="sunset" />
    </Canvas>
  );
};

export default ThreeSkillsCanvas;