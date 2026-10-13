import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { Suspense } from "react";

import { articles, getArticle } from "../../articles";

export function generateStaticParams() {
  return articles.map((article) => ({ slug: article.slug }));
}

async function ArticleBody({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const article = getArticle(slug);

  if (!article) {
    notFound();
  }

  const { Content } = article;

  return (
    <>
      <header>
        <h1 className="text-3xl font-bold">{article.title}</h1>
      </header>

      {article.image ? (
        <Image
          src={article.image}
          alt={article.title}
          width={1500}
          height={1000}
          className="w-full h-auto rounded-lg"
          priority
        />
      ) : (
        <div
          role="img"
          aria-label={`Placeholder image for ${article.title}`}
          className="w-full aspect-[3/2] rounded-lg bg-zinc-200 dark:bg-zinc-800 flex items-center justify-center text-zinc-400 dark:text-zinc-600"
        >
          Image coming soon
        </div>
      )}

      <Content />
    </>
  );
}

export default function ArticlePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col gap-8 py-32 px-16 bg-white dark:bg-black">
        <Link href="/articles" className="text-sm hover:underline">
          &larr; Back to articles
        </Link>

        <Suspense fallback={null}>
          <ArticleBody params={params} />
        </Suspense>
      </main>
    </div>
  );
}
