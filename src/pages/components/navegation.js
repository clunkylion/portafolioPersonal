import React from 'react';
import { useStaticQuery, graphql, Link } from 'gatsby';

export default (props)=>{
    const data = useStaticQuery(graphql`
        {
            allSkillsJson {
                edges {
                    node {
                        slug
                        title
                        descripcion
                    }
                }
            }
        }
    `);

    return(
        <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl font-bold text-center my-6 text-blue-700">¡Conoceme más!</h2>
            <nav className="flex justify-center mt-8">
                {
                    data.allSkillsJson.edges.map((element, index)=> {
                        const {node} = element;
                        return (
                            <article className="flex-1 bg-white shadow m-4 max-w-sm p-4">
                                <header>
                                    <p className="font-bold leading-loose text-blue-700">{node.title}</p>
                                    <div className="mt-5">
                                        <p className="font-light text-green-700">
                                            {node.descripcion}
                                        </p>
                                        <Link to={`/${node.slug}`} className="btn inline-block mt-4">¡Ver Más!</Link>
                                    </div>
                                </header>
                            </article>
                        )
                    })
                }
            </nav>
            
        </div>
    );
}