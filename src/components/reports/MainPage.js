import Image from "@material-tailwind/react/Image";
import H3 from "@material-tailwind/react/Heading3";
import ProfilePicture from "assets/img/Logo.jpeg";
import {listShippingsDelivered, listShippingsOnTheWay, listShippingsInProgress, listAllShippings} from "../../services/reports.services";
import React, {useState} from "react";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

const AddShippmentsForm = () => {

    const [response, setResponse] = useState(null);
    const [options, setOptions] = useState(null);
    const [total, setTotal] = useState(null);
    listAllShippings().then((response) => {
        setTotal(response.data.data);
        console.log(total, "total de envios")
    }, (error) => {
        const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        console.log(resMessage);
    })

    const handleshipDilivered = async (e) => {
        listShippingsDelivered().then((response) => {
            console.log(response.data.data, "DATA DE REPORTES");
            setResponse(response.data.data);
            setOptions({
                title: {
                    text: 'Grafica'
                },
                series: [
                    {
                        data: [response.data.data]
                    }
                ],
                total: [
                    {
                        data: [1, 2, 3]
                    }
                ]
            })

        }, (error) => {
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            console.log(resMessage);
        });
    };

    const handleshipOnTheWay = async (e) => {
        listShippingsOnTheWay().then((response) => {
            console.log(response.data.data, "DATA DE REPORTES");
            setResponse(response.data.data);
            setOptions({
                title: {
                    text: 'Grafica'
                },
                series: [
                    {
                        data: [response.data.data]
                    }
                ]
            })

        }, (error) => {
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            console.log(resMessage);
        });
    };
    const handleshipInProgress = async (e) => {
        listShippingsInProgress().then((response) => {
            console.log(response.data.data, "DATA DE REPORTES");
            setResponse(response.data.data);
            setOptions({
                title: {
                    text: 'Grafica'
                },
                series: [
                    {
                        data: [response.data.data]
                    }
                ]
            })

        }, (error) => {
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            console.log(resMessage);
        });
    };
    const handleshipAll = async (e) => {
        listAllShippings().then((response) => {
            console.log(response.data.data, "DATA DE REPORTES");
            setResponse(response.data.data);
            setOptions({
                title: {
                    text: 'Grafica'
                },
                series: [
                    {
                        data: [response.data.data]
                    }
                ]
            })

        }, (error) => {
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
            console.log(resMessage);
        });
    };


    return (<section className="relative py-16 bg-gray-100">
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
            <button onClick={handleshipInProgress}
                className="bg-blue hover:bg-blue-light text-black font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
                Envios en progreso
            </button>
            <button onClick={handleshipOnTheWay}
                className="bg-blue hover:bg-blue-light text-black font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
                Envios en camino
            </button>
            <button onClick={handleshipDilivered}
                className="bg-blue hover:bg-blue-light text-black font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
                Envios Entregados
            </button>
            <button onClick={handleshipAll}
                className="bg-blue hover:bg-blue-light text-black font-bold py-2 px-4 border-b-4 border-blue-dark hover:border-blue rounded">
                Todos los envios
            </button>

        </div>
        <div className="text-center my-8 text-9xl">
            <div id="value"> {
                response ? response : '....'
            }</div>
        </div>
        <HighchartsReact highcharts={Highcharts}
            options={options}/>
    </section>);
};

export default AddShippmentsForm;
