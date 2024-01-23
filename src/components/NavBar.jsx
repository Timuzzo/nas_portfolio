
const NavBar = () => {
  return (
    <div className="flex justify-between">
      <a href="/" className="py-8 ml-8 text-2xl hover:text-gray-700 hover:duration-300 font-bold">Natalia Arbeláez Salgado</a>
      <div className="flex gap-8">
        <a href="/#projects" reloadDocument className="py-8 text-base border-t-4 border-black hover:text-gray-700 hover:border-white hover:border-t-4">Projects</a>
        <a href="/about-me" className="py-8 text-base border-t-4 border-black hover:text-gray-700  hover:border-white hover:border-t-4">About me</a>
        <a href="/contact" className="py-8 mr-8 border-t-4 border-black text-base hover:text-gray-700  hover:border-white hover:border-t-4">Contact</a>
      </div>
    </div>
  )
}

export default NavBar