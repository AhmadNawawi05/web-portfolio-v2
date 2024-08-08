import { Suspense, useState, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useGLTF } from "@react-three/drei";

import CanvasLoader from '../Loader';

const Computers = ({ isMobile }) => {
  const { scene } = useGLTF('./joker_persona_5/scene.gltf');

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        const positions = child.geometry.attributes.position.array;
        for (let i = 0; i < positions.length; i += 3) {
          console.log(`Vertex ${i / 3}: (${positions[i]}, ${positions[i + 1]}, ${positions[i + 2]})`);
          if (isNaN(positions[i]) || isNaN(positions[i + 1]) || isNaN(positions[i + 2])) {
            console.error('Found NaN value in positions attribute.');
          }
        }
      }
    });
  }, [scene]);

  return (
    <mesh>
      <hemisphereLight intensity={0.15} groundColor="black" />
      <pointLight intensity={1} />
      <spotLight position={[-20, 50, 10]} angle={0.12} penumbra={1} intensity={1} castShadow shadow-mapSize={1024} />
      <primitive 
        object={scene} 
        scale={isMobile ? 0.7 : 0.60} 
        position={isMobile ? [0, -3, -2.2] : [0, -3.30, -4.20]} 
      />
    </mesh>
  );
}

const ComputersCanvas = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia('(max-width: 500px)');

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
    <Canvas frameloop="demand" shadows camera={{ position: [20, 3, 5], fov: 25 }} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} maxPolarAngle={Math.PI / 2} minPolarAngle={Math.PI / 2} />
        <Computers isMobile={isMobile} />
      </Suspense>
      <Preload all />
    </Canvas>
  );
}

export default ComputersCanvas;
