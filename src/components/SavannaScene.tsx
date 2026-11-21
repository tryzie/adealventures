import { useEffect, useRef } from 'react';

// Animated golden-hour savanna drawn on a canvas: layered hills with acacias,
// walking giraffes, birds and gentle parallax on pointer move and scroll.
// Switches to a starry night scene in dark mode. Draws one still frame when
// the visitor prefers reduced motion.

const palettes = {
  day: { sky: ['#F1C27D', '#F6DDAA', '#FBEBCB'], sun: '#FFF3D6', glow: 'rgba(255,214,140,.55)', layers: ['#D9B987', '#B69866', '#7E7A45', '#4C5128', '#262A16'] },
  night: { sky: ['#0F1424', '#252B3F', '#4B3E43'], sun: '#F3EBD2', glow: 'rgba(240,200,140,.18)', layers: ['#3A3536', '#2C2B2B', '#20231A', '#171A11', '#0E100A'] },
};

export default function SavannaScene() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const cv = ref.current!;
    const ctx = cv.getContext('2d')!;
    const reduce = matchMedia('(prefers-reduced-motion: reduce)').matches;
    const darkMq = matchMedia('(prefers-color-scheme: dark)');
    let W = 0, H = 0, mx = 0, my = 0, tmx = 0, tmy = 0, scroll = 0, raf = 0;

    let seed = 7;
    const rnd = () => { seed = (seed * 16807) % 2147483647; return (seed - 1) / 2147483646; };
    const ridge = (x: number, i: number) => Math.sin(x * 0.004 * (i + 1) + i * 1.7) * 14 + Math.sin(x * 0.011 + i * 3.1) * 6 + Math.sin(x * 0.0013 + i) * 22;
    const trees: { layer: number; x: number; s: number }[] = [];
    [0, 2, 3, 3, 2].forEach((n, layer) => { for (let j = 0; j < n; j++) trees.push({ layer, x: rnd(), s: 0.6 + rnd() * 0.6 }); });
    trees.push({ layer: 4, x: 0.82, s: 1.9 }, { layer: 3, x: 0.12, s: 1.3 });
    const birds = Array.from({ length: 7 }, (_, i) => ({ x: 0.2 + i * 0.035 + rnd() * 0.02, y: 0.2 + rnd() * 0.06 + (i % 2) * 0.02, p: rnd() * 6 }));

    const size = () => {
      const r = cv.getBoundingClientRect();
      const dpr = Math.min(2, window.devicePixelRatio || 1);
      W = r.width; H = r.height;
      cv.width = W * dpr; cv.height = H * dpr;
      ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    };

    const acacia = (x: number, y: number, s: number, col: string) => {
      ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineCap = 'round';
      ctx.lineWidth = 3.2 * s; ctx.beginPath(); ctx.moveTo(x, y); ctx.quadraticCurveTo(x - 2 * s, y - 22 * s, x + 3 * s, y - 38 * s); ctx.stroke();
      ctx.lineWidth = 2 * s; ctx.beginPath(); ctx.moveTo(x + s, y - 26 * s); ctx.lineTo(x - 16 * s, y - 40 * s); ctx.moveTo(x + 2 * s, y - 30 * s); ctx.lineTo(x + 20 * s, y - 42 * s); ctx.stroke();
      ctx.beginPath();
      ctx.ellipse(x + 2 * s, y - 44 * s, 36 * s, 6.5 * s, 0, 0, Math.PI * 2);
      ctx.ellipse(x - 14 * s, y - 42 * s, 16 * s, 5 * s, -0.05, 0, Math.PI * 2);
      ctx.ellipse(x + 20 * s, y - 43 * s, 18 * s, 5 * s, 0.05, 0, Math.PI * 2);
      ctx.fill();
    };

    const giraffe = (x: number, y: number, s: number, t: number, col: string) => {
      ctx.fillStyle = col; ctx.strokeStyle = col; ctx.lineCap = 'round';
      const sw = Math.sin(t * 2.2);
      ctx.lineWidth = 2.4 * s; ctx.beginPath();
      ([[-8, sw], [-4, -sw], [7, -sw], [11, sw]] as const).forEach(([lx, ph]) => { ctx.moveTo(x + lx * s, y - 26 * s); ctx.lineTo(x + (lx + ph * 3) * s, y); });
      ctx.stroke();
      ctx.beginPath(); ctx.ellipse(x + s, y - 29 * s, 14 * s, 6 * s, -0.12, 0, Math.PI * 2); ctx.fill();
      const bob = Math.sin(t) * 1.2 * s;
      ctx.lineWidth = 4 * s; ctx.beginPath(); ctx.moveTo(x + 10 * s, y - 31 * s); ctx.lineTo(x + 20 * s, y - 62 * s + bob); ctx.stroke();
      ctx.beginPath(); ctx.ellipse(x + 24 * s, y - 63 * s + bob, 6 * s, 2.6 * s, 0.35, 0, Math.PI * 2); ctx.fill();
      ctx.lineWidth = 1.2 * s; ctx.beginPath(); ctx.moveTo(x + 19 * s, y - 64 * s); ctx.lineTo(x + 18 * s, y - 69 * s); ctx.stroke();
    };

    const draw = (t: number) => {
      const night = darkMq.matches;
      const p = night ? palettes.night : palettes.day;
      const narrow = W < 600;
      mx += (tmx - mx) * 0.05; my += (tmy - my) * 0.05;

      const g = ctx.createLinearGradient(0, 0, 0, H);
      g.addColorStop(0, p.sky[0]); g.addColorStop(0.55, p.sky[1]); g.addColorStop(0.78, p.sky[2]);
      ctx.fillStyle = g; ctx.fillRect(0, 0, W, H);

      if (night) {
        ctx.fillStyle = '#F3EBD2';
        for (let i = 0; i < 90; i++) {
          ctx.globalAlpha = (0.4 + 0.6 * Math.abs(Math.sin(t * 0.6 + i))) * 0.8;
          ctx.fillRect((i * 733) % W, (((i * 71.3) % 97) / 97) * H * 0.55, 1.4, 1.4);
        }
        ctx.globalAlpha = 1;
      }

      const sx = W * 0.7 - mx * 6, sy = H * 0.56 - scroll * 0.15;
      const sg = ctx.createRadialGradient(sx, sy, 0, sx, sy, W * 0.28);
      sg.addColorStop(0, p.glow); sg.addColorStop(1, 'rgba(0,0,0,0)');
      ctx.fillStyle = sg; ctx.fillRect(0, 0, W, H);
      ctx.fillStyle = p.sun; ctx.beginPath(); ctx.arc(sx, sy, Math.max(34, W * 0.055), 0, Math.PI * 2); ctx.fill();

      ctx.strokeStyle = p.layers[3]; ctx.lineWidth = 1.6;
      birds.forEach((b) => {
        const bx = (((b.x + t * 0.006) % 1.2) - 0.1) * W - mx * 10;
        const by = b.y * H + Math.sin(t + b.p) * 4;
        const f = Math.sin(t * 6 + b.p) * 4;
        ctx.beginPath(); ctx.moveTo(bx - 7, by - f); ctx.quadraticCurveTo(bx - 3, by - 2, bx, by); ctx.quadraticCurveTo(bx + 3, by - 2, bx + 7, by - f); ctx.stroke();
      });

      const base = [0.66, 0.72, 0.78, 0.86, 0.95];
      for (let i = 0; i < 5; i++) {
        const depth = (i + 1) / 5;
        const ox = -mx * 18 * depth;
        const yb = H * base[i] - my * 8 * depth + scroll * (0.08 * (5 - i));
        const amp = (1.1 - i * 0.15) * (narrow ? 0.6 : 1);
        const hy = (x: number) => yb - ridge(x - ox * 4, i) * amp;
        ctx.fillStyle = p.layers[i]; ctx.beginPath(); ctx.moveTo(-40, H);
        for (let x = -40; x <= W + 40; x += 12) ctx.lineTo(x, hy(x));
        ctx.lineTo(W + 40, H); ctx.closePath(); ctx.fill();
        trees.filter((tr) => tr.layer === i).forEach((tr) => {
          const x = tr.x * W + ox;
          acacia(x, hy(x) + 4, tr.s * (0.55 + i * 0.18) * (narrow ? 0.7 : 1), p.layers[Math.min(4, i + 1)]);
        });
        if (i === 2) {
          const gx = (((t * 0.012) % 1.3) - 0.15) * W + ox;
          giraffe(gx, hy(gx) + 3, narrow ? 0.55 : 0.8, t, p.layers[3]);
          giraffe(gx - 34, hy(gx - 34) + 3, narrow ? 0.4 : 0.6, t + 1, p.layers[3]);
        }
      }
    };

    const start = performance.now();
    const loop = (now: number) => { draw((now - start) / 1000); raf = requestAnimationFrame(loop); };
    const still = () => draw(8);

    size();
    const onResize = () => { size(); if (reduce) still(); };
    const onMove = (e: PointerEvent) => { const r = cv.getBoundingClientRect(); tmx = (e.clientX - r.left) / r.width - 0.5; tmy = (e.clientY - r.top) / r.height - 0.5; };
    const onScroll = () => { scroll = Math.min(400, window.scrollY); };
    window.addEventListener('resize', onResize);
    cv.parentElement!.addEventListener('pointermove', onMove);
    window.addEventListener('scroll', onScroll, { passive: true });
    darkMq.addEventListener('change', onResize);
    if (reduce) still(); else raf = requestAnimationFrame(loop);

    return () => {
      cancelAnimationFrame(raf);
      window.removeEventListener('resize', onResize);
      cv.parentElement?.removeEventListener('pointermove', onMove);
      window.removeEventListener('scroll', onScroll);
      darkMq.removeEventListener('change', onResize);
    };
  }, []);

  return <canvas ref={ref} aria-hidden="true" />;
}
