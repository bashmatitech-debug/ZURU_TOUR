type PostcardProps = {
  label: string;
  sublabel?: string;
  tone?: "forest" | "ochre" | "clay";
  className?: string;
};

const toneStyles = {
  forest: "bg-forest text-paper",
  ochre: "bg-ochre text-forest-dark",
  clay: "bg-clay text-paper",
};

/**
 * Stands in for a destination/business photo. Swap for a real <Image />
 * once photography is available — the label/sublabel API is intentionally
 * close to what an image caption would need.
 */
export function Postcard({ label, sublabel, tone = "forest", className = "" }: PostcardProps) {
  return (
    <div
      className={`flex aspect-[4/5] w-full flex-col justify-end rounded-2xl p-5 ${toneStyles[tone]} ${className}`}
    >
      <p className="font-display text-lg leading-tight">{label}</p>
      {sublabel ? <p className="mt-1 text-sm opacity-80">{sublabel}</p> : null}
    </div>
  );
}
