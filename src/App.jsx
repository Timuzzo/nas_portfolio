import NavBar from "./components/NavBar"
import LandingPage from "./components/LandingPage"
import Footer from "./components/Footer"
import Copyright from "./components/Copyright"
import AboutMe from "./components/AboutMe"
import Contact from "./components/Contact"
import Medellin from "./components/projects/Medellin"
import {FeriaDeLasFlores} from "./components/projects/FeriaDeLasFlores"
import Abholzung from "./components/projects/Abholzung"
import ModularB from "./components/projects/modularB"
import Sepiensa from "./components/projects/Sepiensa"
import NonNocere from "./components/projects/NonNocere"
import MyBowl from "./components/projects/MyBowl"
import NebenAn from "./components/projects/NebenAn"
import { Routes, Route } from "react-router-dom"

function App() {

  return (
    <>
    <NavBar/>
    <Routes>
      <Route path="/" element={<LandingPage/>}/>
      <Route path="/copyright" element={<Copyright/>}/>
      <Route path="/about-me" element={<AboutMe/>}/>
      <Route path="/contact" element={<Contact/>}/>
      <Route path="/medellin" element={<Medellin/>}/>
      <Route path="/feria-de-las-flores" element={<FeriaDeLasFlores/>}/>
      <Route path="/modelar-b" element={<ModularB/>}/>
      <Route path="/sepiensa" element={<Sepiensa/>}/>
      <Route path="/abholzung" element={<Abholzung/>}/>
      <Route path="/non-nocere" element={<NonNocere/>}/>
      <Route path="/my-bowl" element={<MyBowl/>}/>
      <Route path="/nebenan" element={<NebenAn/>}/>
      <Route path="*" element={<LandingPage/>}/>
    </Routes>
    <Footer/>
    </>
  )
}

export default App
