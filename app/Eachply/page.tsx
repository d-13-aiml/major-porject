'use client'

import Card3dDemo from '@/components/3dCards' // adjust path as needed

export default function Page() {
  return (
    <main className="min-h-screen bg-[#0a0a0f] flex flex-col items-center justify-center px-4 py-20 relative overflow-hidden">

      {/* Background glow blobs */}
      <div className="absolute top-[-100px] left-[-100px] w-[500px] h-[500px] rounded-full bg-violet-700/20 blur-[120px] pointer-events-none" />
      <div className="absolute bottom-[-80px] right-[-80px] w-[400px] h-[400px] rounded-full bg-indigo-500/20 blur-[100px] pointer-events-none" />

      {/* Header text */}
      <div className="text-center mb-16 z-10">
        <p className="text-xs uppercase tracking-[0.35em] text-violet-400 font-semibold mb-4">
          Interactive UI
        </p>
        <h1
          className="text-5xl sm:text-6xl font-bold text-white mb-5 leading-tight"
          style={{ fontFamily: "'Playfair Display', serif" }}
        >
          3D Hover Card
        </h1>
        <p className="text-zinc-400 text-lg max-w-md mx-auto leading-relaxed">
          Move your cursor over the card below to experience real-time 3D depth and motion.
        </p>
      </div>

      {/* Card */}
      <div className="z-10">
        <Card3dDemo />
      </div>

      {/* Footer hint */}
      <p className="mt-14 text-zinc-600 text-sm z-10 tracking-wide">
        ↑ Hover to interact
      </p>

    </main>
  )
}