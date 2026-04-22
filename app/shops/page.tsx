import Link from "next/link";

const shops = [
  {
    id: 1,
    name: "カフェひまわり",
    category: "カフェ",
    area: "横須賀市",
    description: "落ち着いた雰囲気のカフェです",
    hours: "10:00〜19:00",
    coupon: "ドリンク1杯無料",
  },
  {
    id: 2,
    name: "ラーメン青空",
    category: "ラーメン",
    area: "横須賀市",
    description: "こだわりのスープが人気",
    hours: "11:00〜22:00",
    coupon: "大盛り無料",
  },
];

export default function ShopsPage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 背景 */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{ backgroundImage: "url('/city.jpg')" }}
      />
      <div className="absolute inset-0 bg-white/70" />

      {/* コンテンツ */}
      <div className="relative z-10 p-8">
        <div className="mx-auto max-w-6xl">
          <h1 className="text-3xl font-bold text-gray-900">お店一覧</h1>

          <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {shops.map((shop) => (
              <div
                key={shop.id}
                className="rounded-2xl bg-white/90 p-5 shadow-md backdrop-blur-sm hover:shadow-xl transition"
              >
                <h2 className="text-xl font-semibold text-gray-900">
                  {shop.name}
                </h2>

                <p className="mt-1 text-sm text-gray-500">
                  {shop.category} / {shop.area}
                </p>

                <p className="mt-3 text-gray-700">{shop.description}</p>

                <p className="mt-2 text-sm">
                  営業時間: {shop.hours}
                </p>

                <div className="mt-3 bg-red-100 text-red-600 px-3 py-2 rounded-md text-sm">
                  🎉 {shop.coupon}
                </div>

                <Link
                  href={`/shops/${shop.id}`}
                  className="mt-4 inline-block bg-black text-white px-4 py-2 rounded-lg"
                >
                  詳細を見る
                </Link>
              </div>
            ))}
          </div>
        </div>
      </div>
    </main>
  );
}