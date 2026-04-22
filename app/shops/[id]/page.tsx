import Link from "next/link";
import { notFound } from "next/navigation";

const shops = [
  {
    id: 1,
    name: "カフェ ひまわり",
    category: "カフェ",
    area: "駅前商店街",
    description:
      "焼きたてのトーストと季節のコーヒーが人気。朝の散歩帰りに立ち寄る常連さんが多いお店です。",
    hours: "8:00-18:00",
    holiday: "木曜日",
    address: "〇〇市駅前1-2-3",
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
    holiday: "月曜日",
    address: "〇〇市中央通り5-8",
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
    holiday: "火曜日",
    address: "〇〇市川沿い3-4-1",
    highlight: "週末限定の季節タルト",
  },
];

type ShopDetailPageProps = {
  params: Promise<{ id: string }>;
};

export default async function ShopDetailPage({ params }: ShopDetailPageProps) {
  const { id } = await params;
  const shop = shops.find((item) => item.id === Number(id));

  if (!shop) {
    notFound();
  }

  return (
    <main className="mx-auto w-full max-w-4xl px-5 py-10 md:px-8 md:py-14">
      <section className="rounded-3xl border border-[var(--border)] bg-[var(--surface)] p-7 md:p-10">
        <Link href="/shops" className="text-sm text-gray-600 hover:underline">
          一覧に戻る
        </Link>

        <h1 className="mt-4 text-3xl font-bold text-gray-900">{shop.name}</h1>
        <p className="mt-2 text-sm text-gray-600">
          {shop.category} / {shop.area}
        </p>

        <p className="mt-6 text-sm leading-7 text-gray-700 md:text-base">
          {shop.description}
        </p>

        <dl className="mt-6 space-y-2 text-sm text-gray-800">
          <div>
            <dt className="font-semibold">営業時間</dt>
            <dd>{shop.hours}</dd>
          </div>
          <div>
            <dt className="font-semibold">定休日</dt>
            <dd>{shop.holiday}</dd>
          </div>
          <div>
            <dt className="font-semibold">住所</dt>
            <dd>{shop.address}</dd>
          </div>
        </dl>

        <p className="mt-6 rounded-lg bg-green-50 px-4 py-3 text-sm text-green-900">
          {shop.highlight}
        </p>
      </section>
    </main>
  );
}
