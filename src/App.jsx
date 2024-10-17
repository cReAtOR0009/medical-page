import React, { Suspense, useState } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import { Box, Capsule, Environment, OrbitControls } from "@react-three/drei";

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

      <Capsule args={[1,2,4,32]}>
        <meshPhysicalMaterial color={"#d1e2ef"} />
      </Capsule>
      
      <Suspense fallback={<Loading />}>
        <Environment preset="city" />
      </Suspense>
      <Box />
      <OrbitControls />
    </Canvas>
  );
}

export default App;


