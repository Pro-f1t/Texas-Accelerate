import Link from "next/link";
import { ChevronRight } from "./Icons";

/** Blue band + breadcrumb at the top of every inner page. */
export default function PageHeader({
  title,
  crumbs,
}: {
  title: string;
  crumbs: { label: string; href?: string }[];
}) {
  return (
    // Phone band is deliberately shallow — just enough to clear the 80px fixed
    // nav. Desktop keeps the tall band from the Figma frames.
    <section className="bg-accent pt-28 pb-6 md:pt-52 md:pb-12">
      <div className="shell">
        <h1 className="text-[clamp(2rem,4.4vw,3rem)] leading-[1.26] font-semibold text-ink">
          {title}
        </h1>
        <nav aria-label="Breadcrumb" className="mt-4">
          <ol className="flex flex-wrap items-center gap-2 text-tmd text-ink">
            <li>
              <Link href="/" className="hover:underline">
                Home
              </Link>
            </li>
            {crumbs.map((c) => (
              <li key={c.label} className="flex items-center gap-2">
                <ChevronRight className="h-4 w-4 text-ink/70" />
                {c.href ? (
                  <Link href={c.href} className="hover:underline">
                    {c.label}
                  </Link>
                ) : (
                  <span>{c.label}</span>
                )}
              </li>
            ))}
          </ol>
        </nav>
      </div>
    </section>
  );
}
