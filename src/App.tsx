/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';

import { BootScreen } from "./components/BootScreen";
import { ConsoleBar } from "./components/ConsoleBar";
import { HeroSection } from "./components/HeroSection";
import { LoreSection } from "./components/LoreSection";
import { FighterSelect } from "./components/FighterSelect";
import { QuestLog } from "./components/QuestLog";
import { ItemShop } from "./components/ItemShop";
import { HudFooter } from "./components/HudFooter";

export default function App() {
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="min-h-screen" style={{ background: 'var(--color-ps-black)', color: 'var(--color-ps-white)', fontFamily: 'var(--font-pixel)', paddingBottom: '50px' }}>
            <div className="ps-crt" />
            <BootScreen />
            <ConsoleBar />
            <HeroSection />
            <div style={{ height: 16 }} />
            <LoreSection />
            <div style={{ height: 16 }} />
            <FighterSelect />
            <div style={{ height: 16 }} />
            <QuestLog />
            <div style={{ height: 16 }} />
            <ItemShop />
            <div style={{ height: 32 }} />
            <HudFooter />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

import { useMemo } from 'react';
import { ConnectionProvider, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletAdapterNetwork } from '@solana/wallet-adapter-base';
import { PhantomWalletAdapter, SolflareWalletAdapter } from '@solana/wallet-adapter-wallets';
import { WalletModalProvider } from '@solana/wallet-adapter-react-ui';
import { clusterApiUrl } from '@solana/web3.js';
import '@solana/wallet-adapter-react-ui/styles.css';

import { Navbar } from "./components/Navbar";
import { Hero } from "./components/Hero";
import { MintSection } from "./components/MintSection";
import { BuilderSection } from "./components/BuilderSection";
import { Footer } from "./components/Footer";

export default function App() {
  const network = WalletAdapterNetwork.Mainnet;
  const endpoint = useMemo(() => clusterApiUrl(network), [network]);
  const wallets = useMemo(
    () => [
      new PhantomWalletAdapter(),
      new SolflareWalletAdapter(),
    ],
    []
  );

  return (
    <ConnectionProvider endpoint={endpoint}>
      <WalletProvider wallets={wallets} autoConnect>
        <WalletModalProvider>
          <div className="bg-transparent min-h-screen text-gray-200 selection:bg-blue-500/30 scanlines">
            <Navbar />
            <main>
              <Hero />
              <MintSection />
              <BuilderSection />
            </main>
            <Footer />
          </div>
        </WalletModalProvider>
      </WalletProvider>
    </ConnectionProvider>
  );
}
