import React, { useEffect, useRef, useState } from 'react';
import * as THREE from 'three';

const Background3D = () => {
  const mountRef = useRef(null);
  const [isInitialized, setIsInitialized] = useState(false);
  const sceneRef = useRef(null);
  const cameraRef = useRef(null);
  const rendererRef = useRef(null);
  const particlesMeshRef = useRef(null);
  const frameIdRef = useRef(null);

  useEffect(() => {
    if (!mountRef.current || isInitialized) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
    const renderer = new THREE.WebGLRenderer({ 
      alpha: true, 
      antialias: true,
      powerPreference: "high-performance"
    });
    
    // Store refs for cleanup
    sceneRef.current = scene;
    cameraRef.current = camera;
    rendererRef.current = renderer;

    try {
      renderer.setSize(window.innerWidth, window.innerHeight);
      renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      mountRef.current.appendChild(renderer.domElement);

      // Create particles
      const particlesGeometry = new THREE.BufferGeometry();
      const particlesCount = 5000;
      const posArray = new Float32Array(particlesCount * 3);

      for(let i = 0; i < particlesCount * 3; i++) {
        posArray[i] = (Math.random() - 0.5) * 5;
      }

      particlesGeometry.setAttribute('position', new THREE.BufferAttribute(posArray, 3));

      const particlesMaterial = new THREE.PointsMaterial({
        size: 0.005,
        color: '#ffffff',
        transparent: true,
        opacity: 0.5,
        sizeAttenuation: true,
      });

      const particlesMesh = new THREE.Points(particlesGeometry, particlesMaterial);
      scene.add(particlesMesh);
      particlesMeshRef.current = particlesMesh;

      camera.position.z = 2;

      // Mouse movement effect
      let mouseX = 0;
      let mouseY = 0;

      const handleMouseMove = (event) => {
        mouseX = event.clientX / window.innerWidth - 0.5;
        mouseY = event.clientY / window.innerHeight - 0.5;
      };

      window.addEventListener('mousemove', handleMouseMove);

      // Animation
      const animate = () => {
        if (!particlesMeshRef.current || !rendererRef.current || !sceneRef.current || !cameraRef.current) return;

        frameIdRef.current = requestAnimationFrame(animate);

        particlesMeshRef.current.rotation.y += 0.001;
        particlesMeshRef.current.rotation.x += 0.001;

        // Smooth camera movement based on mouse position
        cameraRef.current.position.x += (mouseX * 0.5 - cameraRef.current.position.x) * 0.05;
        cameraRef.current.position.y += (-mouseY * 0.5 - cameraRef.current.position.y) * 0.05;

        rendererRef.current.render(sceneRef.current, cameraRef.current);
      };

      animate();

      // Handle resize
      const handleResize = () => {
        if (!rendererRef.current || !cameraRef.current) return;

        const width = window.innerWidth;
        const height = window.innerHeight;

        cameraRef.current.aspect = width / height;
        cameraRef.current.updateProjectionMatrix();
        rendererRef.current.setSize(width, height);
        rendererRef.current.setPixelRatio(Math.min(window.devicePixelRatio, 2));
      };

      window.addEventListener('resize', handleResize);
      setIsInitialized(true);

      // Cleanup function
      return () => {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('resize', handleResize);
        
        if (frameIdRef.current) {
          cancelAnimationFrame(frameIdRef.current);
        }

        if (mountRef.current && rendererRef.current) {
          mountRef.current.removeChild(rendererRef.current.domElement);
        }

        if (particlesMeshRef.current) {
          particlesMeshRef.current.geometry.dispose();
          particlesMeshRef.current.material.dispose();
        }

        if (rendererRef.current) {
          rendererRef.current.dispose();
        }
      };
    } catch (error) {
      console.error('Error initializing Three.js:', error);
    }
  }, [isInitialized]);

  return (
    <div 
      ref={mountRef} 
      className="fixed top-0 left-0 w-full h-full -z-10 bg-transparent"
      style={{ pointerEvents: 'none' }}
    />
  );
};

export default Background3D;
