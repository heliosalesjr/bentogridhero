import React from 'react'

function Bento() {
  return (
    <>
        <div className="grid auto-rows-[300px] grid-cols-3 gap-4 p-8">
            {[...Array(7)].map((_, i) => (
                <div
                key={i}
                className={`row-span-1 rounded-xl border-2 border-slate-400/10 bg-slate-100 p-4 ${
                    i === 3 || i === 6 ? "col-span-2" : ""
                }`}
                ></div>
            ))}
        </div>
    </>
  )
}

export default Bento