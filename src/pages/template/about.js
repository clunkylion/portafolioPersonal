import React from 'react';
import Navegation from '../components/navegation.js';
import { graphql, Link } from 'gatsby';
export default (props) =>{
    const pageData = props.data.skillsJson;
    return(
        <div>
            <header className="py-12 border-blue-700 border-solid border-t-8">
                <div className="max-w-4xl mx-auto">
                    <Link className="uppercase underline text-blue-800" to="/">Regresar al Inicio</Link>
                    <h2 className="capitalize text-6xl font-bold text-blue-700">
                        {pageData.title}
                    </h2>
                    <p className="text-2xl text-green-600">{pageData.descripcion}</p>
                </div>
            </header>
            <div className="max-w-4xl mx-auto overflow-x-scroll pb-3">
                <div className="flex mt-8"> 
                    {
                        pageData.items.map((item,index)=>(
                            <div className="shadow p-8 bg-white mr-4 rounded flex-shrink-0 contact_card">
                                <div className="flex flex-col">
                                    <h2 className="font-bold text-blue-700 text-xl">{item.name}</h2>
                                    {
                                        item.desc &&
                                        <p className="text-green-600 justify-center">{item.desc}</p>
                                    }
                                    {
                                        item.correo && 
                                        <h4 className="font-bold text-green-600">
                                            {item.correo}
                                        </h4>
                                    }
                                    {
                                        item.telefono && 
                                        <a href="https://wa.me/56974834319?text=Hola%20José,%20vi%20tú%20página%20en%20internet..." target="_blank" rel="noopener noreferrer" className="btn inline-block">¡Enviame un mensaje!</a>
                                    }
                                    {
                                        item.facebook && 
                                        <a href={item.facebook} className="btn inline-block" target="_blank" rel="noopener noreferrer">¡Sígueme en Facebook!</a>
                                    }
                                    {
                                        item.instagram && 
                                        <a href={item.instagram} target="_blank" className="btn inline-block" rel="noopener noreferrer">¡Sígueme en Instagram!</a>
                                    }
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>    
            <Navegation />
        </div>
    )
}

export const query = graphql`
    query($slug: String){
        skillsJson(slug:{ eq: $slug }){
            title
            descripcion
            slug
            items{
                name
                desc
                correo
                telefono
                facebook
                instagram
            }
        }
    }
`;