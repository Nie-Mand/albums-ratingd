import Albums from "./pages/Albums"
import Artists from "./pages/Artists"
import Singles from "./pages/Singles"
import Album from "./pages/Album";
import Singles from "./pages/EPs";
import Album from "./pages/EP";
import Footer from "./Footer"
import Navbar from "./Navbar";

function App() {

  return (
    <div className="font-sunk bg-[#212223] min-h-screen text-gray-100 flex flex-col">
      <Navbar />
      <div className="py-20">
        <Albums />
        <Singles />
        <Artists />
        <Album />
        <EP />
        <EPs />
      </div>
      <Footer />
    </div>
  );
}

export default App
