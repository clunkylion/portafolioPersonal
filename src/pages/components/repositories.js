import React from 'react';
import repos from '../data/repos.js';
import Repo from './repo.js';

export default () => (
    <div className="max-w-4xl mx-auto">
        <header className="text-center">
            <h2 className="text-3xl font-bold">Mi Trabajo en GitHub!</h2>
            <p>Colaboración y contribución de Código</p>
        </header>
        <ul className="repos-list">
            {
                repos.map((repo)=>{
                    return <Repo repo={repo} key={repo.id} />
                })
            }
        </ul>
    </div>
)