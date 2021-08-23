import './App.css';
import * as THREE from 'three';
import React, { Suspense, useRef, useState } from 'react';
import { Canvas, useFrame, userLoader } from 'react-three-fiber';
import img1 from './img/img1.jpg';
import img2 from './img/img2.jpg';
import disp from './img/displacement/d1.jpg';
import './ImageMaterial'

function FadingImage() {
  const ref = useRef()
  const [texture1, texture2, dispTexture] = useLoader(THREE.TextureLoader, [img1, img2, disp])
  const [hovered, setHover] = useState(false)
  useFrame(() => (ref.current.dispFactor = THREE.MathUtils.lerp(ref.current.dispFactor, !!hovered, 0.1)))
  return (
    <mesh onPointerMove={(e) => setHover(true)} onPointerOut={(e) => setHover(false)}>
      <planeGeometry />
      <imageFadeMaterial ref={ref} tex={texture1} tex2={texture2} disp={dispTexture} />
    </mesh>
  )
}

function App() {
  return (
    <div className="app">
      <h1>Hello World</h1>
    </div>
  );
}

export default App;
