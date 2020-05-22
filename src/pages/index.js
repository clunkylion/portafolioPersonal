import React from "react";
import Header from '../pages/components/header.js';
import Repos from '../pages/components/repositories.js';
import CodigoFacilito from '../pages/components/codigoFacilito.js';
import AboutMe from "../pages/components/aboutMe.js";
import { Helmet } from "react-helmet"
import logo from '../pages/img/logo2.ico'
export default () => {

    return (
        <div>
            <Helmet>
                <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
                <title>José Cortés-Desarrollo a medida</title>
                <link rel="icon" href={logo}></link>
            </Helmet>
            <Header />
            <Repos />
            <CodigoFacilito />
            <AboutMe />
        </div>
    )    
}    
