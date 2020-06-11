import React, {Fragment} from "react"
import { useForm } from "react-hook-form"
import axios from "axios";
//{Fragment, useState}
export default () => {
    var hoy = new Date();
    var actual = hoy.getDay() + "-" + (hoy.getMonth()+1) +"-"+ hoy.getFullYear();
    const { register, handleSubmit, errors } = useForm()
    //on submint envía en formulario.

    function sentData(){
        console.log('enviando datos a servidor');
        setTimeout(()=>{
            axios.get('https://josecortes-api.herokuapp.com/home')
            .then((response)=>{
                console.log(response);
            })
            .catch((error)=> {
                // handle error
                console.log(error);
            })
        }, 2000)
        axios.post('https://josecortes-api.herokuapp.com/add', {
        nombreCliente: "haelloWorld",
        mailCliente: "tester@tester.com",
        fecha: actual,
        idea: "crear app de programacions"
        })
        .then(response => {
            console.log(response);
            
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
                            value: 25, 
                            message: 'No más de 25 carácteres!'
                            },
                        minLength: {
                            value: 5, 
                            message: 'Mínimo 5 carácteres'
                            }
                    })}/>
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
                            message: 'El campo es requerido'
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
                    ></textarea>
                </div>
                <button className="btnFormContact" id="formBtn">
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
