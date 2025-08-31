import React, { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Stage, useGLTF } from "@react-three/drei";

const DeveloperModel = () => {
  const model = useGLTF("/developer/scene.gltf"); // Replace with your 3D model path
  return <primitive object={model.scene} scale={1} position={[0, -1, 0]} />;
};

const DeveloperCanvas = () => (
  <Canvas camera={{ position: [3, 1, 5], fov: 50 }}>
    <ambientLight intensity={0.6} />
    <directionalLight position={[10, 10, 5]} intensity={1} />
    <Suspense fallback={null}>
      <Stage environment="city" intensity={0.6}>
        <DeveloperModel />
      </Stage>
    </Suspense>
    <OrbitControls enableZoom={false} autoRotate autoRotateSpeed={2} />
  </Canvas>
);

export default DeveloperCanvas;
