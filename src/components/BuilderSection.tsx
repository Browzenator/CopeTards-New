import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { cn } from "../utils";
import { RefreshCw, Download, Check } from "lucide-react";

const TRAITS = {
  background: [
    { id: "bg1", name: "Void", color: "#000000" },
    { id: "bg2", name: "Neon Pink", color: "#ec4899" },
    { id: "bg3", name: "Cyber Blue", color: "#06b6d4" },
    { id: "bg4", name: "Toxic Green", color: "#22c55e" },
    { id: "bg5", name: "Deep Purple", color: "#7e22ce" },
  ],
  body: [
    { id: "body1", name: "Standard", color: "#f3f4f6" },
    { id: "body2", name: "Gold", color: "#eab308" },
    { id: "body3", name: "Alien", color: "#10b981" },
    { id: "body4", name: "Demon", color: "#ef4444" },
  ],
  headwear: [
    { id: "head0", name: "None", type: "none" },
    { id: "head1", name: "Cap", type: "cap" },
    { id: "head2", name: "Halo", type: "halo" },
    { id: "head3", name: "Beanie", type: "beanie" },
  ],
  eyes: [
    { id: "eyes1", name: "Normal", type: "normal" },
    { id: "eyes2", name: "Laser", type: "laser" },
    { id: "eyes3", name: "Shades", type: "shades" },
    { id: "eyes4", name: "Tired", type: "tired" },
  ],
  mouth: [
    { id: "mouth1", name: "Smile", type: "smile" },
    { id: "mouth2", name: "Frown", type: "frown" },
    { id: "mouth3", name: "Cig", type: "cig" },
    { id: "mouth4", name: "Bubblegum", type: "bubblegum" },
  ],
};

type Category = keyof typeof TRAITS;

