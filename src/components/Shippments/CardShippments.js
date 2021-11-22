import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import Button from "@material-tailwind/react/Button";
import InputIcon from "@material-tailwind/react/InputIcon";

export default function CardShippments() {
  return (
    <div className="relative py-16 bg-gray-100">
      <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-2xl -mt-64">
        <div className="px-6">
          <Card>
            <CardHeader color="pink" contentPosition="center">
              <h2 className="text-white text-4xl font-serif font-bold leading-normal mt-0 mb-2 ">
                Envios
              </h2>
            </CardHeader>
            <CardBody>
              {/*Boton y barra de busqueda*/}
              <div className="flex flex-col w-48 mt-8 mb-8 gap-4 ">
                <div className="">
                  <a href="/AgregaEnvio">
                    <Button
                      color="pink"
                      className="bg-white text-white ml-4"
                      ripple="dark"
                    >
                      Agregar envios
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
                        Colonia
                      </th>
                      <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center ">
                        Calle
                      </th>
                      <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                        Codigo postal
                      </th>
                      <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                        Status
                      </th>
                      <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                        Comentarios
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      {/*Colonia*/}
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                      {/*Calle*/}
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                      {/*Codigo P*/}
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                      {/*Status*/}
                      <th className="border-b border-gray-200 align-middle font-bold text-sm whitespace-nowrap px-0.5 py-4 text-center text-green-500">
                        <i className="fas fa-circle fa-sm text-green-500 mr-2 "></i>{" "}
                        Entregado
                      </th>
                      {/*Comentarios*/}
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                    </tr>
                    {/*Otro*/}
                    <tr>
                      {/*Colonia*/}
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                      {/*Calle*/}
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                      {/*Codigo P*/}
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                      {/*Status*/}
                      <th className="border-b border-gray-200 align-middle font-bold text-sm whitespace-nowrap px-2 py-4 text-center text-orange-500">
                        <i className="fas fa-circle fa-sm text-orange-500 mr-2 "></i>{" "}
                        En camino
                      </th>
                      {/*Comentarios*/}
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                    </tr>
                    {/*Otro*/}
                    <tr>
                      {/*Colonia*/}
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left"></th>
                      {/*Calle*/}
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                      {/*Codigo P*/}
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                      {/*Status*/}
                      <th className="border-b border-gray-200 align-middle font-bold text-sm whitespace-nowrap px-2 py-4 text-center text-green-500">
                        <i className="fas fa-circle fa-sm text-green-500 mr-2 "></i>{" "}
                        Entregado
                      </th>
                      {/*Comentarios*/}
                      <th className="border-b border-gray-200 align-middle font-bold text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                    </tr>
                    {/*Otro*/}
                    <tr>
                      {/*Colonia*/}
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                      {/*Calle*/}
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                      {/*Codigo P*/}
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                      {/*Status*/}
                      <th className="border-b border-gray-200 align-middle font-bold text-sm whitespace-nowrap px-2 py-4 text-center text-red-500">
                        <i className="fas fa-circle fa-sm text-red-500 mr-2 "></i>{" "}
                        Pendiente
                      </th>
                      {/*Comentarios*/}
                      <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center"></th>
                    </tr>
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
