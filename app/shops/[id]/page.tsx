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

export default function ShopDetailPage({ params }: any) {
  const shop = shops.find((s) => s.id === Number(params.id));

  if (!shop) {
    return <div className="p-10">店舗が見つかりません</div>;
  }

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
        <div className="mx-auto max-w-3xl rounded-3xl bg-white/90 p-8 shadow-xl backdrop-blur-sm">
          
          <Link href="/shops" className="text-sm text-gray-500 hover:underline">
            ← 一覧に戻る
          </Link>

          <h1 className="mt-4 text-3xl font-bold text-gray-900">
            {shop.name}
          </h1>

          <p className="mt-2 text-sm text-gray-500">
            {shop.category} / {shop.area}
          </p>

          <p className="mt-6 text-gray-700 leading-relaxed">
            {shop.description}
          </p>

          <div className="mt-6 space-y-2 text-sm">
            <p>営業時間: {shop.hours}</p>
          </div>

          <div className="mt-6 bg-red-100 text-red-600 px-4 py-3 rounded-lg text-sm font-medium">
            🎉 {shop.coupon}
          </div>

          <button className="mt-6 w-full bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
            クーポンを利用する
          </button>
        </div>
      </div>
    </main>
  );
}