import Link from "next/link";

const shops = [
  {
    id: 1,
    name: "カフェひまわり",
    category: "カフェ",
    area: "〇〇市",
    hours: "10:00〜19:00",
    description: "落ち着いた雰囲気の地域密着カフェ",
    coupon: "ドリンク1杯無料",
  },
  {
    id: 2,
    name: "らーめん青空",
    category: "ラーメン",
    area: "〇〇市",
    hours: "11:00〜22:00",
    description: "濃厚スープが人気のお店",
    coupon: "大盛り無料",
  },
];

export default function ShopsPage() {
  return (
    <main className="min-h-screen bg-white p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-2xl font-bold">お店一覧</h1>

        <div className="mt-6 grid gap-4">
          {shops.map((shop) => (
            <div key={shop.id} className="rounded-xl border p-5 shadow-sm">
              <h2 className="text-xl font-semibold">{shop.name}</h2>
              <p className="mt-1 text-sm text-gray-500">
                {shop.category} / {shop.area}
              </p>
              <p className="mt-2 text-sm text-gray-700">{shop.description}</p>
              <p className="mt-2 text-sm">営業時間: {shop.hours}</p>
              <p className="mt-2 text-sm font-medium text-red-600">
                クーポン: {shop.coupon}
              </p>

              <Link
                href={`/shops/${shop.id}`}
                className="mt-4 inline-block rounded-lg bg-gray-900 px-4 py-2 text-white"
              >
                詳細を見る
              </Link>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}