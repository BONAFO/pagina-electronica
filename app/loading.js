
"use client"

export default function Loading() {
  return (
    <main className="fixed inset-0 z-[999] flex items-center justify-center bg-zinc-950 animate-[fadeIn_0.2s_ease-out]">
      <div className="flex flex-col items-center">
        <div className="flex h-20 w-20 items-center justify-center rounded-2xl bg-orange-500 text-4xl animate-spin">
          ⚡
        </div>

        <p className="mt-5 text-sm font-medium text-zinc-500">
          Cargando...
        </p>
      </div>

      <style jsx>{`
        @keyframes fadeIn {
          from {
            opacity: 0;
          }

          to {
            opacity: 1;
          }
        }
      `}</style>
    </main>
  );
}

