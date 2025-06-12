import { useState } from 'react'

import './App.css'

export default function App() {
  return (
    <div className="font-bevietnam border border-black ">
      <div className="flex justify-between  border-red-600 items-center p-2 my-4">
      <img src="/logo.svg" alt="Logo of company" srcset="" />
      <img src="/icon-hamburger.svg" alt="Logo of company" srcset="" />
      </div>
      <div className=" border-black p-2">
      <img src="/illustration-intro.svg" alt="Logo of company" srcset="" />
      </div>
      <div className=" border flex flex-col">
        <h3 className="border-red-500 text-[2.5rem] text-[hsl(228,39%,23%)] font-[500] text-center my-2 ">Bring everyone together to build better products.</h3>
        <p className="text-[hsl(227,12%,61%)] text-center border-red-600 w-[90%] text-[1rem] my-2 m-auto">Manage makes it simple for software teams to plan day-to-day 
        tasks while keeping the larger team goals in view.</p>
        <button className="p-3 rounded-2xl my-2 text-white shadow-[hsl(12,88%,59%)] bg-[hsl(12,88%,59%)] self-center">Get Started</button>
      </div>
    </div>
  )
}
// hsl(227,12%,61%)