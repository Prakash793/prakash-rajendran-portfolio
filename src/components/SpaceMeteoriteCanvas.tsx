'use client';

import React, { useRef, useEffect, useState } from 'react';
import { RotateCw, Move3d, Sparkles, Orbit, Compass } from 'lucide-react';
import { soundFx } from '@/utils/sound';

export default function SpaceMeteoriteCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [rotationSpeed, setRotationSpeed] = useState(0.006);
  const [composition, setComposition] = useState<'chondrite' | 'iron-nickel' | 'silicate'>('chondrite');

  const mouseRef = useRef({
    isDown: false,
    lastX: 0,
    lastY: 0,
    rotX: 0.35,
    rotY: 0.8,
    velX: 0.004,
    velY: 0.006,
  });

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = canvas.parentElement?.clientWidth || 600);
    let height = (canvas.height = canvas.parentElement?.clientHeight || 500);

    const handleResize = () => {
      if (!canvas.parentElement) return;
      width = canvas.width = canvas.parentElement.clientWidth;
      height = canvas.height = canvas.parentElement.clientHeight;
    };

    window.addEventListener('resize', handleResize);

    // 1. Generate procedural 3D Meteorite / Asteroid mesh vertices & polygonal faces
    interface Point3D {
      x: number;
      y: number;
      z: number;
    }

    interface Face {
      indices: number[];
      normalZ: number;
      depth: number;
      color: string;
      wireColor: string;
    }

    const baseRadius = Math.min(width, height) * 0.28;
    const vertices: Point3D[] = [];
    const faces: number[][] = [];

    // Icosahedron / Geodesic subdivision with organic craggy meteorite noise
    const latBands = 18;
    const lonBands = 24;

    for (let lat = 0; lat <= latBands; lat++) {
      const theta = (lat * Math.PI) / latBands;
      const sinTheta = Math.sin(theta);
      const cosTheta = Math.cos(theta);

      for (let lon = 0; lon <= lonBands; lon++) {
        const phi = (lon * 2 * Math.PI) / lonBands;
        const sinPhi = Math.sin(phi);
        const cosPhi = Math.cos(phi);

        // Procedural craggy noise (craters, ridges, irregular rock silhouette)
        const n1 = Math.sin(lat * 0.9) * Math.cos(lon * 1.2);
        const n2 = Math.cos(lat * 2.1 + lon * 1.8) * 0.45;
        const n3 = Math.sin(lon * 3.2) * 0.25;
        const craterDent = (Math.sin(lat * 1.5) > 0.6 && Math.cos(lon * 2.0) > 0.5) ? -0.35 : 0;
        const radiusNoise = 1 + (n1 + n2 + n3 + craterDent) * 0.24;

        const r = baseRadius * radiusNoise;
        const x = r * sinTheta * cosPhi;
        const y = r * cosTheta;
        const z = r * sinTheta * sinPhi;

        vertices.push({ x, y, z });
      }
    }

    for (let lat = 0; lat < latBands; lat++) {
      for (let lon = 0; lon < lonBands; lon++) {
        const first = lat * (lonBands + 1) + lon;
        const second = first + lonBands + 1;
        faces.push([first, second, first + 1]);
        faces.push([second, second + 1, first + 1]);
      }
    }

    // 2. Starfield Background Particle System
    const stars: { x: number; y: number; size: number; alpha: number; speed: number }[] = [];
    for (let i = 0; i < 90; i++) {
      stars.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 1.8 + 0.4,
        alpha: Math.random() * 0.8 + 0.2,
        speed: Math.random() * 0.2 + 0.05,
      });
    }

    // Render loop
    const render = () => {
      ctx.clearRect(0, 0, width, height);

      // Render starfield
      ctx.fillStyle = '#38bdf8';
      for (const s of stars) {
        s.y -= s.speed;
        if (s.y < 0) s.y = height;
        ctx.globalAlpha = s.alpha * 0.7;
        ctx.beginPath();
        ctx.arc(s.x, s.y, s.size, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;

      // Inertial auto-rotation when not dragging
      if (!mouseRef.current.isDown) {
        mouseRef.current.rotX += mouseRef.current.velX;
        mouseRef.current.rotY += mouseRef.current.velY;
        // Natural dampening toward gentle drift
        mouseRef.current.velX = mouseRef.current.velX * 0.98 + 0.00008;
        mouseRef.current.velY = mouseRef.current.velY * 0.98 + 0.00015;
      }

      const rotX = mouseRef.current.rotX;
      const rotY = mouseRef.current.rotY;

      const cosX = Math.cos(rotX);
      const sinX = Math.sin(rotX);
      const cosY = Math.cos(rotY);
      const sinY = Math.sin(rotY);

      // Project vertices with 3D rotation matrix
      const projected: { x: number; y: number; z: number }[] = [];
      const centerX = width * 0.5;
      const centerY = height * 0.5;

      for (const v of vertices) {
        // Y-axis rotation
        const x1 = v.x * cosY + v.z * sinY;
        const z1 = -v.x * sinY + v.z * cosY;

        // X-axis rotation
        const y2 = v.y * cosX - z1 * sinX;
        const z2 = v.y * sinX + z1 * cosX;

        // Perspective projection
        const fov = 650;
        const scale = fov / (fov + z2);
        projected.push({
          x: centerX + x1 * scale,
          y: centerY + y2 * scale,
          z: z2,
        });
      }

      // Compute faces with lighting normal & Painter's algorithm sort
      const lightX = 0.6;
      const lightY = -0.7;
      const lightZ = 0.9;
      const len = Math.sqrt(lightX * lightX + lightY * lightY + lightZ * lightZ);
      const lx = lightX / len;
      const ly = lightY / len;
      const lz = lightZ / len;

      const renderedFaces: Face[] = [];

      for (let i = 0; i < faces.length; i += 2) {
        const [i0, i1, i2] = faces[i];
        const p0 = projected[i0];
        const p1 = projected[i1];
        const p2 = projected[i2];

        // Face normal (cross product)
        const ax = p1.x - p0.x;
        const ay = p1.y - p0.y;
        const bx = p2.x - p0.x;
        const by = p2.y - p0.y;
        const normalZ = ax * by - ay * bx;

        // Back-face culling (only render visible facing polygons)
        if (normalZ > 0) {
          const depth = (p0.z + p1.z + p2.z) / 3;

          // Compute directional light intensity (0.1 to 1.0)
          const normLen = Math.sqrt(ax * ax + ay * ay + 1);
          const intensity = Math.max(0.12, Math.min(1.0, (ax * lx + ay * ly + normalZ * 0.001) / normLen + 0.45));

          // Space rock color paletting
          let r = 18;
          let g = 26;
          let b = 40;
          let wireColor = 'rgba(6, 182, 212, 0.25)';

          if (composition === 'iron-nickel') {
            r = Math.floor(25 * intensity + 20);
            g = Math.floor(35 * intensity + 25);
            b = Math.floor(55 * intensity + 45);
            wireColor = `rgba(56, 189, 248, ${intensity * 0.45 + 0.1})`;
          } else if (composition === 'silicate') {
            r = Math.floor(45 * intensity + 25);
            g = Math.floor(30 * intensity + 15);
            b = Math.floor(20 * intensity + 10);
            wireColor = `rgba(245, 158, 11, ${intensity * 0.45 + 0.1})`;
          } else {
            // Chondrite (Deep Space Cyber Metallic NASA theme)
            r = Math.floor(15 * intensity + 12);
            g = Math.floor(28 * intensity + 20);
            b = Math.floor(48 * intensity + 35);
            wireColor = `rgba(14, 165, 233, ${intensity * 0.4 + 0.08})`;
          }

          const color = `rgb(${r}, ${g}, ${b})`;

          renderedFaces.push({
            indices: [i0, i1, i2],
            normalZ,
            depth,
            color,
            wireColor,
          });
        }
      }

      // Sort back-to-front
      renderedFaces.sort((a, b) => b.depth - a.depth);

      // Draw meteorite polygonal facets with atmospheric cyan rim glow
      for (const face of renderedFaces) {
        const [i0, i1, i2] = face.indices;
        const p0 = projected[i0];
        const p1 = projected[i1];
        const p2 = projected[i2];

        ctx.beginPath();
        ctx.moveTo(p0.x, p0.y);
        ctx.lineTo(p1.x, p1.y);
        ctx.lineTo(p2.x, p2.y);
        ctx.closePath();

        ctx.fillStyle = face.color;
        ctx.fill();

        ctx.strokeStyle = face.wireColor;
        ctx.lineWidth = 0.75;
        ctx.stroke();
      }

      // NASA Target Reticle & Orbit Rings
      ctx.strokeStyle = 'rgba(6, 182, 212, 0.25)';
      ctx.lineWidth = 1;
      ctx.setLineDash([4, 6]);
      ctx.beginPath();
      ctx.arc(centerX, centerY, baseRadius * 1.35, 0, Math.PI * 2);
      ctx.stroke();

      ctx.strokeStyle = 'rgba(245, 158, 11, 0.2)';
      ctx.beginPath();
      ctx.ellipse(centerX, centerY, baseRadius * 1.5, baseRadius * 0.7, mouseRef.current.rotY * 0.5, 0, Math.PI * 2);
      ctx.stroke();
      ctx.setLineDash([]);

      animationFrameId = requestAnimationFrame(render);
    };

    render();

    return () => {
      cancelAnimationFrame(animationFrameId);
      window.removeEventListener('resize', handleResize);
    };
  }, [composition]);

  // Mouse & Touch Orbit Controls (Interactive click & drag rotation)
  const handleMouseDown = (e: React.MouseEvent) => {
    mouseRef.current.isDown = true;
    mouseRef.current.lastX = e.clientX;
    mouseRef.current.lastY = e.clientY;
    setIsDragging(true);
    soundFx.playClick();
  };

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!mouseRef.current.isDown) return;
    const deltaX = e.clientX - mouseRef.current.lastX;
    const deltaY = e.clientY - mouseRef.current.lastY;

    mouseRef.current.rotY += deltaX * 0.008;
    mouseRef.current.rotX -= deltaY * 0.008;

    mouseRef.current.velX = -deltaY * 0.002;
    mouseRef.current.velY = deltaX * 0.002;

    mouseRef.current.lastX = e.clientX;
    mouseRef.current.lastY = e.clientY;
  };

  const handleMouseUp = () => {
    mouseRef.current.isDown = false;
    setIsDragging(false);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    if (e.touches.length === 0) return;
    mouseRef.current.isDown = true;
    mouseRef.current.lastX = e.touches[0].clientX;
    mouseRef.current.lastY = e.touches[0].clientY;
    setIsDragging(true);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    if (!mouseRef.current.isDown || e.touches.length === 0) return;
    const deltaX = e.touches[0].clientX - mouseRef.current.lastX;
    const deltaY = e.touches[0].clientY - mouseRef.current.lastY;

    mouseRef.current.rotY += deltaX * 0.008;
    mouseRef.current.rotX -= deltaY * 0.008;

    mouseRef.current.lastX = e.touches[0].clientX;
    mouseRef.current.lastY = e.touches[0].clientY;
  };

  const handleTouchEnd = () => {
    mouseRef.current.isDown = false;
    setIsDragging(false);
  };

  return (
    <div className="relative w-full h-[420px] sm:h-[480px] lg:h-[520px] rounded-3xl bg-slate-950/90 border border-cyan-500/30 overflow-hidden shadow-2xl backdrop-blur-2xl flex flex-col justify-between p-4 sm:p-6 group select-none">
      
      {/* Top HUD Readout Bar */}
      <div className="flex items-center justify-between z-20">
        <div className="flex items-center gap-2.5">
          <div className="w-8 h-8 rounded-lg bg-cyan-500/20 border border-cyan-500/40 flex items-center justify-center text-cyan-400">
            <Orbit className="w-4 h-4 animate-spin" style={{ animationDuration: '20s' }} />
          </div>
          <div>
            <div className="text-[10px] font-mono font-bold uppercase tracking-widest text-cyan-400 flex items-center gap-1.5">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-ping" />
              NASA SPECTRAL METEORITE ANALYZER
            </div>
            <div className="text-xs font-bold text-white font-mono">
              ASTEROID_SPECIMEN // RECAM_094
            </div>
          </div>
        </div>

        {/* Real-time Interaction Status Indicator */}
        <div className="flex items-center gap-2 px-3 py-1 rounded-full bg-cyan-950/80 border border-cyan-500/40 text-[10px] font-mono text-cyan-300">
          <Move3d className="w-3.5 h-3.5 animate-pulse text-amber-400" />
          <span className="hidden sm:inline">
            {isDragging ? 'ROTATING 3D ORBIT...' : 'CLICK & DRAG TO ROTATE'}
          </span>
          <span className="sm:hidden">ROTATE</span>
        </div>
      </div>

      {/* Interactive 3D Canvas */}
      <div
        className="absolute inset-0 cursor-grab active:cursor-grabbing z-10 flex items-center justify-center"
        onMouseDown={handleMouseDown}
        onMouseMove={handleMouseMove}
        onMouseUp={handleMouseUp}
        onMouseLeave={handleMouseUp}
        onTouchStart={handleTouchStart}
        onTouchMove={handleTouchMove}
        onTouchEnd={handleTouchEnd}
      >
        <canvas ref={canvasRef} className="w-full h-full block" />
      </div>

      {/* Four Corner Sci-Fi Bracket Overlays */}
      <div className="absolute top-3 left-3 w-4 h-4 border-t-2 border-l-2 border-cyan-400 pointer-events-none z-20" />
      <div className="absolute top-3 right-3 w-4 h-4 border-t-2 border-r-2 border-cyan-400 pointer-events-none z-20" />
      <div className="absolute bottom-3 left-3 w-4 h-4 border-b-2 border-l-2 border-amber-400 pointer-events-none z-20" />
      <div className="absolute bottom-3 right-3 w-4 h-4 border-b-2 border-r-2 border-amber-400 pointer-events-none z-20" />

      {/* Bottom Controls & Composition Filter */}
      <div className="flex flex-col sm:flex-row items-center justify-between gap-3 z-20 pt-2 border-t border-white/10 pointer-events-auto">
        
        {/* Mineral Composition Filters */}
        <div className="flex items-center gap-1.5 bg-slate-900/90 p-1 rounded-xl border border-white/10">
          <span className="text-[10px] font-mono text-slate-400 px-2">SPECTRA:</span>
          {[
            { id: 'chondrite', label: 'Carbonaceous' },
            { id: 'iron-nickel', label: 'Iron-Nickel' },
            { id: 'silicate', label: 'Silicate Basalt' },
          ].map((type) => (
            <button
              key={type.id}
              onClick={() => {
                soundFx.playClick();
                setComposition(type.id as any);
              }}
              className={`px-2.5 py-1 rounded-lg text-[10px] font-mono font-bold transition-all ${
                composition === type.id
                  ? 'bg-cyan-500 text-slate-950 shadow-md shadow-cyan-500/30'
                  : 'text-slate-400 hover:text-white hover:bg-white/5'
              }`}
            >
              {type.label}
            </button>
          ))}
        </div>

        {/* Live Telemetry Sensor Data */}
        <div className="flex items-center gap-4 text-[10px] font-mono text-slate-300">
          <div className="flex items-center gap-1.5">
            <span className="text-cyan-400">VELOCITY:</span>
            <span className="font-bold text-white">41.8 km/s</span>
          </div>
          <div className="flex items-center gap-1.5">
            <span className="text-amber-400">TRAJECTORY:</span>
            <span className="font-bold text-emerald-400">99.8% STABLE</span>
          </div>
        </div>

      </div>

    </div>
  );
}
