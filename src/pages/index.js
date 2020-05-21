import React from "react";
import Header from '../pages/components/header.js';
import Repos from '../pages/components/repositories.js';
import CodigoFacilito from '../pages/components/codigoFacilito.js';
import AboutMe from "../pages/components/aboutMe.js";

export default () => <div>
    <meta name="viewport" content="width=device-width, initial-scale=1"></meta>
    <Header />
    <Repos />
    <CodigoFacilito />
    <AboutMe />
</div>
