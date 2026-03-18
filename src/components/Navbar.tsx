import { motion } from "motion/react";
import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export function Navbar() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between px-6 py-4 ps1-menu m-2">
      <div className="flex items-center gap-4">
        <div className="w-10 h-10 bg-gray-400 flex items-center justify-center text-black font-mono text-2xl leading-none border-2 border-white shadow-[inset_-2px_-2px_0_#000]">
          C
        </div>
        <span className="text-white font-mono tracking-widest uppercase text-xl">
          CopeTards
        </span>
      </div>
      
      <div className="hidden md:flex items-center gap-8 text-lg font-sans text-white uppercase tracking-widest">
        <a href="#about" className="hover:text-yellow-400 transition-none">👉 About</a>
        <a href="#builder" className="hover:text-yellow-400 transition-none">👉 Builder</a>
        <a href="#mint" className="hover:text-yellow-400 transition-none">👉 Mint</a>
      </div>

      <WalletMultiButton style={{ backgroundColor: '#7a7a7a', color: 'white', borderRadius: '0', borderTop: '2px solid #dfdfdf', borderLeft: '2px solid #dfdfdf', borderBottom: '2px solid #2a2a2a', borderRight: '2px solid #2a2a2a', fontFamily: '"Press Start 2P", monospace', fontSize: '0.75rem', textTransform: 'uppercase', height: '40px', padding: '0 16px', textShadow: '2px 2px 0px black', boxShadow: '4px 4px 0px rgba(0,0,0,0.6)' }} />
    </nav>
  );
}
