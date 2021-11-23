import { useEffect, useState } from 'react';
import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Button from '@material-tailwind/react/Button';
import InputIcon from "@material-tailwind/react/InputIcon";
import { getUsers } from 'services/users.service';
import { useHistory } from 'react-router-dom';

const ListUsers = () => {

    const history = useHistory();
    const [response, setResponse] = useState(null);

    useEffect(() => {
        getUsers()
            .then(({ data }) => {
                setResponse(data.data);
            })
            .catch(error => {
                console.log(error);
                return error;
            });
    }, []);

    const handleClick = () => {
        history.push("/addusers");
    }

    return (
        <div className="relative py-16 bg-gray-100">
            <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-2xl -mt-64">
                <div className="px-6">
                    <Card>
                        <CardHeader color="pink" contentPosition="center">
                            <h2 className="text-white text-4xl font-serif font-bold leading-normal mt-0 mb-2 ">Usuarios</h2>
                        </CardHeader>
                        <CardBody>
                            {/*Boton y barra de busqueda*/}
                            <div className="flex flex-col w-48 mt-8 mb-8 gap-4 " >
                                <div className="">
                                    <a href="/addusers" rel="noreferrer">
                                        <Button
                                            color="pink"
                                            className="bg-white text-white ml-4"
                                            ripple="dark"
                                            onClick={handleClick}
                                        >Agregar usuarios
                                        </Button>
                                    </a>
                                </div>
                                {/*Buscar*/}
                                <div className="order-last">
                                    <InputIcon
                                        type="text"
                                        color="pink"
                                        size="regular"
                                        outline={true}
                                        placeholder="Buscar"
                                        iconFamily="material-icons"
                                        iconName="search"

                                    />

                                </div>

                            </div>

                            <div className="overflow-x-auto">
                                <table className="items-center w-full bg-transparent border-collapse">
                                    <thead>
                                        <tr>
                                            <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                                                ID
                                            </th>
                                            <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                                                Nombre
                                            </th>
                                            <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center ">
                                                Celular
                                            </th>
                                            <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                                                Rol
                                            </th>
                                            <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                                                Correo electrónico
                                            </th>
                                        </tr>
                                    </thead>
                                    <tbody>

                                        {response?.map((element, index) => {
                                            console.log(element.email)
                                            return (
                                                <tr key={index}>
                                                    {/*ID*/}
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                                        #{element.id}
                                                    </th>
                                                    {/*Nombre*/}
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                                        {element.name} {element.first_surname} {element.second_surname}
                                                    </th>
                                                    {/*Celular*/}
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                                        {element.phone}
                                                    </th>
                                                    {/*Rol*/}
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                                        {element.role}
                                                    </th>
                                                    {/*Correo*/}
                                                    <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                                        {element.email}
                                                    </th>
                                                </tr>
                                            )
                                        })}

                                    </tbody>
                                </table>
                            </div>
                        </CardBody>
                    </Card>
                </div>
            </div>
        </div>
    )
}

export default ListUsers;