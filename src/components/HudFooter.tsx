import { useState, useEffect } from "react";

export function HudFooter() {
  const [seconds, setSeconds] = useState(0);
  const [playing, setPlaying] = useState(false);

  useEffect(() => {
    const interval = setInterval(() => {
      setSeconds((s) => s + 1);
    }, 1000);
    return () => clearInterval(interval);
  }, []);

  const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
  const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
  const s = String(seconds % 60).padStart(2, '0');

  return (
    <div className="ps-hud">
      <div style={{ display: 'flex', alignItems: 'center', gap: 16 }}>
        <div style={{ fontSize: 8, color: 'var(--color-ps-gold)', fontFamily: 'var(--font-pixel)' }}>
          Cope Tard Slums
        </div>
        <div>
          <span style={{ fontSize: 7, color: 'var(--color-ps-gray)', fontFamily: 'var(--font-pixel)' }}>Gil </span>
          <span style={{ fontSize: 7, color: 'var(--color-ps-white)', fontFamily: 'var(--font-pixel)' }}>42,069</span>
        </div>
        <div>
          <span style={{ fontSize: 7, color: 'var(--color-ps-gray)', fontFamily: 'var(--font-pixel)' }}>Time </span>
          <span style={{ fontSize: 7, color: 'var(--color-ps-white)', fontFamily: 'var(--font-pixel)' }}>{h}:{m}:{s}</span>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
        <button
          className="ps-play-btn"
          onClick={() => setPlaying(!playing)}
        >
          {playing ? '||' : '>'}
        </button>
        <span style={{ fontSize: 6, color: 'var(--color-ps-gray)', fontFamily: 'var(--font-pixel)' }}>TRACK 01</span>
        <div style={{ width: 80, height: 3, background: '#222' }}>
          <div style={{ height: '100%', width: '35%', background: 'var(--color-ps-cyan)' }} />
        </div>
      </div>
    </div>
  );
}
