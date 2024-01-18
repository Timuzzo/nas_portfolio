import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faInstagram } from "@fortawesome/free-brands-svg-icons"
import { faBehance } from "@fortawesome/free-brands-svg-icons"
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons"

const Footer = () => {
  return (
  <div className="flex flex-col justify-center items-center gap-8">
    <p className="text-white text-5xl font-bold">Let's create something that matters!</p>
    <div className="flex gap-8">
      <a href="https://www.instagram.com/nataliadoesdesign/"><FontAwesomeIcon icon={faInstagram} size="xl"/></a>
      <a href="https://www.behance.net/natiarbela9e07"><FontAwesomeIcon icon={faBehance} size="xl"/></a>
      <a href="https://www.linkedin.com/in/natalia-arbelaez-salgado/"><FontAwesomeIcon icon={faLinkedinIn} size="xl"/></a>
    </div>
    <a className="mb-8 text-base hover:text-gray-700" href="/copyright">Copyright</a>
  </div>
  )
}

export default Footer
