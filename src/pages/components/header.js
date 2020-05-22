//componente del encabezado luego será incluidio en el index
//se debe importar React 
import React,{useEffect} from 'react';
import ContactForm from './contactForm.js';
import ilustracion from '../img/Memoji_logo.png';
import AOS from 'aos';
import 'aos/dist/aos.css';
//usaremos componentes funcionales
export default () => {
    useEffect(() => {
        AOS.init({duration: 2000});
    }, [])
    return (
        <header className="bg-gray-300">
            <div className="container mx-auto p-10 max-w-4xl">

                <div className="flex justify-center items-center">

                    <div className="flex-1">
                    <h1 className="banner1" data-aos="fade-down" data-aos-offset="200"
                        data-aos-delay="50" data-aos-duration="1000" data-aos-easing="ease-in-out"> ¡Hola! Soy José</h1>
                    <p className="banner2" data-aos="fade-down" data-aos-offset="200"
                        data-aos-delay="50" data-aos-duration="1000">Desarrollador de Software</p>
                    </div>
                    <img src={ilustracion} alt="Programador" className="emoji" data-aos="slide-left"/>
                </div>
                
                <div>
                    <ContactForm/>
                </div>
                
            </div>
        </header>
    )
}
