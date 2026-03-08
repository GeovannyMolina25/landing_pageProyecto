import Navbar from "./components/Navbar/Navbar"
import Hero from "./components/Hero/Hero"
import MasonryGrid from "./components/MasonryGrid/MasonryGrid"
import Footer from "./components/Footer/Footer"


function App() {

  return (
   <>
      <Navbar />
      <main>
        <Hero />
        <MasonryGrid />
      </main>
      <Footer />
    </>
  )
}

export default App
