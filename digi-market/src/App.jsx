import { Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/footer'
import CardGrid from './pages/Homepage'
import Cosmetics from './pages/cosmetics'
import Appliances from './pages/appliances'
import Hardware from './pages/hardware'  // Add this import
import AddProduct from './pages/AddProduct'  // Make sure this path is correct

function App() {
  return (
    <div className="min-h-screen min-w-[1527px] flex flex-col bg-grey-300">
      <Header />
      <main className="flex-1 container mx-auto px-4 py-8">
        <Routes>
          <Route path="/" element={<CardGrid />} />
          <Route path="/cosmetics" element={<Cosmetics />} />
          <Route path="/appliances" element={<Appliances />} />
          <Route path="/hardware" element={<Hardware />} /> {/* Changed from Hardwares to Hardware */}
          <Route path="/AddProduct" element={<AddProduct />} /> {/* Updated to match URL case */}
        </Routes>
      </main>
      <Footer />
    </div>
  )
}

export default App
