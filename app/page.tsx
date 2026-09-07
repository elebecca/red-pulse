import Image from "next/image";

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-white flex items-center justify-center">
      <div className="text-center">
        <h1 className="text-4xl font-bold">Red Pulse</h1>
        <p className="mt-3 text-slate-400">
          Management Analytics Dashboard
        </p>
      </div>
    </main>
  );
}