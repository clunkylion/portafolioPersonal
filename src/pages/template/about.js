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
                    <h2 className="capitalize text-6xl font-bold ">
                        {pageData.title}
                    </h2>
                    <p className="text-xl">{pageData.descripcion}</p>
                </div>
            </header>
            <ul>
                {
                    pageData.items.map((item,index)=>(
                        <li key={index} className="bg-gray-300 shadow mt-4 flex">
                            <p className="vertical-text">{pageData.slug}</p>
                            <div className="flex flex-col p-8">
                                
                                    <h3>{item.name}</h3>
                                    {
                                        item.correo && 
                                        <span className="inline-block p-2 radius bg-green-200 text-blue-800 mb-4 mt-2" >Correo Electronico: {item.correo}</span>
                                    }
                                    {
                                        item.telefono && 
                                        <a className="btn inline-block" target="_blank" rel="noreferrer" href="https://wa.me/56974834319/">Enviame un Mensaje</a>
                                    }
                                    {
                                        item.instagram && 
                                        <a className="btn inline-block" target="_blank"  rel="noreferrer" href={item.instagram}>Sígueme en Instagram</a>
                                    }
                                    {
                                        item.facebook && 
                                        <a className="btn inline-block" target="_blank"  rel="noreferrer" href={item.facebook}>Sígueme en Facebook</a>
                                    }
                            </div>
                        </li>
                    ))
                }
            </ul>
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
                correo
                telefono
                facebook
                instagram
            }
        }
    }
`;