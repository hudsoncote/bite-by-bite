import Link from "next/link";

export default function Home() {
  return (
    <div>
      <h1 className="text-3xl font-bold">Bite by Bite</h1>
      <p className="mt-2 opacity-80">
        launchpad '26 🚀
      </p>
      <div className="mt-4 flex gap-3">
        <Link
          href="/dining"
          className="border border-gray-300/50 px-4 py-2 font-medium hover:bg-gray-500/20"
        >
          View dining halls
        </Link>
        <Link
          href="/tracker"
          className="border border-gray-300/50 px-4 py-2 font-medium hover:bg-gray-500/20"
        >
          Open tracker
        </Link>
      </div>
    </div>
  );
}
