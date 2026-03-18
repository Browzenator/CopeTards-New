import { motion } from "motion/react";

export function LoreSection() {
  return (
    <section id="lore" style={{ padding: '0 20px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="ff-panel"
      >
        <div className="ps-section-title">THE COPE TARD SLUMS</div>

        <div className="ps-lore-text">
          In the depths of the blockchain, beneath layers of rugged protocols and abandoned smart contracts, lies the <em>Cope Tard Slums</em>.<br /><br />
          A ragtag crew of 4,200 fighters emerged here — each forged by loss, fueled by copium, and powered by an unbreakable spirit that refuses to sell the bottom.<br /><br />
          The CopeTards aren't just collectibles. They're <em>battle-tested warriors</em> with on-chain stats, unique abilities, and a community that fights together.
        </div>

        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(4, 1fr)',
            gap: 8,
            marginTop: 16,
          }}
        >
          <div className="ps-stat-box">
            <div style={{ fontSize: 14, color: 'var(--color-ps-cyan)', fontFamily: 'var(--font-pixel)' }}>4,200</div>
            <div style={{ fontSize: 6, color: 'var(--color-ps-gray)', marginTop: 4, letterSpacing: 1, fontFamily: 'var(--font-pixel)' }}>SUPPLY</div>
          </div>
          <div className="ps-stat-box">
            <div style={{ fontSize: 14, color: 'var(--color-ps-cyan)', fontFamily: 'var(--font-pixel)' }}>88</div>
            <div style={{ fontSize: 6, color: 'var(--color-ps-gray)', marginTop: 4, letterSpacing: 1, fontFamily: 'var(--font-pixel)' }}>TRAITS</div>
          </div>
          <div className="ps-stat-box">
            <div style={{ fontSize: 14, color: 'var(--color-ps-cyan)', fontFamily: 'var(--font-pixel)' }}>LV99</div>
            <div style={{ fontSize: 6, color: 'var(--color-ps-gray)', marginTop: 4, letterSpacing: 1, fontFamily: 'var(--font-pixel)' }}>MAX LVL</div>
          </div>
          <div className="ps-stat-box">
            <div style={{ fontSize: 14, color: 'var(--color-ps-gold)', fontFamily: 'var(--font-pixel)' }}>SOL</div>
            <div style={{ fontSize: 6, color: 'var(--color-ps-gray)', marginTop: 4, letterSpacing: 1, fontFamily: 'var(--font-pixel)' }}>CHAIN</div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
