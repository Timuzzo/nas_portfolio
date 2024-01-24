import { useState } from "react"

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
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
            <span className="block h-0.5 w-8 bg-white"></span>
          </div>
          <div className={isNavOpen ? "flex flex-col justify-evenly items-center absolute w-full h-[50vh] top-0 left-0 bg-black z-10 " : "hidden"}>
            <div
              className="absolute top-0 right-0 px-8 py-8"
              onClick={() => setIsNavOpen(false)}
            >
              <svg
                className="h-8 w-8 text-white"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="6" x2="6" y2="18" />
                <line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            </div>
            <div className="flex flex-col gap-8">
            <a href="/#projects" reloadDocument className="text-base hover:text-gray-700">Projects</a>
            <a href="/about-me" className="text-base hover:text-gray-700 ">About me</a>
            <a href="/contact" className="mr-8 text-base hover:text-gray-700">Contact</a>
            </div>
          </div>
        </div>
        <div className="hidden lg:flex gap-8">
        <a href="/#projects" reloadDocument className="py-8 text-base border-t-4 border-black hover:text-gray-700 hover:border-white hover:border-t-4">Projects</a>
        <a href="/about-me" className="py-8 text-base border-t-4 border-black hover:text-gray-700  hover:border-white hover:border-t-4">About me</a>
        <a href="/contact" className="py-8 mr-8 border-t-4 border-black text-base hover:text-gray-700  hover:border-white hover:border-t-4">Contact</a>
      </div>
      </div>
    </div>
    </div>
  )
}

export default NavBar