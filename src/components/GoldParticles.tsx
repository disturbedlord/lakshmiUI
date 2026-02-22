const GoldParticles = () => {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    left: `${Math.random() * 100}%`,
    size: Math.random() * 4 + 2,
    duration: Math.random() * 10 + 8,
    delay: Math.random() * 10,
  }));

  return (
    <div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
      {particles.map((p) => (
        <div
          key={p.id}
          className="absolute bottom-0 rounded-full bg-primary/30 animate-particle"
          style={{
            left: p.left,
            width: p.size,
            height: p.size,
            "--duration": `${p.duration}s`,
            "--delay": `${p.delay}s`,
          } as React.CSSProperties}
        />
      ))}
    </div>
  );
};

export default GoldParticles;
