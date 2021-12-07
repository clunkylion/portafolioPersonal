import { Link } from "gatsby"
import React from "react"
import SEO from "../components/seo/seo"
import "../styles/style.css"

const NotFoundPage = () => (
  <>
    <SEO title="404: Not found" />
    <div className="flex min-h-screen items-center justify-center text-gray-900">
      <div className="py-12">
        <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight">
          Página no encontrada
        </h2>
        <p>La página solicitada no existe</p>
        <Link to="/" className="inline-block mt-8 underline">
          &laquo; Volver al inicio
        </Link>
      </div>
    </div>
  </>
)

export default NotFoundPage
