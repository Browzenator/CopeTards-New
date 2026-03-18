import { useState } from "react";
import { motion } from "motion/react";

interface FighterData {
  initials: string;
  name: string;
  cls: string;
  hpPct: number;
  mpPct: number;
  hpVal: string;
  mpVal: string;
  iq: number;
  str: number;
}

const ROSTER: (FighterData & { locked?: boolean })[] = [
  { initials: "JB", name: "JB", cls: "LV 88 \u2022 COPIUM BERSERKER", hpPct: 100, mpPct: 0, hpVal: "4200/4200", mpVal: "0/100", iq: 10, str: 99 },
  { initials: "CH", name: "CHUN", cls: "LV 99 \u2022 ORACLE MONK", hpPct: 100, mpPct: 100, hpVal: "9999/9999", mpVal: "500/500", iq: 88, str: 45 },
  { initials: "DG", name: "DEGEN", cls: "LV 42 \u2022 RUG SURVIVOR", hpPct: 60, mpPct: 20, hpVal: "2500/4200", mpVal: "80/400", iq: 30, str: 70 },
  { initials: "FM", name: "FOMO", cls: "LV 55 \u2022 PAPER HANDS", hpPct: 75, mpPct: 50, hpVal: "3100/4200", mpVal: "200/400", iq: 55, str: 40 },
  { initials: "HD", name: "HODL", cls: "LV 77 \u2022 DIAMOND GRIP", hpPct: 90, mpPct: 10, hpVal: "3800/4200", mpVal: "40/400", iq: 20, str: 95 },
  { initials: "??", name: "???", cls: "LOCKED", hpPct: 0, mpPct: 0, hpVal: "---/---", mpVal: "---/---", iq: 0, str: 0, locked: true },
  { initials: "??", name: "???", cls: "LOCKED", hpPct: 0, mpPct: 0, hpVal: "---/---", mpVal: "---/---", iq: 0, str: 0, locked: true },
  { initials: "??", name: "???", cls: "LOCKED", hpPct: 0, mpPct: 0, hpVal: "---/---", mpVal: "---/---", iq: 0, str: 0, locked: true },
  { initials: "??", name: "???", cls: "LOCKED", hpPct: 0, mpPct: 0, hpVal: "---/---", mpVal: "---/---", iq: 0, str: 0, locked: true },
  { initials: "??", name: "???", cls: "LOCKED", hpPct: 0, mpPct: 0, hpVal: "---/---", mpVal: "---/---", iq: 0, str: 0, locked: true },
  { initials: "??", name: "???", cls: "LOCKED", hpPct: 0, mpPct: 0, hpVal: "---/---", mpVal: "---/---", iq: 0, str: 0, locked: true },
  { initials: "??", name: "???", cls: "LOCKED", hpPct: 0, mpPct: 0, hpVal: "---/---", mpVal: "---/---", iq: 0, str: 0, locked: true },
];

const P2_DEFAULT: FighterData = {
  initials: "CH", name: "CHUN", cls: "LV 99 \u2022 ORACLE MONK",
  hpPct: 100, mpPct: 100, hpVal: "9999/9999", mpVal: "500/500", iq: 88, str: 45,
};

function FighterCard({ fighter, label }: { fighter: FighterData; label: string }) {
  return (
    <div className="ps-fighter-card ps-fighter-card--sel">
      <div className="ps-fighter-portrait">{fighter.initials}</div>
      <div style={{ fontSize: 10, color: 'var(--color-ps-white)', marginBottom: 4, fontFamily: 'var(--font-pixel)' }}>
        {fighter.name}
      </div>
      <div style={{ fontSize: 7, color: 'var(--color-ps-gray)', marginBottom: 8, fontFamily: 'var(--font-pixel)' }}>
        {fighter.cls}
      </div>

      {/* HP bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
        <span style={{ fontSize: 7, color: 'var(--color-ps-gray)', width: 20, fontFamily: 'var(--font-pixel)' }}>HP</span>
        <div className="ps-bar-track">
          <div style={{ height: '100%', background: 'var(--color-ps-hp-green)', width: `${fighter.hpPct}%`, transition: 'width 0.5s' }} />
        </div>
        <span style={{ fontSize: 6, color: 'var(--color-ps-gray)', width: 50, textAlign: 'right', fontFamily: 'var(--font-pixel)' }}>{fighter.hpVal}</span>
      </div>

      {/* MP bar */}
      <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 4 }}>
        <span style={{ fontSize: 7, color: 'var(--color-ps-gray)', width: 20, fontFamily: 'var(--font-pixel)' }}>MP</span>
        <div className="ps-bar-track">
          <div style={{ height: '100%', background: 'var(--color-ps-mp-teal)', width: `${fighter.mpPct}%`, transition: 'width 0.5s' }} />
        </div>
        <span style={{ fontSize: 6, color: 'var(--color-ps-gray)', width: 50, textAlign: 'right', fontFamily: 'var(--font-pixel)' }}>{fighter.mpVal}</span>
      </div>

      {/* Stats */}
      <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
        <span style={{ fontSize: 6, color: 'var(--color-ps-gray)', fontFamily: 'var(--font-pixel)' }}>
          IQ: <strong style={{ color: 'var(--color-ps-white)' }}>{fighter.iq}</strong>
        </span>
        <span style={{ fontSize: 6, color: 'var(--color-ps-gray)', fontFamily: 'var(--font-pixel)' }}>
          STR: <strong style={{ color: 'var(--color-ps-white)' }}>{fighter.str}</strong>
        </span>
      </div>
    </div>
  );
}

export function FighterSelect() {
  const [selectedIdx, setSelectedIdx] = useState(0);
  const selected = ROSTER[selectedIdx];

  return (
    <section id="fighters" style={{ padding: '0 20px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="ff-panel"
      >
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
          <div style={{ color: 'var(--color-ps-cyan)', fontSize: 10, fontFamily: 'var(--font-pixel)' }}>1P</div>
          <div className="ps-section-title" style={{ marginBottom: 0 }}>CHOOSE YOUR FIGHTER</div>
          <div style={{ color: 'var(--color-ps-red)', fontSize: 10, fontFamily: 'var(--font-pixel)' }}>2P</div>
        </div>

        {/* 1P vs 2P cards */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 80px 1fr', gap: 0, alignItems: 'start' }}>
          <FighterCard fighter={selected} label="1P" />

          <div style={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            fontSize: 20, color: 'var(--color-ps-gold)', fontFamily: 'var(--font-pixel)',
            textShadow: '2px 2px 0 rgba(0,0,0,0.5)', height: '100%',
          }}>
            VS
          </div>

          <FighterCard fighter={P2_DEFAULT} label="2P" />
        </div>

        {/* Roster Grid */}
        <div style={{
          display: 'grid',
          gridTemplateColumns: 'repeat(6, 1fr)',
          gap: 4,
          marginTop: 16,
        }}>
          {ROSTER.map((r, i) => (
            <div
              key={i}
              className={`ps-roster-cell ${i === selectedIdx ? 'ps-roster-cell--sel' : ''} ${r.locked ? 'ps-roster-cell--locked' : ''}`}
              onClick={() => !r.locked && setSelectedIdx(i)}
              style={{ fontFamily: 'var(--font-pixel)' }}
            >
              {r.initials}
            </div>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
