import { useState } from 'react'
import './App.css'

function App() {
   const [bgcolor, setbgcolor] = useState("white")
   document.body.style.backgroundColor= bgcolor;
  return (
    <>

<div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
  <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-gray-500 bg-repeat-round"
    style={{background: "#3a2a2a",
            "border-radius": "50px"}}
  >
    <button className="outline-none px-4 py-1 rounded-full bg-orange-500 bg-repeat-round text-gray-50 shadow-lg" onClick={()=>setbgcolor("orange")}>orange</button>
    <button className="outline-none px-4 py-1 rounded-full bg-red-500 bg-repeat-round text-gray-50 shadow-lg" onClick={()=>setbgcolor("red")}>red</button>
    <button className="outline-none px-4 py-1 rounded-full bg-amber-500 bg-repeat-round text-gray-50 shadow-lg" onClick={()=>setbgcolor("yellow")}>yellow</button>
    <button className="outline-none px-4 py-1 rounded-full bg-green-600 bg-repeat-round text-gray-50 shadow-lg" onClick={()=>setbgcolor("green")}>green</button>
    <button className="outline-none px-4 py-1 rounded-full bg-black bg-repeat-round text-gray-50 shadow-lg" onClick={()=>setbgcolor("black")}>balck</button>
  </div>
</div>

    </>
  )
}

export default App
