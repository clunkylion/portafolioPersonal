//componente del encabezado luego será incluidio en el index
//se debe importar React 
import React from 'react';
import ContactForm from './contactForm.js';
import ilustracion from '../img/ilust1.png';
//usaremos componentes funcionales
export default () => (
    <header className="bg-blue-600">

        <div className="container mx-auto p-10 max-w-4xl">

            <div className="flex justify-center items-center">

                <div className="flex-1">
                <h1 className="font-bold text-5xl"> ¡Hola! Soy José Cortés</h1>
                <p className="text-2xl font-light">Desarrollador de Software</p>
                </div>
                <img src={ilustracion} alt="Programador" style={{height: "300px"}} />
            </div>
            
            <div>
                <ContactForm />
            </div>
            
        </div>
    </header>
)
