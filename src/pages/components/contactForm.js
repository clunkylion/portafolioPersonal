import React from'react';
//{Fragment, useState}
export default () =>{
    return (
        <form className="mt-16 text-center" method="POST" id="contactForm" data-netlify="true">
            <label className="block text-lg font-bold text-blue-700 mb-2" htmlFor="contact-content">Cuentame de esa idea que quieres hacer realidad: 
            </label>
            <p id="status"></p>
            <div className="flex shadow rounded bg-white border p-2">
                <textarea 
                placeholder="Cuentame sobre ti y tu idea..."
                id="contact-content"
                name="contact-content"
                className="flex-1 py-2 px-3 focus:outline-none focus:shadow-outline"></textarea>
                <button className="btn ml-4" id="formBtn">Enviar</button>
            </div>
        </form>
    )
};