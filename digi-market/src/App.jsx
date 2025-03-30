import Header from './components/Header'
import Footer from './components/footer'
import './App.css'

import { CardGrid } from './components/Homepage'

function App() {
  return (
    <div className="  min-h-screen min-w-screen-lg max-w-[1366px] flex flex-col w-full  bg-black">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <CardGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
