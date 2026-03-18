import { motion } from "motion/react";

export function HeroSection() {
  return (
    <section
      id="home"
      style={{
        padding: '40px 20px 30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        textAlign: 'center',
        position: 'relative',
        background: 'radial-gradient(ellipse at 50% 80%, #1a1a4a 0%, var(--color-ps-black) 70%)',
        minHeight: '60vh',
        justifyContent: 'center',
      }}
    >
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="ps-licensed"
        style={{ marginBottom: 20 }}
      >
        LICENSED BY PUMP COMPUTER ENTERTAINMENT AMERICA
      </motion.div>

      <motion.div
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
        style={{
          fontSize: 28,
          color: 'var(--color-ps-white)',
          marginBottom: 4,
          textShadow: '3px 3px 0 var(--color-ps-panel), -1px -1px 0 var(--color-ps-border)',
          fontFamily: 'var(--font-pixel)',
        }}
      >
        COPE<span style={{ color: 'var(--color-ps-gold)' }}>TARDS</span>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 0.8 }}
        style={{
          fontSize: 10,
          color: 'var(--color-ps-white)',
          marginTop: 20,
          animation: 'ps-blink 1s infinite',
          fontFamily: 'var(--font-pixel)',
        }}
      >
        PRESS START
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6, delay: 1 }}
        style={{
          fontSize: 7,
          color: 'var(--color-ps-gray)',
          marginTop: 12,
          lineHeight: 2.2,
          fontFamily: 'var(--font-pixel)',
        }}
      >
        PLEASE INSERT A<br />COPETARD FORMAT DISC
      </motion.div>

      {/* Controller button nav */}
      <motion.div
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 1.2 }}
        style={{ display: 'flex', gap: 8, marginTop: 20, flexWrap: 'wrap', justifyContent: 'center' }}
      >
        <a className="ps-nav-btn" href="#lore">
          <span className="ps-btn-icon ps-btn-x">X</span> LORE
        </a>
        <a className="ps-nav-btn" href="#fighters">
          <span className="ps-btn-icon ps-btn-o">O</span> FIGHTERS
        </a>
        <a className="ps-nav-btn" href="#quests">
          <span className="ps-btn-icon ps-btn-sq">[]</span> QUESTS
        </a>
        <a className="ps-nav-btn" href="#trade">
          <span className="ps-btn-icon ps-btn-tr">/\\</span> TRADE
        </a>
      </motion.div>
    </section>
  );
}
