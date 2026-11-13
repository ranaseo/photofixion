// Native <details>: answers stay in the HTML for crawlers and AI readers, no JavaScript needed.
export default function Faq({ items }: { items: { q: string; a: string }[] }) {
  return (
    <div className="faq">
      {items.map((f) => (
        <details key={f.q}>
          <summary><h3>{f.q}</h3><span aria-hidden="true" className="faq-plus" /></summary>
          <p>{f.a}</p>
        </details>
      ))}
    </div>
  );
}
