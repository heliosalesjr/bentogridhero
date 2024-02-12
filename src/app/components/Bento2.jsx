import React from 'react'
{'reference here: https://lexingtonthemes.com/posts/advance-grid-layouts/'}
function Bento2() {
  return (
    <>
        <div class="grid grid-cols-5 grid-rows-5 gap-2 text-white">
            <div className="bg-slate-300 row-span-4">1</div>
            <div className="bg-slate-300 col-span-2 row-span-3">2</div>
            <div className="bg-slate-300 row-span-4 col-start-5 row-start-2">6</div>
            <div className="bg-slate-300 row-span-2 col-start-2 row-start-4">7</div>
            <div className="bg-slate-300 col-start-1 row-start-5">9</div>
            <div className="bg-slate-300 row-span-2 col-start-3 row-start-4">10</div>
            <div className="bg-slate-300 row-span-5 col-start-4 row-start-1">12</div>
            <div className="bg-slate-300 col-start-5 row-start-1">14</div>
        </div>
    </>
  )
}

export default Bento2