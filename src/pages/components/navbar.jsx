import React from "react"
import logo from "../img/logo.png"
const navbar = () => {
  return (
    <div className="mx-auto bg-green-600 p-5">
      <nav className="flex-row md:justify-between">
        <ul className="md:flex md:flex-row" id="mobileMenu">
          <li className="pr-5 text-gray-300">
            <a>Servicios</a>
          </li>
          <li className="pr-5 text-gray-300">
            <a>Porfolio</a>
          </li>
          <li className="text-gray-300">
            <a>Contacto</a>
          </li>
        </ul>
      </nav>
    </div>
  )
}

export default navbar
