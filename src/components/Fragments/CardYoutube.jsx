import React from 'react'

export default function CardYoutube({time, title, desc}) {
  return (
    <div className="p-2 inline-block">
      <div className="relative flex items-center bg-slate-200 w-52 h-28">
        <h1 className="font-bold ml-2">Chanel Youtube</h1>
        <p className="absolute text-white bg-black rounded bottom-2 right-2 px-1 text-xs">{time}</p>
      </div>
      <h1 className="font-bold mt-1 text-sm">{title}</h1>
      <p className="text-xs text-slate-400">{desc}</p>
    </div>
  )
}
