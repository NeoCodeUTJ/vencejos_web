import Image from "@material-tailwind/react/Image";
import H3 from "@material-tailwind/react/Heading3";
import Input from "@material-tailwind/react/Input";
import ProfilePicture from "assets/img/Logo.jpeg";
import Button from "@material-tailwind/react/Button";
import {addShip} from "../../services/shipping.service";
import React, {useState} from "react";
import Form from "react-validation/build/form";
import {useHistory} from 'react-router-dom';

const AddShippmentsForm = () => {

  

    // const handleShip = async (e) => {
    //     addShip(data).then(() => {
    //         window.location.reload(true);
    //         history.push("/envios");
    //     }, (error) => {
    //         const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
    //         console.log(resMessage);
    //     });
    // };

    return (
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <div className="w-40 -mt-20">
                                        <Image src={ProfilePicture}
                                            alt="Profile picture"
                                            raised
                                            rounded/>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center my-8">
                            <H3 color="gray">REPORTES</H3>
                        </div>


                    </div>
                </div>
            </div>
            <div className="text-center my-8">
                <button className="bg-blue hover:bg-blue-light text-black font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
                    Envios en progreso
                </button>
                <button className="bg-blue hover:bg-blue-light text-black font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
                    Envios en camino
                </button>
                <button className="bg-blue hover:bg-blue-light text-black font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
                    Envios Entregados
                </button>
                <button className="bg-blue hover:bg-blue-light text-black font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
                    Todos los envios
                </button>

            </div>
            <div className="text-center my-8 text-9xl">
            <div id="value">999</div>
            </div>
        </section>


    );
};

export default AddShippmentsForm;
