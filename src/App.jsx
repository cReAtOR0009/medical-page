import React, { Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Capsule, Environment, OrbitControls, MeshTransmissionMaterial, useFBO } from "@react-three/drei";
import Dna3d  from "./dna"

function Loading() {
  return
    <div>

      <h2 >🌀 Loading...</h2>;
    </div>
}
function App() {

 
  return (
    <Canvas>
      <color args={["#d1e2ef"]} attach="background" />

      <Capsule args={[0.9,2.5,4,32]}>
        {/* <meshPhysicalMaterial color={"#d1e2ef"} /> */}
        <MeshTransmissionMaterial thickness={0.1} anisotropy={2} chromaticAberration={0.3}/>
      {/* <Box /> */}
      </Capsule>
      <Suspense fallback={<Loading />}>
      <Dna3d scale={'0.1'} position={[0, -1.6, -0.05]}/>
        <Environment preset="city" />
      </Suspense>
      <OrbitControls />
    </Canvas>
  );
}

export default App;


