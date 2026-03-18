import { useState } from "react";
import { motion } from "motion/react";
import { Minus, Plus, Zap } from "lucide-react";

export function MintSection() {
  const [quantity, setQuantity] = useState(1);
  const price = 0.35;
  const maxSupply = 1500;
  const minted = 420;

  return (
    <section id="mint" className="py-32 px-6 relative overflow-hidden">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
        
        {/* Left: Info */}
        <div className="space-y-8">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <h2 className="text-4xl md:text-6xl font-mono uppercase tracking-tighter mb-4 text-white">
              MINT YOUR <br />
              <span className="text-gray-300">
                FIGHTER
              </span>
            </h2>
            <p className="text-2xl text-gray-300 max-w-md font-sans ps1-block p-4">
              Join the most resilient community in Web3. Secure your CopeTard and gain access to exclusive drops, tools, and the inner circle.
            </p>
          </motion.div>

          <div className="grid grid-cols-2 gap-6">
            <div className="p-6 ps1-menu">
              <div className="text-sm font-mono text-gray-300 uppercase tracking-widest mb-2">PRICE</div>
              <div className="text-2xl font-mono text-white">{price} SOL</div>
            </div>
            <div className="p-6 ps1-menu">
              <div className="text-sm font-mono text-gray-300 uppercase tracking-widest mb-2">MINTED</div>
              <div className="text-2xl font-mono text-white">{minted} <span className="text-lg text-gray-400">/ {maxSupply}</span></div>
            </div>
          </div>
        </div>

        {/* Right: Mint Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="relative"
        >
          <div className="p-8 md:p-12 ps1-menu">
            <div className="flex items-center justify-between mb-8 border-b-2 border-gray-400 pb-4">
              <h3 className="text-xl font-mono uppercase tracking-widest text-white">PUBLIC MINT</h3>
              <div className="flex items-center gap-2 px-3 py-1 bg-gray-800 border-2 border-gray-400 text-white text-xs font-mono uppercase tracking-widest font-bold shadow-[inset_2px_2px_0_#000]">
                <span className="w-2 h-2 bg-red-500 animate-pulse border border-black" />
                LIVE
              </div>
            </div>

            {/* Quantity Selector */}
            <div className="flex items-center justify-between p-4 ps1-block mb-8">
              <button 
                onClick={() => setQuantity(Math.max(1, quantity - 1))}
                className="w-12 h-12 flex items-center justify-center ps1-button"
              >
                <Minus className="w-6 h-6" />
              </button>
              <div className="text-4xl font-mono text-white">{quantity}</div>
              <button 
                onClick={() => setQuantity(Math.min(10, quantity + 1))}
                className="w-12 h-12 flex items-center justify-center ps1-button"
              >
                <Plus className="w-6 h-6" />
              </button>
            </div>

            {/* Total */}
            <div className="flex items-center justify-between mb-8 pb-8 border-b-2 border-gray-400">
              <span className="text-white uppercase tracking-widest text-lg font-mono">TOTAL</span>
              <span className="text-2xl font-mono text-white">{(price * quantity).toFixed(2)} SOL</span>
            </div>

            {/* Mint Button */}
            <button className="w-full relative flex items-center justify-center gap-4 py-5 text-lg font-mono uppercase tracking-widest ps1-button">
              <Zap className="w-6 h-6 text-yellow-400" />
              MINT NOW
            </button>
            
            <p className="text-center text-sm text-gray-300 mt-6 font-mono uppercase tracking-widest">
              MAX 10 PER WALLET
            </p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
