import { Route, Routes } from "react-router-dom"
import Home from "./components/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import { Toaster } from "react-hot-toast";

function App() {
  

  return (
    <>

    <Toaster position="top-right"/>
      <Routes>
         <Route path="/" element={<Home/>}/>
         <Route path="/about" element={<About/>} />
         <Route  path="/contact" element={<Contact/>} />
      </Routes>
        
   
    </>
  )
}

export default App
