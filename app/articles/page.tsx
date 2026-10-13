import Link from "next/link";

import { articles } from "../articles";

export default function ArticlesPage() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <main className="flex flex-1 w-full max-w-6xl flex-col gap-8 py-32 px-16 bg-white dark:bg-black">
        <header>
          <h1 className="text-4xl font-bold">Articles</h1>
        
        </header>

        <ul className="flex flex-col gap-6">
          {articles.map((article) => (
            <li
              key={article.slug}
              className="border-b border-zinc-200 dark:border-zinc-800 pb-6"
            >
              <Link
                href={`/articles/${article.slug}`}
                className="text-xl font-semibold hover:underline"
              >
                {article.title}
              </Link>
              <p className="text-zinc-700 dark:text-zinc-300 mt-2">
                {article.description}
              </p>
            </li>
          ))}
        </ul>
      </main>
    </div>
  );
}
