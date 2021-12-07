import React, { useRef, useState } from "react"
import { ProfileType, string } from "../../types"
import "./contact-form.css"

const ContactForm = ({ formspreeEndpoint, budget }) => {
  const [isInquiry, setIsInquiry] = useState(false)
  const [selectedBudget, setSelectedBudget] = useState(budget.default)
  const inquiryDetails = useRef(null)

  return (
    <>
      <h5
        className="font-header font-semibold text-front text-sm uppercase mt-12 mb-3"
        id="contact"
      >
        Contacto
      </h5>

      <form action={formspreeEndpoint} className="flex flex-wrap" method="post">
        <div className="flex flex-wrap w-full">
          <div className="w-full lg:w-1/3 py-px lg:px-px">
            <input
              aria-label="Name"
              autoComplete="nombre"
              className="form-input"
              name="name"
              placeholder="Nombre"
              required
              type="text"
            />
          </div>
          <div className="w-full lg:w-2/3 py-px lg:px-px">
            <input
              aria-label="E-mail"
              autoComplete="email"
              className="form-input"
              name="email"
              placeholder="Email"
              required
              type="email"
            />
          </div>
        </div>

        <div className="w-full text-right py-px lg:p-px">
          <textarea
            aria-label="Mensaje"
            className="block form-input bg-back-light resize-none border-b-0 pb-4"
            name="message"
            placeholder="Mensaje"
            required
            rows="6"
          ></textarea>
          <div className="bg-back-light">
            <input
              className="font-header inline-block font-semibold px-6 py-2 leading-tight cursor-pointer outline-none bg-front text-back-light uppercase mr-4 my-4 transition-opacity duration-150 hover:opacity-75"
              type="submit"
              value="Enviar"
              disabled
            />
          </div>
        </div>
      </form>
    </>
  )
}

ContactForm.propTypes = {
  budget: ProfileType.budget,
  formspreeEndpoint: string.isRequired,
}

export default ContactForm
