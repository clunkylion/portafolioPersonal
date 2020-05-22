import React from 'react';
import Navegation from './navegation.js';
export default ()=> (
    <div className="mt-8 bg-gray-300">
        <div className="container mx-auto p-10 max-w-4xl">
            <div className="flex justify-center items-center">
                <div className="flex-1">
                    <h1 className="font-bold text-blue-700 text-4xl text-center my-2">¡Sobre mí!</h1>
                    <p className="banner3">Soy Desarrollador de Software FullStack, tengo 21 años, estudio Informática en la "Universidad Tecnológica de Chile", me encanta la tecnologia, el futbol... y por supuesto la programación, mi principal objetivo es poder satisfacer la necesidades técnicas y comerciales de mis clientes.</p>
                    <p className="banner4">¡Hoy en día todo se puede programar, por eso si tienes una idea, estás en el lugar correcto!</p>
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