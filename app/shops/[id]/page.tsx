type Shop = {
  id: number;
  name: string;
  category: string;
  area: string;
  hours: string;
  description: string;
  coupon: string;
};

const shops: Shop[] = [
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

export default async function ShopDetailPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const shop = shops.find((s) => s.id === Number(id));

  if (!shop) {
    return <main className="p-8">お店が見つかりません。</main>;
  }

  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-4xl rounded-xl bg-white p-6 shadow">
        <h1 className="text-3xl font-bold">{shop.name}</h1>
        <p className="mt-2 text-gray-500">
          {shop.category} / {shop.area}
        </p>
        <p className="mt-4">{shop.description}</p>
        <p className="mt-4">営業時間: {shop.hours}</p>

        <div className="mt-6 rounded-lg border border-red-200 bg-red-50 p-4">
          <h2 className="font-semibold text-red-700">クーポン</h2>
          <p className="mt-2">{shop.coupon}</p>
        </div>
      </div>
    </main>
  );
}