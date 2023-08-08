import { useState, useCallback  } from "react";
import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"


function App() {
  return (
    <div className='h-screen bg-zinc-50 dark:bg-zinc-950 font-mont grid grid-rows-custom'>
    <Header  />
    <Main  />
    <Footer />
  </div>
  )
}

export default App
