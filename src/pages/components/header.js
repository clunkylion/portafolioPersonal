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
                <h1 className="banner1"> ¡Hola! Soy José</h1>
                <p className="banner2">Desarrollador de Software</p>
                </div>
                <img src={ilustracion} alt="Programador" className="emoji"/>
            </div>
            
            <div>
                <ContactForm />
            </div>
            
        </div>
    </header>
)
