
const NavBar = () => {
  return (
    <div className="flex justify-between">
      <a className="py-8 ml-8 text-2xl hover:text-gray-700 hover:duration-300" href="#">Natalia Arbeláez Salgado</a>
      <div className="flex gap-8">
        <button className="py-8 text-base hover:text-gray-700 hover:border-white hover:border-t-4">Projects</button>
        <button className="py-8 text-base hover:text-gray-700  hover:border-white hover:border-t-4">About me</button>
        <button className="py-8 mr-8 text-base hover:text-gray-700  hover:border-white hover:border-t-4">Contact</button>
      </div>
    </div>
  )
}

export default NavBar