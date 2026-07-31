import Image from "next/image";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { ArrowCircle } from "@/components/ui";
import { PROJECTS } from "@/data/projects";

export const metadata: Metadata = { title: "Projects | Texas Accelerate" };

export default function ProjectsPage() {
  return (
    <>
      <PageHeader title="Past and Current Projects" crumbs={[{ label: "Projects" }]} />

      <section className="shell py-16 md:py-20">
        {PROJECTS.length === 0 ? (
          <p className="h-display py-16">Coming Soon - Fall 2026</p>
        ) : (
          <div className="grid gap-8 lg:grid-cols-2">
            {PROJECTS.map((p) => (
              <article key={p.slug} className="group rounded-2xl bg-surface p-6">
                <div className="flex items-start justify-between gap-4">
                  <div>
                    <h2 className="text-dxs leading-tight font-semibold">{p.name}</h2>
                    <p className="mt-3 text-tsm text-white/85">{p.term}</p>
                    <p className="text-tsm text-white/85">Team size: {p.teamSize}</p>
                  </div>
                  <ArrowCircle tone="blue" size="sm" />
                </div>

                <div className="mt-5 overflow-hidden rounded-xl">
                  <Image
                    src={p.logo}
                    alt={p.name}
                    width={1270}
                    height={368}
                    className="h-auto w-full"
                  />
                </div>

                <p className="mt-5 text-tsm text-muted">{p.blurb}</p>
              </article>
            ))}
          </div>
        )}
      </section>
    </>
  );
}
