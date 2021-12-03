import { useEffect, useState } from 'react';
import Image from "@material-tailwind/react/Image";
import H3 from "@material-tailwind/react/Heading3";
import Input from "@material-tailwind/react/Input";
import Button from "@material-tailwind/react/Button";
import React from "react";
import { useParams } from "react-router-dom";
import ProfilePicture from "../../assets/img/Logo.jpeg";
import Form from "react-validation/build/form";
import { listShippingById, editShippingById } from '../../services/shipping.service';

export default function EditShippment() {
    const { id } = useParams();

    const [response, setResponse] = useState();

    useEffect(() => {
        listShippingById(id)
            .then(({ data }) => {
                setResponse(data.data);
            })
            .catch(error => {
                return error;
            });
    }, []);

    const handleShip = async (e) => {
        e.preventDefault();
        console.log(response);
        const data = {
            status: response
        };
        await editShippingById(id, data).then(() => {

        }, (error) => {
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            console.log(resMessage);
        });
    };

    return (
        <section className="relative py-16 bg-gray-100">
            <div className="container max-w-7xl px-4 mx-auto">
                <div className="relative flex flex-col min-w-0 break-words bg-white w-full mb-6 shadow-xl rounded-2xl -mt-64">
                    <div className="px-6">
                        <div className="flex flex-wrap justify-center">
                            <div className="w-full lg:w-3/12 px-4 lg:order-2 flex justify-center">
                                <div className="relative">
                                    <div className="w-40 -mt-20">
                                        <Image
                                            src={ProfilePicture}
                                            alt="Profile picture"
                                            raised
                                            rounded
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center my-8">
                            <H3 color="gray">Editar envío</H3>
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200">
                            <div className="flex flex-wrap ">
                                <div className="w-full px-4 flex flex-col items-center">
                                    <div className="mb-10 py-2 border-t border-gray-200">
                                        <Form>

                                            <div className="w-96 ">
                                                <Input
                                                    type="text"
                                                    color="pink"
                                                    size="regular"
                                                    name="recoleccion"
                                                    disabled
                                                    value={response?.start_address}
                                                    outline={false}
                                                    placeholder="Recoleccion"
                                                />{" "}
                                                <br />
                                                <Input
                                                    type="text"
                                                    color="pink"
                                                    size="regular"
                                                    name="entrega"
                                                    disabled
                                                    value={response?.delivery_address}
                                                    outline={false}
                                                    placeholder="Entrega"
                                                />
                                                <br />
                                                <Input
                                                    type="text"
                                                    color="pink"
                                                    size="regular"
                                                    name="comentarios"
                                                    disabled
                                                    value={response?.comments}
                                                    outline={false}
                                                    placeholder="Comentarios"
                                                />
                                                <br />
                                                <Input
                                                    type="text"
                                                    color="pink"
                                                    size="regular"
                                                    name="status"
                                                    value={response?.status}
                                                    onChange={e => setResponse(e.target.value)}
                                                    outline={false}
                                                    placeholder="Estatus"
                                                />
                                                <br />
                                                <Input
                                                    type="text"
                                                    color="pink"
                                                    size="regular"
                                                    name="costo"
                                                    disabled
                                                    value={response?.total_amount}
                                                    outline={false}
                                                    placeholder="Costo"
                                                />
                                                <br />
                                                <br />
                                                <Button
                                                    color="pink"
                                                    buttonType="filled"
                                                    size="regular"
                                                    rounded={false}
                                                    block={false}
                                                    iconOnly={false}
                                                    onClick={handleShip}
                                                    ripple="light">
                                                    {" "}
                                                    Editar
                                                </Button>
                                            </div>
                                        </Form>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
