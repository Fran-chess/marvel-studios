import Footer from "./components/Footer"
import Header from "./components/Header"
import Main from "./components/Main"

function App() {
  return (
    <div className='container mx-auto h-screen bg-zinc-50 dark:bg-zinc-950 font-mont'>
      <Header />
      <Main />
      <Footer />
    </div>
  )
}

export default App
