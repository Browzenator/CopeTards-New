import { useState } from "react";
import { motion } from "motion/react";

const TABS = ["Prophecy", "Roadmap", "Council", "Notes"] as const;
type Tab = typeof TABS[number];

export function QuestLog() {
  const [activeTab, setActiveTab] = useState<Tab>("Prophecy");

  return (
    <section id="quests" style={{ padding: '0 20px' }}>
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="ff-panel"
      >
        <div className="ps-section-title">QUEST LOG</div>

        <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr', gap: 12 }}>
          {/* Menu list */}
          <ul style={{ listStyle: 'none', margin: 0, padding: 0 }}>
            {TABS.map((tab) => (
              <li
                key={tab}
                className={`ps-menu-item ${activeTab === tab ? 'ps-menu-item--active' : ''}`}
                onClick={() => setActiveTab(tab)}
                style={{ fontFamily: 'var(--font-pixel)' }}
              >
                <span className="ps-cursor" />
                {tab}
              </li>
            ))}
          </ul>

          {/* Content */}
          <div>
            {activeTab === "Prophecy" && (
              <div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--color-ps-gold)', marginBottom: 8 }}>
                  THE PROPHECY
                </div>
                <div className="ps-lore-text">
                  The ancient chain foretold of warriors who would rise from the slums — not despite their losses, but because of them. The CopeTards are that prophecy fulfilled.
                </div>
              </div>
            )}

            {activeTab === "Roadmap" && (
              <div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--color-ps-gold)', marginBottom: 8 }}>
                  QUEST PROGRESS
                </div>

                <QuestItem
                  name="Genesis Mint"
                  desc="4,200 CopeTards enter the slums. Community formation begins."
                  tag="COMPLETE"
                  tagClass="ps-tag-done"
                />
                <QuestItem
                  name="The Council Assembles"
                  desc="Holder governance goes live. Vote on lore, collabs, and treasury."
                  tag="IN PROGRESS"
                  tagClass="ps-tag-active"
                />
                <QuestItem
                  name="Arena Battles"
                  desc="On-chain PvP stat battles. Wager, fight, climb the leaderboard."
                  tag="LOCKED"
                  tagClass="ps-tag-locked"
                />
                <QuestItem
                  name="The Great Cope"
                  desc="Full game reveal. The slums evolve into something nobody expected."
                  tag="CLASSIFIED"
                  tagClass="ps-tag-locked"
                />
              </div>
            )}

            {activeTab === "Council" && (
              <div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--color-ps-gold)', marginBottom: 8 }}>
                  THE COUNCIL
                </div>
                <div className="ps-lore-text">
                  A governing body of top holders who steer the fate of the slums. Council members vote on treasury allocation, partnerships, and lore direction.
                </div>
              </div>
            )}

            {activeTab === "Notes" && (
              <div>
                <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 9, color: 'var(--color-ps-gold)', marginBottom: 8 }}>
                  DEV NOTES
                </div>
                <div className="ps-lore-text">
                  Built on Solana. Art by the community. Code by the copers. We don't promise — we ship. Follow @CopeTards on X for real-time updates.
                </div>
              </div>
            )}
          </div>
        </div>
      </motion.div>
    </section>
  );
}

function QuestItem({ name, desc, tag, tagClass }: { name: string; desc: string; tag: string; tagClass: string }) {
  return (
    <div style={{ padding: '8px 0', borderBottom: '1px solid rgba(88,88,204,0.3)' }}>
      <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 8, color: 'var(--color-ps-white)', marginBottom: 4 }}>
        {name}
      </div>
      <div style={{ fontFamily: 'var(--font-dot)', fontSize: 11, color: 'var(--color-ps-gray)', lineHeight: 1.8 }}>
        {desc}
      </div>
      <span
        className={tagClass}
        style={{
          display: 'inline-block',
          fontFamily: 'var(--font-pixel)',
          fontSize: 6,
          padding: '2px 6px',
          marginTop: 4,
          letterSpacing: 1,
        }}
      >
        {tag}
      </span>
    </div>
  );
}
