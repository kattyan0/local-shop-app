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
        <h1 className="text-3xl font-bold text-gray-800">お店一覧</h1>

        <div className="mt-6 grid gap-4">
          {shops.map((shop) => (
            <div className="rounded-xl border p-5 shadow-sm bg-white">
  <h2 className="text-xl font-semibold text-gray-900">
    カフェひまわり
  </h2>

  <p className="text-sm text-gray-500 mt-1">
    カフェ / 東海市
  </p>

  <p className="mt-2 text-gray-700">
    落ち着いた雰囲気のカフェです
  </p>

  <p className="mt-2 text-sm">
    営業時間: 10:00〜19:00
  </p>

  <div className="mt-3 bg-red-100 text-red-600 px-3 py-2 rounded-md text-sm">
    🎉 ドリンク1杯無料
  </div>

  <button className="mt-4 bg-black text-white px-4 py-2 rounded-lg">
    詳細を見る
  </button>
</div>



          ))}
        </div>
      </div>
    </main>
  );
}