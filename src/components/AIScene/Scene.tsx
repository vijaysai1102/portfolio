import { useEffect, useRef } from "react";
import * as THREE from "three";
import { setProgress } from "../Loading";
import { useLoading } from "../../context/LoadingProvider";

const Scene = () => {
  const mountRef = useRef<HTMLDivElement>(null);
  const { setLoading } = useLoading();

  useEffect(() => {
    if (!mountRef.current) return;

    const container = mountRef.current;
    const w = container.clientWidth;
    const h = container.clientHeight;

    /* Renderer */
    const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });
    renderer.setSize(w, h);
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));
    renderer.toneMapping = THREE.ACESFilmicToneMapping;
    container.appendChild(renderer.domElement);

    /* Scene / Camera */
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(50, w / h, 0.1, 1000);
    camera.position.set(0, 0, 6);

    /* Lighting */
    scene.add(new THREE.AmbientLight(0x111122, 2));
    const dirLight = new THREE.DirectionalLight(0x5eead4, 3);
    dirLight.position.set(5, 5, 5);
    scene.add(dirLight);
    const rimLight = new THREE.PointLight(0x22d3ee, 4, 20);
    rimLight.position.set(-4, 2, -2);
    scene.add(rimLight);

    /* Core orb */
    const orbGeo = new THREE.SphereGeometry(1, 64, 64);
    const orbMat = new THREE.MeshStandardMaterial({
      color: 0x0a1628,
      roughness: 0.1,
      metalness: 0.9,
      emissive: new THREE.Color(0x0d2a40),
      emissiveIntensity: 0.6,
    });
    const orb = new THREE.Mesh(orbGeo, orbMat);
    scene.add(orb);

    /* Wireframe shell */
    const wireGeo = new THREE.IcosahedronGeometry(1.05, 3);
    const wireMat = new THREE.MeshBasicMaterial({
      color: 0x5eead4,
      wireframe: true,
      opacity: 0.18,
      transparent: true,
    });
    const wireframe = new THREE.Mesh(wireGeo, wireMat);
    scene.add(wireframe);

    /* Orbital rings */
    const ringColors = [0x5eead4, 0x22d3ee, 0x0ea5e9];
    const rings: THREE.Mesh[] = [];
    ringColors.forEach((color, i) => {
      const geo = new THREE.TorusGeometry(1.5 + i * 0.35, 0.008, 8, 120);
      const mat = new THREE.MeshBasicMaterial({ color, opacity: 0.5 - i * 0.1, transparent: true });
      const ring = new THREE.Mesh(geo, mat);
      ring.rotation.x = Math.PI / 3 + i * 0.5;
      ring.rotation.y = i * 0.7;
      rings.push(ring);
      scene.add(ring);
    });

    /* Floating particles */
    const particleCount = 300;
    const positions = new Float32Array(particleCount * 3);
    for (let i = 0; i < particleCount; i++) {
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);
      const r = 1.8 + Math.random() * 2.2;
      positions[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      positions[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      positions[i * 3 + 2] = r * Math.cos(phi);
    }
    const pGeo = new THREE.BufferGeometry();
    pGeo.setAttribute("position", new THREE.BufferAttribute(positions, 3));
    const pMat = new THREE.PointsMaterial({ color: 0x5eead4, size: 0.03, transparent: true, opacity: 0.7 });
    const particles = new THREE.Points(pGeo, pMat);
    scene.add(particles);

    /* Mouse tracking */
    let mouse = { x: 0, y: 0 };
    const onMouseMove = (e: MouseEvent) => {
      mouse.x = (e.clientX / window.innerWidth) * 2 - 1;
      mouse.y = -((e.clientY / window.innerHeight) * 2 - 1);
    };
    document.addEventListener("mousemove", onMouseMove);

    /* Resize */
    const onResize = () => {
      if (!container) return;
      const nw = container.clientWidth;
      const nh = container.clientHeight;
      renderer.setSize(nw, nh);
      camera.aspect = nw / nh;
      camera.updateProjectionMatrix();
    };
    window.addEventListener("resize", onResize);

    /* Animate */
    const clock = new THREE.Clock();
    let targetRotX = 0, targetRotY = 0;
    const animate = () => {
      const elapsed = clock.getElapsedTime();
      targetRotY += (mouse.x * 0.3 - targetRotY) * 0.05;
      targetRotX += (-mouse.y * 0.2 - targetRotX) * 0.05;

      orb.rotation.y = elapsed * 0.2 + targetRotY;
      orb.rotation.x = targetRotX;
      wireframe.rotation.y = -elapsed * 0.15 + targetRotY;
      wireframe.rotation.x = elapsed * 0.05 + targetRotX;
      particles.rotation.y = elapsed * 0.05;

      rings.forEach((r, i) => {
        r.rotation.z = elapsed * (0.3 + i * 0.1);
        r.rotation.x = Math.PI / 3 + i * 0.5 + Math.sin(elapsed * 0.2) * 0.1;
      });

      rimLight.position.x = Math.sin(elapsed * 0.5) * 5;
      rimLight.position.z = Math.cos(elapsed * 0.5) * 5;

      renderer.render(scene, camera);
      animId = requestAnimationFrame(animate);
    };
    let animId = requestAnimationFrame(animate);

    /* Fake load progress then resolve */
    const progress = setProgress(setLoading);
    setTimeout(() => {
      progress.loaded();
    }, 600);

    return () => {
      cancelAnimationFrame(animId);
      document.removeEventListener("mousemove", onMouseMove);
      window.removeEventListener("resize", onResize);
      renderer.dispose();
      if (container.contains(renderer.domElement)) {
        container.removeChild(renderer.domElement);
      }
    };
  }, [setLoading]);

  return (
    <div className="character-container">
      <div className="character-model" ref={mountRef}>
        <div className="character-rim"></div>
      </div>
    </div>
  );
};

export default Scene;
