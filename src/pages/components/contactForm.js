import React from 'react';
export default () =>(
    <form className="mt-16 text-center">
        <label className="block text-lg font-bold text-blue-700 mb-2" htmlFor="contact-content">Cuentame de esa idea que quieres hacer realidad: 
        </label>
        <div className="flex shadow rounded bg-white border p-2">
            <textarea 
            id="contact-content"
            name="contact-content"
            className="flex-1 py-2 px-3 focus:outline-none focus:shadow-outline"></textarea>
            <button className="btn ml-4">Enviar</button>
        </div>
        
    </form>
);