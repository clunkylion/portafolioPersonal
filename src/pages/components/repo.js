import React from 'react';

export default (props)=>{
    var nombre = props.repo.name;
    return (
        <li className="flex items-center">
            <div className="w-9/12 overflow-x-hidden my-4">
                <h4 className="text-blue-700 font-bold">
                    {nombre}
                </h4>
                <p className="text-sm overflow-y-hidden text-green-600" style={{height: "1.5em"}}>
                    {props.repo.description}
                </p>
            </div>
            <div className="flex-1 text-right">
                <a href={props.repo.html_url} className="text-blue-700" target="_blank" rel="noopener noreferrer">
                Ver
                </a>
            </div>
            
        </li>
    )
}