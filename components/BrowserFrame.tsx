export function BrowserDots({ size = 9 }: { size?: number }) {
  return (
    <>
      {["#FF5F57", "#FEBC2E", "#28C840"].map((c) => (
        <span
          key={c}
          className="rounded-full"
          style={{ width: size, height: size, background: c }}
        />
      ))}
    </>
  );
}
