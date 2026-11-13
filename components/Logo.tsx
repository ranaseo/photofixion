type Props = { variant?: "light" | "pink" | "dark"; size?: number };
const colors = {
  light: { main: "#18151C", pixel: "#D91B63" }, // on white
  pink: { main: "#FFFFFF", pixel: "#FFC933" },  // on brand pink (primary)
  dark: { main: "#FFFFFF", pixel: "#FFC933" },  // on black
};

export function Mark({ variant = "light", size = 40 }: Props) {
  const c = colors[variant];
  return (
    <svg width={size} height={size} viewBox="4 4 92 92" aria-hidden="true" focusable="false">
      {[0, 90, 180, 270].map((r) => (
        <path key={r} d="M32 6H61V32H6Z" fill={c.main} transform={`rotate(${r} 50 50)`} />
      ))}
      <rect x="39" y="39" width="22" height="22" fill={c.pixel} />
    </svg>
  );
}

export default function Logo({ variant = "light", size = 40 }: Props) {
  return (
    <span className="logo" style={{ color: colors[variant].main }}>
      <Mark variant={variant} size={size} />
      <span className="logo-word">PHOTO FIXION</span>
    </span>
  );
}
