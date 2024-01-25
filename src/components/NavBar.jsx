import { useState } from "react"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faXmark } from "@fortawesome/free-solid-svg-icons";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <div className="flex justify-between">
      <a href="/" className="py-8 ml-4 text-2xl hover:text-gray-700 hover:duration-300 font-bold">Natalia Arbeláez Salgado</a>
      <div className="flex items-center justify-between">
      <div>
        <div className="flex lg:hidden">
          <div
            className="space-y-2 mr-4"
            onClick={() => setIsNavOpen((prev) => !prev)}
          >
          <FontAwesomeIcon icon={faBars} size="xl"/>
          </div>
          <div className={isNavOpen ? "flex flex-col justify-evenly items-center absolute w-full h-[50vh] top-0 left-0 bg-black z-10 " : "hidden"}>
            <div
              className="absolute top-0 right-0 px-4 py-8"
              onClick={() => setIsNavOpen(false)}
            >
            <FontAwesomeIcon icon={faXmark} size="xl"/>
            </div>
            <div className="flex flex-col gap-8">
            <a href="/#projects" reloadDocument className="hover:bg-gray-700">Projects</a>
            <a href="/about-me" className="hover:text-gray-700 ">About me</a>
            <a href="/contact" className="mr-8 hover:text-gray-700">Contact</a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex gap-8">
        <a href="/#projects" reloadDocument className="py-8 border-t-4 border-black hover:text-gray-700 hover:border-white hover:border-t-4">Projects</a>
        <a href="/about-me" className="py-8 border-t-4 border-black hover:text-gray-700  hover:border-white hover:border-t-4">About me</a>
        <a href="/contact" className="py-8 mr-8 border-t-4 border-black hover:text-gray-700  hover:border-white hover:border-t-4">Contact</a>
      </div>
      </div>
    </div>
    </div>
  )
}

export default NavBar