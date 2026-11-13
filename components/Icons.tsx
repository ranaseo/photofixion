const p = { fill: "none", stroke: "currentColor", strokeWidth: 2, strokeLinecap: "round" as const, strokeLinejoin: "round" as const };
const icons: Record<string, React.ReactNode> = {
  "clipping-path": <><path d="M5 19C5 9 9 5 19 5" {...p} /><rect x="3" y="17" width="4" height="4" {...p} /><rect x="17" y="3" width="4" height="4" {...p} /></>,
  "background-removal": <><rect x="3" y="3" width="18" height="18" rx="2" strokeDasharray="3 3" {...p} /><circle cx="12" cy="12" r="4.5" {...p} /></>,
  "image-masking": <><rect x="3" y="3" width="18" height="18" rx="2" {...p} /><path d="M12 3v18" {...p} /><path d="M12 8h9M12 13h9M12 18h9" {...p} /></>,
  "ghost-mannequin": <><path d="M8 3 3 7l3 3 1-1v12h10V9l1 1 3-3-5-4a4 4 0 0 1-8 0Z" {...p} /></>,
  "photo-retouching": <><path d="m4 20 9-9M14 4l1.2 2.8L18 8l-2.8 1.2L14 12l-1.2-2.8L10 8l2.8-1.2Z" {...p} /><path d="M19 15v4M17 17h4" {...p} /></>,
  "color-correction": <><circle cx="12" cy="12" r="9" {...p} /><path d="M12 3v18M12 7a5 5 0 0 1 0 10" {...p} /></>,
  "shadow-creation": <><rect x="7" y="4" width="10" height="11" rx="2" {...p} /><path d="M5 20h14" {...p} /><path d="M8 18h8" {...p} /></>,
  "product-photo-editing": <><path d="M4 8h16l-1.5 12h-13Z" {...p} /><path d="M9 8V6a3 3 0 0 1 6 0v2" {...p} /></>,
  speed: <><circle cx="12" cy="13" r="8" {...p} /><path d="M12 13V8M9 2h6" {...p} /></>,
  skill: <><path d="m12 3 2.7 5.6 6.1.8-4.5 4.3 1.1 6.1L12 16.9 6.6 19.8l1.1-6.1L3.2 9.4l6.1-.8Z" {...p} /></>,
  savings: <><circle cx="12" cy="12" r="9" {...p} /><path d="M15 9.5c-.5-1-1.6-1.5-3-1.5-1.7 0-3 .8-3 2s1.3 1.800 3 2 3 .8 3 2-1.3 2-3 2c-1.4 0-2.5-.5-3-1.5M12 6v2M12 16v2" {...p} /></>,
};
export default function Icon({ name, size = 28 }: { name: string; size?: number }) {
  return <svg width={size} height={size} viewBox="0 0 24 24" aria-hidden="true" focusable="false">{icons[name]}</svg>;
}
