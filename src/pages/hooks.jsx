import { useEffect, useState } from "react"

export default function HookPage() {
  const [count, setCount] = useState(0)
  const hanldeClick = () => {
    setCount(count + 1)
  }
  useEffect(() => {
    document.title = "Total Count : " + count;
    return () => {
      document.title = "Vite + React"
    }
  })
  return (
    <div className="m-10">
      <p className="mb-2">Nilai Saat Ini Adalah : {count}</p>
      <button className="px-3 py-1 bg-blue-500 text-white rounded" onClick={hanldeClick}>Tambah</button>
    </div>
  )
}
