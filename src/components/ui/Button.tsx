import Link from "next/link";
import { type ReactNode } from "react";

type Variant = "primary" | "secondary" | "ghost";

type BaseProps = {
  children: ReactNode;
  variant?: Variant;
  className?: string;
};

const variantStyles: Record<Variant, string> = {
  primary: "bg-forest text-paper hover:bg-forest-light",
  secondary: "bg-ochre text-forest-dark hover:bg-ochre-light",
  ghost: "bg-transparent text-forest border border-forest/30 hover:border-forest",
};

const baseStyles =
  "inline-flex items-center justify-center rounded-full px-6 py-3 text-sm font-medium transition-colors duration-150 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-ochre";

export function Button({
  children,
  variant = "primary",
  className = "",
  href,
}: BaseProps & { href: string }) {
  return (
    <Link href={href} className={`${baseStyles} ${variantStyles[variant]} ${className}`}>
      {children}
    </Link>
  );
}
