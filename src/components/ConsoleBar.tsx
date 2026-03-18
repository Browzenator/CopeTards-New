import { WalletMultiButton } from "@solana/wallet-adapter-react-ui";

export function ConsoleBar() {
  return (
    <nav
      className="ps-console-bar"
      style={{
        padding: '8px 20px',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
        position: 'sticky',
        top: 0,
        zIndex: 100,
      }}
    >
      <div style={{ fontFamily: 'var(--font-pixel)', fontSize: 8, color: '#333', letterSpacing: 2 }}>
        CopeTard Inc.
      </div>

      <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
        <div
          style={{
            fontFamily: 'var(--font-pixel)',
            fontSize: 6,
            color: '#555',
            border: '2px solid #888',
            padding: '3px 8px',
            background: '#c8c8c8',
          }}
        >
          I/O
        </div>
        <div className="ps-hw-btn ps-hw-btn--reset" title="Reset">R</div>
        <div className="ps-hw-btn ps-hw-btn--eject" title="Eject">E</div>
        <div className="ps-hw-btn ps-hw-btn--power" title="Open">O</div>

        <WalletMultiButton
          style={{
            backgroundColor: '#a8a8a8',
            color: '#333',
            borderRadius: 0,
            border: '2px solid #d8d8d8',
            borderBottomColor: '#666',
            borderRightColor: '#666',
            fontFamily: '"Press Start 2P", monospace',
            fontSize: '6px',
            textTransform: 'uppercase',
            height: '28px',
            padding: '0 10px',
            letterSpacing: 1,
            boxShadow: '2px 2px 0px rgba(0,0,0,0.4)',
          }}
        />
      </div>
    </nav>
  );
}
