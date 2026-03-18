import { motion } from "motion/react";
import { ArrowRight } from "lucide-react";

export function Hero() {
  return (
    <section className="relative min-h-screen flex flex-col items-center justify-center pt-24 pb-12 px-6 overflow-hidden">
      {/* Background grid - PS1 style floor */}
      <div className="absolute inset-0 z-0 opacity-30" style={{ backgroundImage: 'linear-gradient(#4a4a4a 1px, transparent 1px), linear-gradient(90deg, #4a4a4a 1px, transparent 1px)', backgroundSize: '64px 64px', transform: 'perspective(500px) rotateX(60deg) translateY(-100px) translateZ(-200px)' }} />

      <div className="relative z-10 max-w-5xl mx-auto text-center flex flex-col items-center mt-20">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="inline-flex items-center gap-2 px-4 py-2 ps1-menu mb-8"
        >
          <span className="w-3 h-3 bg-red-500 animate-pulse border-t border-l border-white border-b border-r border-black" />
          <span className="text-sm font-mono uppercase tracking-widest text-white">MEMORY CARD 1</span>
        </motion.div>

        <motion.h1
          initial={{ opacity: 0, scale: 0.9 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.1, ease: "easeOut" }}
          className="text-4xl md:text-6xl lg:text-8xl font-mono uppercase tracking-tighter leading-tight mb-6 text-white"
          style={{ textShadow: '4px 4px 0px #000, 8px 8px 0px rgba(0,0,0,0.5)' }}
        >
          PRESS START <br />
          <span className="text-gray-300">
            COPETARDS
          </span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="text-2xl md:text-3xl text-gray-300 max-w-2xl mx-auto mb-12 font-sans ps1-block p-4"
        >
          A collection of 1,500 highly polished, customizable digital artifacts for those who cope the hardest. Choose your fighter.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          className="flex flex-col sm:flex-row items-center gap-6"
        >
          <a
            href="#builder"
            className="group relative flex items-center gap-4 px-8 py-4 text-sm font-mono uppercase tracking-widest ps1-button"
          >
            <span className="relative z-10">CHOOSE FIGHTER</span>
            <ArrowRight className="w-5 h-5 relative z-10" />
          </a>
          
          <a
            href="#mint"
            className="flex items-center gap-2 px-8 py-4 text-sm font-mono uppercase tracking-widest ps1-button"
          >
            MINT NOW
          </a>
        </motion.div>
      </div>

      {/* Marquee */}
      <div className="absolute bottom-0 left-0 right-0 overflow-hidden ps1-menu border-x-0 border-b-0 py-4">
        <div className="flex whitespace-nowrap animate-[marquee_20s_linear_infinite]">
          {[...Array(10)].map((_, i) => (
            <div key={i} className="flex items-center gap-6 mx-4">
              <span className="text-sm font-mono uppercase tracking-widest text-white">COPE HARDER</span>
              <span className="text-yellow-400">▲</span>
              <span className="text-sm font-mono uppercase tracking-widest text-white">1.5K SUPPLY</span>
              <span className="text-pink-500">■</span>
              <span className="text-sm font-mono uppercase tracking-widest text-white">FULLY ON-CHAIN</span>
              <span className="text-blue-400">✕</span>
              <span className="text-green-400">●</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
