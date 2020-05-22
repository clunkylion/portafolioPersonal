import React from 'react'
import { useStaticQuery, graphql } from 'gatsby';

export default () => {
    const data = useStaticQuery(graphql`{
        codigoFacilitoJson {
            id
            data {
                certificates {
                    title
                    score
                    code
                }
                finished_courses {
                    title
                    url
                }
            }
        }
    }
    `);
    const titles = data.codigoFacilitoJson.data.finished_courses;
    //console.log(data);
    return (
        <section>
            <div className="my-16">
            <h2 className="codigoF">Algunos de mis Cursos...</h2>
                <div className="max-w-4xl mx-auto overflow-x-scroll pb-3 px-3">
                    <div className="flex mt-8"> 
                        {
                            titles.map(certificate =>(
                                    <div className="shadow p-8 bg-white mr-4 rounded flex-shrink-0" style={{width: "250px"}}> 
                                        <h4 className="font-bold text-blue-700">
                                            <a href={certificate.url} target="_blank" rel="noreferrer">{certificate.title}</a>
                                        </h4>
                                    </div>
                            ))
                        }
                    </div>
                </div> 
            </div>
        </section>
    );
}
