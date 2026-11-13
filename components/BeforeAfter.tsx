"use client";
import { useState } from "react";

function Bag({ vivid }: { vivid: boolean }) {
  const body = vivid ? "#D91B63" : "#9C6578";
  const dark = vivid ? "#A8124B" : "#7C5060";
  const metal = vivid ? "#FFC933" : "#B7A26A";
  return (
    <svg viewBox="0 0 560 420" preserveAspectRatio="xMidYMid slice" aria-hidden="true">
      {vivid ? (
        <>
          <rect width="560" height="420" fill="#FFFFFF" />
          <ellipse cx="280" cy="352" rx="150" ry="14" fill="#18151C" opacity="0.12" />
        </>
      ) : (
        <>
          <rect width="560" height="420" fill="#B4AA9C" />
          <rect y="300" width="560" height="120" fill="#8E8477" />
          <rect x="30" y="40" width="120" height="180" fill="#A39989" />
          <rect x="430" y="90" width="90" height="210" fill="#9D9383" />
          <ellipse cx="330" cy="356" rx="190" ry="26" fill="#18151C" opacity="0.28" />
        </>
      )}
      <path d="M215 170C215 90 345 90 345 170" fill="none" stroke={dark} strokeWidth="16" strokeLinecap="round" />
      <path d="M160 165H400L425 345H135Z" fill={body} />
      <path d="M160 165H400L404 195H156Z" fill={dark} />
      <circle cx="215" cy="180" r="9" fill={metal} />
      <circle cx="345" cy="180" r="9" fill={metal} />
      <rect x="250" y="235" width="60" height="44" rx="6" fill={metal} />
    </svg>
  );
}

/** Drag slider. Decorative illustration: swap <Bag/> for real before/after photos (next/image). */
export default function BeforeAfter() {
  const [pos, setPos] = useState(50);
  return (
    <figure className="ba" style={{ ["--pos" as string]: `${pos}%` }}>
      <div className="ba-layer"><Bag vivid /></div>
      <div className="ba-layer ba-before"><Bag vivid={false} /></div>
      <span className="ba-tag ba-tag-l">Before</span>
      <span className="ba-tag ba-tag-r">After</span>
      <span className="ba-line" aria-hidden="true"><span /></span>
      <input
        type="range" min={0} max={100} value={pos}
        onChange={(e) => setPos(Number(e.target.value))}
        aria-label="Compare before and after"
      />
      <figcaption className="sr-only">Illustration of a product photo before and after background removal and colour correction.</figcaption>
    </figure>
  );
}
