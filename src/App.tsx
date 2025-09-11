import { useState } from 'react'

export default function App() {
  const [count, setCount] = useState(0)

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100 text-gray-800">
      <h1 className="text-4xl font-bold mb-6">Vite + React + Tailwind</h1>

      <div className="p-6 bg-white rounded-2xl shadow-md flex flex-col items-center gap-4">
        <button
          onClick={() => setCount(count + 1)}
          className="px-6 py-3 bg-indigo-600 text-white rounded-lg shadow hover:bg-indigo-700 transition"
        >
          count is {count}
        </button>

        <p className="text-gray-600">
          Edit <code className="font-mono">src/App.tsx</code> and save to test HMR
        </p>
      </div>

      <p className="mt-8 text-sm text-gray-500">
        Tailwind is working 🎉
      </p>
    </div>
  )
}
