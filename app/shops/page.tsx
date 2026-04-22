import Link from "next/link";

const shops = [
  {
    id: 1,
    name: "カフェ ひまわり",
    category: "カフェ",
    area: "駅前商店街",
    description:
      "焼きたてのトーストと季節のコーヒーが人気。朝の散歩帰りに立ち寄る常連さんが多いお店です。",
    hours: "8:00-18:00",
    highlight: "平日10:00までドリンク50円引き",
  },
  {
    id: 2,
    name: "ラーメン桜家",
    category: "ラーメン",
    area: "中央通り",
    description:
      "だしの香りを大切にした一杯が評判。仕事帰りにふらっと入りやすい、あたたかい雰囲気です。",
    hours: "11:00-22:00",
    highlight: "大盛り無料サービス",
  },
  {
    id: 3,
    name: "菓子工房 こみち",
    category: "スイーツ",
    area: "川沿いエリア",
    description:
      "季節の果物を使った焼き菓子が並ぶ小さなお店。手土産にも自分へのごほうびにもおすすめです。",
    hours: "10:00-19:00",
    highlight: "週末限定の季節タルト",
  },
];

export default function ShopsPage() {
  return (
    <main className="mx-auto w-full max-w-6xl px-5 py-10 md:px-8 md:py-14">
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-8 md:p-10">
        <p className="text-sm tracking-[0.15em] text-gray-500 uppercase">
          Shop List
        </p>
        <h1 className="mt-3 text-3xl font-bold text-gray-900 md:text-4xl">
          お店一覧
        </h1>
        <p className="mt-3 text-sm leading-7 text-gray-700 md:text-base">
          地元の空気を感じられるお店を、カテゴリとエリア情報つきで紹介しています。
        </p>
      </section>

      <section className="mt-8 grid gap-5 md:grid-cols-2 lg:grid-cols-3">
        {shops.map((shop) => (
          <article
            key={shop.id}
            className="rounded-2xl border border-[var(--border)] bg-[var(--surface-soft)] p-6"
          >
            <h2 className="text-xl font-semibold text-gray-900">{shop.name}</h2>
            <p className="mt-1 text-sm text-gray-600">
              {shop.category} / {shop.area}
            </p>
            <p className="mt-3 text-sm leading-7 text-gray-700">{shop.description}</p>
            <p className="mt-3 text-sm text-gray-700">営業時間: {shop.hours}</p>
            <p className="mt-2 rounded-lg bg-green-50 px-3 py-2 text-sm text-green-900">
              {shop.highlight}
            </p>
            <Link
              href={`/shops/${shop.id}`}
              className="mt-4 inline-flex items-center justify-center rounded-xl bg-[var(--accent)] px-4 py-2 text-sm font-medium text-white transition hover:bg-[var(--accent-strong)]"
            >
              詳細を見る
            </Link>
          </article>
        ))}
      </section>
    </main>
  );
}
