import React from 'react';
import Navegation from './navegation.js';
export default ()=> (
    <div className="mt-8 bg-gray-300">
        <div className="container mx-auto p-10 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-blue-700 text-4xl text-center my-2">¡Sobre mí!</h1>
                    <p className="text-3xl text-green-600 font-light my-3 text-justify">Soy Desarrollador de Software, tengo 21 años, estudio Informática en la "Universidad Tecnológica de Chile", me encanta la tecnologia, el futbol... y por supuesto la programación, mi principal objetivo es poder satisfacer la necesidades técnicas y comerciales de mis clientes.</p>
                    <p className="text-3xl text-blue-600 font-light">¡Hoy en día todo se puede programar, por eso si tienes una idea, estás en el lugar correcto!</p>
                </div>
            </div>
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <Navegation />
                </div>
            </div>
        </div>
    </div>
    
)