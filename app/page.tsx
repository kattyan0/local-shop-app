import Link from "next/link";

export default function HomePage() {
  return (
    <main className="relative min-h-screen overflow-hidden">
      {/* 背景画像 */}
      <div
        className="absolute inset-0 bg-cover bg-center blur-sm scale-105"
        style={{
          backgroundImage: "url('/city.jpg')",
        }}
      />

      {/* 白っぽいフィルター */}
      <div className="absolute inset-0 bg-white/70" />

      {/* コンテンツ */}
      <div className="relative z-10 flex min-h-screen items-center justify-center px-6 py-12">
        <div className="w-full max-w-5xl rounded-3xl bg-white/80 p-8 shadow-xl backdrop-blur-sm md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:items-center">
            {/* 左側 */}
            <div>
              <p className="text-sm font-semibold tracking-widest text-gray-500 uppercase">
                Local Shop Guide
              </p>

              <h1 className="mt-4 text-4xl font-bold leading-tight text-gray-900 md:text-5xl">
                地域のお店を
                <br />
                もっと身近に
              </h1>

              <p className="mt-6 text-base leading-7 text-gray-700 md:text-lg">
                地元のお店の魅力をまとめて見つけられる、
                地域密着型のショップ紹介サービスです。
                クーポンや店舗情報を通して、お店とお客さんをつなぎます。
              </p>

              <div className="mt-8 flex flex-col gap-4 sm:flex-row">
                <Link
                  href="/shops"
                  className="inline-block rounded-xl bg-black px-6 py-3 text-center text-white transition hover:bg-gray-800"
                >
                  お店一覧を見る
                </Link>

                <a
                  href="#features"
                  className="inline-block rounded-xl border border-gray-300 bg-white px-6 py-3 text-center text-gray-800 transition hover:bg-gray-100"
                >
                  特徴を見る
                </a>
              </div>
            </div>

            {/* 右側 */}
            <div className="grid gap-4">
              <div className="rounded-2xl bg-white/90 p-5 shadow-md backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-gray-900">
                  地域のお店を探せる
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  カフェ、ラーメン店、飲食店などを一覧で見つけられます。
                </p>
              </div>

              <div className="rounded-2xl bg-white/90 p-5 shadow-md backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-gray-900">
                  クーポンで集客
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  お店の魅力を発信しながら、お得な特典で来店のきっかけを作れます。
                </p>
              </div>

              <div className="rounded-2xl bg-white/90 p-5 shadow-md backdrop-blur-sm">
                <h2 className="text-lg font-semibold text-gray-900">
                  シンプルで見やすい
                </h2>
                <p className="mt-2 text-sm leading-6 text-gray-600">
                  スマホでも使いやすく、必要な情報をすぐ確認できるデザインを目指しています。
                </p>
              </div>
            </div>
          </div>

          {/* 下の特徴欄 */}
          <div
            id="features"
            className="mt-12 grid gap-4 border-t border-gray-200 pt-8 md:grid-cols-3"
          >
            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="text-base font-semibold text-gray-900">
                店舗情報
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                営業時間や場所、ジャンルなどを分かりやすく表示。
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="text-base font-semibold text-gray-900">
                クーポン表示
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                お得な情報をすぐ見つけられ、来店につながります。
              </p>
            </div>

            <div className="rounded-2xl bg-gray-50 p-5">
              <h3 className="text-base font-semibold text-gray-900">
                地域密着
              </h3>
              <p className="mt-2 text-sm text-gray-600">
                特定の市町村に絞ることで、地元のお店を応援できます。
              </p>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}