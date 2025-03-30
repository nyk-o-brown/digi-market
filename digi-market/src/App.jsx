import Header from './components/Header'
import Footer from './components/footer'
import './App.css'

import { CardGrid } from './components/Homepage'

function App() {
  return (
    <div className="  min-h-screen min-w-screen-lg  min-w-[1527px] flex flex-col   bg-grey-300">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <CardGrid />
      </main>
      <Footer />
    </div>
  )
}

export default App
