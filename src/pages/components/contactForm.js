import React, {Fragment, useState} from "react"
import { useForm } from "react-hook-form"
import axios from "axios";
import swal from 'sweetalert'
//{Fragment, useState}
export default () => {
    var hoy = new Date();
    var actual = hoy.getDay() + "-" + (hoy.getMonth()+1) +"-"+ hoy.getFullYear();
    const { register, handleSubmit, errors } = useForm()
    //on submint envía en formulario.
    const [name, setName] = useState('');
    const [mail, setMail] = useState('');
    const [contactContent, setContactContent] = useState('');
    async function sentData(){
        console.log('Enviando datos a servidor');
        await axios.post('https://portafolio-mongo-api.herokuapp.com/contacto', {
        nombre: name,
        mail: mail,
        fecha: actual,
        idea: contactContent
        })
        .then(response => {
            console.log(response);
            if (response.status === 200) {
                swal({
                    title: "Gracias por enviar su solicitud",
                    text: "Nos pondremos en contacto.",
                    icon: "success",
                    timer: 1300,
                    button : false,
                    });
                console.log('Datos enviados correctamente');
            }
        })
        .catch(err =>{
            console.log(err);
            
        })
    }
    const onSubmit = (data, e) =>{
        console.log(data)
        sentData();
        e.target.reset();
    }

    return (
        <Fragment>
            <form
            className="mt-12 text-center"
            method="post"
            id="contactForm"
            name="contactForm"
            action=""
            onSubmit={handleSubmit(onSubmit)}
            >
                <label
                    className="block text-lg font-bold text-blue-700 mb-2"
                    htmlFor="contact-content">
                    Cuentame de esa idea que quieres hacer realidad:
                </label>
                <div className="flex shadow rounded bg-white border">
                    <input placeholder="Nombre" name="name" type="text"
                    className="flex-1 py-2 px-3 focus:outline-none focus:shadow-outline"
                    ref={register({
                        required: {
                            value: true, 
                            message: 'El nombre es requerido'
                            }, 
                        maxLength: {
                            value: 20, 
                            message: 'No más de 20 carácteres!'
                            },
                        minLength: {
                            value: 3, 
                            message: 'Mínimo 3 carácteres'
                            },
                        pattern:{
                            value: /^[A-Za-z]+$/i,
                            message: "Ingresa carácteres validos"
                        }
                    })}
                    onChange={(e)=> setName(e.target.value)}
                    />
                </div>
                <div className="flex shadow rounded bg-white border">
                    <input placeholder="Mail" name="mail" type="mail" 
                    className="flex-1 py-2 px-3 focus:outline-none focus:shadow-outline"
                    ref={register({
                        required: {
                            value: true, 
                            message: 'El mail es requerido'
                            }, 
                        maxLength: {
                            value: 50, 
                            message: 'No más de 50 carácteres!'
                            },
                        minLength: {
                            value: 5, 
                            message: 'Mínimo 5 carácteres'
                            }
                    })}
                    onChange={(e)=> setMail(e.target.value)}
                    />
                </div>
                <div className="flex shadow rounded bg-white border p-2">
                    <textarea
                    placeholder="Cuentame sobre ti y tu idea"
                    id="contactContent"
                    name="contactContent"
                    className="flex-1 py-2 px-3 focus:outline-none focus:shadow-outline"
                    ref={register({
                        required: {
                            value: true, 
                            message: 'El campo idea es requerido'
                            }, 
                        maxLength: {
                            value: 200, 
                            message: 'No más de 200 carácteres!'
                            },
                        minLength: {
                            value: 20, 
                            message: 'Mínimo 20 carácteres'
                            }
                    })}
                    onChange={(e)=> setContactContent(e.target.value)}
                    ></textarea>
                </div>
                <button className="btnFormContact" id="formBtn" type="submit">
                    Enviar
                </button>
            </form>
            <p className="formErrors">
                {errors ?.name?.message}
            </p>
            <p className="formErrors">
                {errors ?.mail?.message}
            </p>
            <p className="formErrors">
                {errors ?.contactContent?.message}
            </p>
        </Fragment>
        
    )
}
