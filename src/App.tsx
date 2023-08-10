import Albums from "./pages/Albums"
import Artists from "./pages/Artists"
import Singles from "./pages/Singles"
import Footer from "./Footer"
import Navbar from "./Navbar"
import Album from "./pages/Album"

function App() {

  return (
    <div className="font-sunk bg-[#212223] min-h-screen text-gray-100 flex flex-col">
      <Navbar />
      <div className="py-20">
      <Albums />
      <Singles />
      <Artists />
      <Album />
      </div>
      <Footer /> 
    </div>
  )
}

export default App
