import { useEffect, useState } from 'react';
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import InputIcon from "@material-tailwind/react/InputIcon";
import { listShippings } from '../../services/shipping.service';
import { useHistory, Link } from 'react-router-dom';
import iconEdit from '../../../src/assets/icons/edit.svg';
import './style.css';

export default function CardShippments() {

  const history = useHistory();
  const [response, setResponse] = useState(null);

  useEffect(() => {
    listShippings()
      .then(({ data }) => {
        setResponse(data.data.rows);
        console.log(data.data.rows);
      })
      .catch(error => {
        console.log(error);
        return error;
      });
  }, []);

  const handleClick = () => {
    history.push("/AgregaEnvio");
  }

  return (
    <div className="relative py-16 bg-gray-100">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-2xl -mt-64">
        <div className="px-6">
          <Card>
            <CardHeader color="pink" contentPosition="center">
              <h2 className="text-white text-4xl font-serif font-bold leading-normal mt-0 mb-2 ">
                Envíos
              </h2>
            </CardHeader>
            <CardBody>
              {/*Boton y barra de busqueda*/}
              <div className="flex flex-col w-48 mt-8 mb-8 gap-4 ">
                <div className="">
                  <a onClick={handleClick}>
                    <Button
                      color="pink"
                      className="bg-white text-white ml-4"
                      ripple="dark"
                    >
                      Agregar envíos
                    </Button>
                  </a>
                </div>


                {/*Buscar*/}
                <div className=" ">
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
                      <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center ">
                        Dirección de recolección
                      </th>
                      <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                        Dirección de entrega
                      </th>
                      <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                        Status
                      </th>
                      <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                        Total
                      </th>
                      <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                        Comentarios
                      </th>
                      <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                        Acciones
                      </th>
                    </tr>
                  </thead>
                  <tbody>

                    {response?.map((element, index) => {
                      return (
                        <tr key={index}>
                          {/*Colonia*/}
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                            #{element.id}
                          </th>
                          {/*Calle*/}
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                            {element.start_address}
                          </th>
                          {/*Codigo P*/}
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                            {element.delivery_address}
                          </th>
                          {/*Status*/}
                          <th className="border-b border-gray-200 align-middle font-bold text-sm whitespace-nowrap px-0.5 py-4 text-center">
                            {element.status}
                          </th>
                          {/*Comentarios*/}
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                            {element.total_amount}
                          </th>
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                            {element.comments}
                          </th>
                          <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4">
                            <Link to={{ pathname: `/EditarEnvio/${element.id}` }} className=" whitespace-nowrap theme-btn-primary mt-8 lg:mt-4 w-full lg:max-w-min m-3 text-center text-sm py-3 self-center lg:px-8 lg:py-2 lg:self-start">
                              <img className="icon_edit m-auto" src={iconEdit} />
                            </Link>

                          </th>
                        </tr>
                      )
                    })}



                    {/*Otro*/}

                    {/* <i className="fas fa-circle fa-sm text-green-500 mr-2 "></i>{" "}
                        Entregado */}

                    {/* <i className="fas fa-circle fa-sm text-orange-500 mr-2 "></i>{" "}
                        En camino */}

                    {/* <i className="fas fa-circle fa-sm text-green-500 mr-2 "></i>{" "}
                        Entregado
                    
                        <i className="fas fa-circle fa-sm text-red-500 mr-2 "></i>{" "}
                        Pendiente */}

                  </tbody>
                </table>
              </div>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
}
