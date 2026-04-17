import Link from "next/link";

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50 p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-3xl font-bold text-gray-900">
          地域のお店を探せるアプリ
        </h1>
        <p className="mt-4 text-gray-600">
          地元のお店の情報やクーポンをまとめて見られるサービスです。
        </p>

        <div className="mt-6">
          <Link
            href="/shops"
            className="inline-block rounded-lg bg-blue-600 px-5 py-3 text-white"
          >
            お店を探す
          </Link>
        </div>
      </div>
    </main>
  );
}