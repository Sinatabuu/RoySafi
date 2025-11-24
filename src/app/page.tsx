// src/app/page.tsx
export default function Home() {
  return (
    <main className="min-h-screen bg-white font-sans">
      <section className="pt-16 pb-12 px-4 text-center md:pt-24">
        <h1 className="text-3xl md:text-5xl font-bold text-gray-900 mb-4">
          Roysafi for Roysambu
        </h1>
        <p className="text-lg md:text-xl text-gray-700 max-w-2xl mx-auto mb-8">
          Building a safer, fairer, and more connected Roysambu — one street at a time.
        </p>
        <div className="flex flex-col sm:flex-row justify-center gap-4">
          <a 
            href="/volunteer" 
            className="px-6 py-3 bg-green-600 text-white font-medium rounded-lg hover:bg-green-700 transition"
          >
            Join the Team
          </a>
          <a 
            href="/donate" 
            className="px-6 py-3 bg-gray-800 text-white font-medium rounded-lg hover:bg-gray-900 transition"
          >
            Support the Campaign
          </a>
        </div>
      </section>
    </main>
  );
}