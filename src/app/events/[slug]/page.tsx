import { notFound } from "next/navigation";
import type { Metadata } from "next";
import PageHeader from "@/components/PageHeader";
import { PlaceholderArt } from "@/components/ui";
import { EVENTS } from "@/data/events";

export function generateStaticParams() {
  return EVENTS.map((e) => ({ slug: e.slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const post = EVENTS.find((e) => e.slug === slug);
  return { title: post ? `${post.title} | Texas Accelerate` : "Texas Accelerate" };
}

export default async function EventDetail({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const post = EVENTS.find((e) => e.slug === slug);
  if (!post) notFound();

  return (
    <>
      <PageHeader
        title={post.title}
        crumbs={[{ label: "Events", href: "/events" }, { label: post.title }]}
      />

      <article className="shell py-14 md:py-16">
        <div className="mx-auto max-w-[1000px]">
          <PlaceholderArt
            seed={post.seed}
            label={post.title}
            className="aspect-[21/9] w-full rounded-2xl"
          />

          <h2 className="mt-8 text-[clamp(1.5rem,3vw,2.25rem)] leading-tight font-semibold">
            {post.title}
          </h2>
          <p className="mt-3 text-tsm text-muted">{post.date}</p>

          <div className="mt-8 flex flex-col gap-5">
            {post.body.map((p, i) => (
              <p key={i} className="text-tsm leading-relaxed text-white/80">
                {p}
              </p>
            ))}
          </div>

          {post.pullQuote && (
            <blockquote className="mt-10 rounded-2xl bg-accent px-8 py-8 md:px-14">
              <p className="text-tsm leading-relaxed font-semibold text-ink">
                {post.pullQuote}
              </p>
            </blockquote>
          )}
        </div>
      </article>
    </>
  );
}