export function BuilderSection() {
  const [activeCategory, setActiveCategory] = useState<Category>("background");
  const [selectedTraits, setSelectedTraits] = useState({
    background: TRAITS.background[1],
    body: TRAITS.body[0],
    headwear: TRAITS.headwear[0],
    eyes: TRAITS.eyes[0],
    mouth: TRAITS.mouth[0],
  });

  const handleSelect = (category: Category, trait: any) => {
    setSelectedTraits((prev) => ({ ...prev, [category]: trait }));
  };

  const randomize = () => {
    setSelectedTraits({
      background: TRAITS.background[Math.floor(Math.random() * TRAITS.background.length)],
      body: TRAITS.body[Math.floor(Math.random() * TRAITS.body.length)],
      headwear: TRAITS.headwear[Math.floor(Math.random() * TRAITS.headwear.length)],
      eyes: TRAITS.eyes[Math.floor(Math.random() * TRAITS.eyes.length)],
      mouth: TRAITS.mouth[Math.floor(Math.random() * TRAITS.mouth.length)],
    });
  };

  return (
    <section id="builder" className="py-24 px-6 min-h-screen flex flex-col items-center">
      <div className="max-w-7xl w-full mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-6xl font-mono uppercase tracking-tighter mb-4 text-white">
            FIGHTER <span className="text-gray-300">SELECT</span>
          </h2>
          <p className="text-gray-300 font-sans text-2xl max-w-xl mx-auto ps1-block p-4">
            Experiment with millions of combinations. Find your perfect CopeTard before you mint.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-16">
          
          {/* Preview Area */}
          <div className="lg:col-span-5 flex flex-col items-center">
            <div className="relative w-full aspect-square max-w-md ps1-menu group p-2">
              {/* SVG Avatar Generator */}
              <svg viewBox="0 0 400 400" className="w-full h-full border-2 border-gray-400 bg-black" style={{ backgroundColor: selectedTraits.background.color }}>
                {/* Body */}
                <rect x="100" y="150" width="200" height="250" rx="0" fill={selectedTraits.body.color} />
                
                {/* Headwear */}
                {selectedTraits.headwear.type === "cap" && (
                  <g>
                    <path d="M 80 150 L 200 100 L 320 150 L 320 180 L 80 180 Z" fill="#1f2937" />
                    <rect x="280" y="160" width="60" height="10" fill="#ef4444" />
                  </g>
                )}
                {selectedTraits.headwear.type === "halo" && (
                  <rect x="120" y="80" width="160" height="20" fill="none" stroke="#fbbf24" strokeWidth="12" />
                )}
                {selectedTraits.headwear.type === "beanie" && (
                  <path d="M 100 180 L 200 50 L 300 180 Z" fill="#f97316" />
                )}

                {/* Eyes */}
                {selectedTraits.eyes.type === "normal" && (
                  <g>
                    <rect x="140" y="200" width="40" height="40" fill="white" />
                    <rect x="150" y="210" width="20" height="20" fill="black" />
                    <rect x="220" y="200" width="40" height="40" fill="white" />
                    <rect x="230" y="210" width="20" height="20" fill="black" />
                  </g>
                )}
                {selectedTraits.eyes.type === "laser" && (
                  <g>
                    <rect x="145" y="205" width="30" height="30" fill="#ef4444" />
                    <rect x="0" y="215" width="160" height="10" fill="#ef4444" opacity="0.8" />
                    <rect x="225" y="205" width="30" height="30" fill="#ef4444" />
                    <rect x="240" y="215" width="160" height="10" fill="#ef4444" opacity="0.8" />
                  </g>
                )}
                {selectedTraits.eyes.type === "shades" && (
                  <g>
                    <rect x="120" y="200" width="160" height="40" fill="#111827" />
                    <rect x="130" y="210" width="60" height="20" fill="#374151" />
                    <rect x="210" y="210" width="60" height="20" fill="#374151" />
                  </g>
                )}
                {selectedTraits.eyes.type === "tired" && (
                  <g>
                    <rect x="140" y="210" width="40" height="10" fill="black" />
                    <rect x="220" y="210" width="40" height="10" fill="black" />
                    <rect x="140" y="230" width="40" height="10" fill="#6b7280" />
                    <rect x="220" y="230" width="40" height="10" fill="#6b7280" />
                  </g>
                )}

                {/* Mouth */}
                {selectedTraits.mouth.type === "smile" && (
                  <rect x="160" y="290" width="80" height="10" fill="black" />
                )}
                {selectedTraits.mouth.type === "frown" && (
                  <rect x="160" y="290" width="80" height="10" fill="black" />
                )}
                {selectedTraits.mouth.type === "cig" && (
                  <g>
                    <rect x="180" y="290" width="40" height="10" fill="black" />
                    <rect x="220" y="286" width="40" height="10" fill="white" />
                    <rect x="260" y="286" width="10" height="10" fill="#f97316" />
                  </g>
                )}
                {selectedTraits.mouth.type === "bubblegum" && (
                  <g>
                    <rect x="180" y="290" width="40" height="10" fill="black" />
                    <rect x="170" y="260" width="60" height="60" fill="#f472b6" opacity="0.9" />
                    <rect x="180" y="270" width="10" height="10" fill="white" opacity="0.5" />
                  </g>
                )}
              </svg>

              {/* Overlay Actions */}
              <div className="absolute bottom-6 right-6 flex gap-4 opacity-0 group-hover:opacity-100 transition-opacity">
                <button 
                  onClick={randomize}
                  className="p-3 ps1-button"
                  title="Randomize"
                >
                  <RefreshCw className="w-6 h-6" />
                </button>
                <button 
                  className="p-3 ps1-button"
                  title="Download"
                >
                  <Download className="w-6 h-6" />
                </button>
              </div>
            </div>
            
            <div className="mt-12 w-full max-w-md ps1-menu p-6">
              <h3 className="text-lg font-mono uppercase tracking-widest text-white mb-4 border-b-2 border-gray-400 pb-2">CURRENT TRAITS</h3>
              <ul className="space-y-4 font-mono">
                {(Object.entries(selectedTraits) as [string, { name: string }][]).map(([cat, trait]) => (
                  <li key={cat} className="flex justify-between items-center">
                    <span className="text-gray-300 uppercase">{cat}</span>
                    <span className="text-white uppercase">{trait.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          {/* Controls Area */}
          <div className="lg:col-span-7 flex flex-col h-full">
            {/* Category Tabs */}
            <div className="flex flex-wrap pb-4 mb-6 gap-4 border-b-4 border-gray-600">
              {(Object.keys(TRAITS) as Category[]).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setActiveCategory(cat)}
                  className={cn(
                    "px-4 py-2 text-sm font-mono uppercase tracking-widest transition-all",
                    activeCategory === cat 
                      ? "ps1-button bg-gray-400 text-black" 
                      : "ps1-button"
                  )}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Trait Grid */}
            <div className="flex-1 ps1-menu p-6 md:p-8">
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -10 }}
                  transition={{ duration: 0.2 }}
                  className="grid grid-cols-2 sm:grid-cols-3 gap-6"
                >
                  {TRAITS[activeCategory].map((trait) => {
                    const isSelected = selectedTraits[activeCategory].id === trait.id;
                    return (
                      <button
                        key={trait.id}
                        onClick={() => handleSelect(activeCategory, trait)}
                        className={cn(
                          "relative aspect-square flex flex-col items-center justify-center gap-4 transition-all overflow-hidden group",
                          isSelected 
                            ? "ps1-block bg-gray-800 border-white" 
                            : "ps1-block hover:bg-gray-800"
                        )}
                      >
                        {/* Color Preview for Background/Body */}
                        {trait.color && (
                          <div 
                            className="w-16 h-16 border-2 border-gray-400 shadow-[inset_2px_2px_0_#000]"
                            style={{ backgroundColor: trait.color }}
                          />
                        )}
                        
                        {/* Icon/Text for others */}
                        {!trait.color && (
                          <div className="w-16 h-16 bg-gray-800 flex items-center justify-center border-2 border-gray-400 shadow-[inset_2px_2px_0_#000] group-hover:scale-110 transition-transform">
                            <span className="text-3xl text-gray-400 font-mono">?</span>
                          </div>
                        )}

                        <span className="font-mono text-white text-sm tracking-wide uppercase">{trait.name}</span>
                        
                        {isSelected && (
                          <div className="absolute top-2 right-2 w-6 h-6 bg-green-500 flex items-center justify-center border-2 border-black shadow-[inset_1px_1px_0_#fff]">
                            <Check className="w-4 h-4 text-black" />
                          </div>
                        )}
                      </button>
                    );
                  })}
                </motion.div>
              </AnimatePresence>
            </div>
            
            {/* Mint from Builder */}
            <div className="mt-12 flex flex-col sm:flex-row items-center justify-between p-6 ps1-menu gap-6">
              <div>
                <h4 className="font-mono text-white text-xl mb-2 uppercase">LOVE THIS COMBO?</h4>
                <p className="text-gray-300 font-sans text-xl">Minting is random, but you can save this trait combo for later.</p>
              </div>
              <button className="px-8 py-4 ps1-button font-mono uppercase tracking-widest text-sm whitespace-nowrap">
                SAVE COMBO
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
