import React, {useEffect, useState} from 'react';
import Repo from './repo.js';


//componente DidMount
export default () => {
    //useState nos permite crear una variable dinamica y una funciona a traves de la cual podemos actulizar esa variable
    const [repos, setRepos] = useState([]);
    const [reposCount, setReposCount] = useState([]);


    useEffect(() => {
        const data = sessionStorage.getItem("repos");
        let myRepos
        if (data) {
            myRepos = JSON.parse(data);
            setReposCount(myRepos.length);
            return setRepos(myRepos);
        }

        async function fetchRepos(){
            const response = await fetch("https://api.github.com/users/clunkylion/repos");
            myRepos = await response.json();
            setReposCount(myRepos.length);
            sessionStorage.setItem("repos", JSON.stringify(myRepos));
            setRepos(myRepos);
        }
        fetchRepos();
    },[]);
    
    return (
        <div className="max-w-4xl mx-auto mt-12">
            <header className="text-center">
                <h2 className="text-3xl font-bold text-blue-700 truncate">Mi Trabajo en GitHub!</h2>
                <p className="text-green-600">Colaboración y contribución de Código</p>
            </header>
            <ul className="repos-list my-3">
                {
                    repos.map((repo)=>{
                        return <Repo repo={repo} key={repo.id} />
                    })
                }
            </ul>
            <div className="mt-8 text-center">
                <a href="https://github.com/clunkylion/" className="btn" target="_blank" rel="noopener noreferrer"> 
                    Ver más en GitHub ({reposCount})
                </a>
            </div>
        </div>
    );
};