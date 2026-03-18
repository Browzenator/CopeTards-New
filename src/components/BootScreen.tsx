export function BootScreen() {
  return (
    <div className="ps-boot">
      <div className="ps-boot-diamond" />
      <div
        style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: 8,
          color: 'var(--color-ps-gray)',
          letterSpacing: 4,
          opacity: 0,
          animation: 'ps-fi 0.6s 1.2s forwards',
        }}
      >
        COPETARD INC.
      </div>
      <div
        style={{
          fontFamily: 'var(--font-pixel)',
          fontSize: 6,
          color: '#555',
          letterSpacing: 2,
          marginTop: 12,
          opacity: 0,
          animation: 'ps-fi 0.6s 2s forwards',
        }}
      >
        COPE COMPUTER ENTERTAINMENT
      </div>
    </div>
  );
}
