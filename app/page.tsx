import Link from "next/link";

const featureSections = [
  {
    title: "今週のまち歩き",
    text: "季節の空気を感じながら、今週おすすめの3店舗をめぐる小さな散歩へ。『今日はどこ行こう？』に、ちょうどいい答えを届けます。",
  },
  {
    title: "地元の人が通う理由",
    text: "長く愛される店には、ちゃんと理由があります。味や価格だけではない、通いたくなる背景を紹介します。",
  },
  {
    title: "店主さんのひとこと",
    text: "お店の空気は、店主さんの言葉にいちばん表れます。はじめてでも安心できる、やさしい一言を集めました。",
  },
  {
    title: "商店街2時間モデルコース",
    text: "買い物、ひと休み、寄り道まで2時間でしっかり満喫できる、ちょうどいい回遊プランを提案します。",
  },
];

export default function HomePage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-14">
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 shadow-sm md:p-12">
        <p className="text-sm font-medium tracking-[0.18em] text-gray-500 uppercase">
          Local Shop Guide
        </p>
        <h1 className="mt-4 text-3xl font-bold leading-tight text-gray-900 md:text-5xl">
          この町を、今日もっと好きになる
        </h1>
        <p className="mt-5 max-w-3xl text-base text-gray-700 md:text-lg">
          点数ではなく、暮らしで選ぶ。地元目線で見つける、あなたの次の一軒。
        </p>

        <div className="mt-8 flex flex-col gap-3 sm:flex-row">
          <Link
            href="/shops"
            className="inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-6 py-3 text-sm font-medium text-white transition hover:bg-[var(--accent-strong)]"
          >
            お店一覧を見る
          </Link>
          <a
            href="#discovery"
            className="inline-flex items-center justify-center rounded-xl border border-[var(--border)] bg-white px-6 py-3 text-sm font-medium text-gray-700 transition hover:bg-gray-50"
          >
            今週の特集を見る
          </a>
        </div>
      </section>

      <section id="discovery" className="mt-10 grid gap-5 md:grid-cols-2">
        {featureSections.map((section) => (
          <article
            key={section.title}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900">{section.title}</h2>
            <p className="mt-3 text-sm leading-7 text-gray-700 md:text-base">
              {section.text}
            </p>
          </article>
        ))}
      </section>

      <section className="mt-10 rounded-2xl border border-[var(--border)] bg-[var(--surface)] p-7 md:p-10">
        <h2 className="text-2xl font-bold text-gray-900">気分でお店を見つける</h2>
        <p className="mt-3 text-sm leading-7 text-gray-700 md:text-base">
          朝の一杯、仕事帰りのごはん、週末のごほうび。いまの気分に合わせて、ぴったりのお店を探してみましょう。
        </p>
      </section>
    </main>
  );
}
