//componente del encabezado luego será incluidio en el index
//se debe importar React 
import React from 'react';
import ContactForm from './contactForm.js';
import ilustracion from '../img/Memoji_logo.png';
//usaremos componentes funcionales
export default () => (
    <header className="bg-gray-300">

        <div className="container mx-auto p-10 max-w-4xl">

            <div className="flex justify-center items-center">

                <div className="flex-1">
                <h1 className="font-bold text-blue-700 text-5xl"> ¡Hola! Soy José</h1>
                <p className="text-3xl text-green-600 font-light">Desarrollador de Software</p>
                </div>
                <img src={ilustracion} alt="Programador" style={{height: "300px"}} />
            </div>
            
            <div>
                <ContactForm />
            </div>
            
        </div>
    </header>
)
