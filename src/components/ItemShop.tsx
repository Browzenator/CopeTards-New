import { motion } from "motion/react";

const MARKETS = [
  { icon: "T", name: "TENSOR", sub: "PRIMARY MARKET", href: "https://tensor.trade/" },
  { icon: "ME", name: "MAGIC EDEN", sub: "SECONDARY MARKET", href: "https://magiceden.io/" },
  { icon: "X", name: "X / TWITTER", sub: "COMMUNITY", href: "https://x.com/CopeTards" },
];

export function ItemShop() {
  return (
    <section id="trade" style={{ padding: '0 20px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="ff-panel"
      >
        <div className="ps-section-title">ITEM SHOP</div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
          {MARKETS.map((m) => (
            <a key={m.name} className="ps-crate" href={m.href} target="_blank" rel="noopener noreferrer">
              <div
                style={{
                  width: 48,
                  height: 48,
                  margin: '0 auto 8px',
                  border: '2px solid var(--color-ps-gold-dim)',
                  background: 'linear-gradient(135deg, #3a2a10 0%, #1a1a0a 100%)',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                  fontSize: 14,
                  color: 'var(--color-ps-gold)',
                  fontFamily: 'var(--font-pixel)',
                }}
              >
                {m.icon}
              </div>
              <div style={{ fontSize: 8, color: 'var(--color-ps-white)', marginBottom: 4, fontFamily: 'var(--font-pixel)' }}>
                {m.name}
              </div>
              <div style={{ fontSize: 6, color: 'var(--color-ps-gray)', fontFamily: 'var(--font-pixel)' }}>
                {m.sub}
              </div>
            </a>
          ))}
        </div>
      </motion.div>
    </section>
  );
}
