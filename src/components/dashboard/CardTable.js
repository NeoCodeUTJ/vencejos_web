import Card from '@material-tailwind/react/Card';
import CardHeader from '@material-tailwind/react/CardHeader';
import CardBody from '@material-tailwind/react/CardBody';
import Image from '@material-tailwind/react/Image';
import Team1 from 'assets/img/team1.jpg';
import Team2 from 'assets/img/team2.jpg';
import Team3 from 'assets/img/team3.jpg';
import Team4 from 'assets/img/team4.jpg';
import Button from '@material-tailwind/react/Button';
import InputIcon from "@material-tailwind/react/InputIcon";

export default function CardTable() {
    return (
        <div className= "relative py-16 bg-gray-100">
    <div className="relative flex flex-col min-w-0 break-words w-full mb-6 shadow-xl rounded-2xl -mt-64">
          <div className="px-6">
        <Card>
            <CardHeader color="pink" contentPosition="center">
                <h2 className="text-white text-4xl font-serif font-bold leading-normal mt-0 mb-2 ">Mensajeros</h2>
            </CardHeader>
            <CardBody>
        <div className= "flex flex-col w-48 mt-8 mb-8 gap-4" >
            <Button
                color="pink"
                className="bg-white text-white ml-4"
                ripple="dark"
                >Crear usuario
            </Button>

            {/*Buscar*/}    
            <div className="w-48 ">
                <InputIcon
                    type="text"
                    color="lightBlue"
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
                                    Users
                                </th>
                                <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                                    Nombre
                                </th>
                                <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                                    Correo
                                </th>
                                <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                                    Telefono
                                </th>
                                <th className="px-2 text-pink-500 align-middle border-b border-solid border-gray-200 py-3 text-sm whitespace-nowrap font-medium text-center">
                                    Acciones
                                </th>
                            </tr>
                        </thead>
                        <tbody> 
                            <tr>
                                {/*Users*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                <div className=" w-20 h-20 rounded-full flex items-center justify-center border-2 border-white ">
                                
                                            <Image
                                                src={Team4}
                                                rounded 
                                            />
                                        </div>
                                </th>
                                {/*Nombre*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                Carlos Silva
                                </th>
                                {/*Correo*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                   carlosS@gmail.com
                                </th>
                                {/*Telefono*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                    3331828911   
                                </th>
                                {/*Acciones*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-center">
                                {/*Editar*/}
                                <div className= "flex flex-row " >
                                <Button
                                        color="pink"
                                        className="bg-white text-white ml-4"
                                        ripple="dark"
                                    >Editar
                                    </Button>
                                    {/*Borrar*/}
                                    <Button
                                        color="purple"
                                        className="bg-white text-white ml-4"
                                        ripple="dark"
                                    >Borrar
                                    </Button>
                                    </div>
                                </th>
                            </tr>
                            {/*Otro*/}
                            <tr>
                                {/*Users*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-white">
                                        <Image
                                            src={Team3}
                                            rounded
                                            />
                                    </div>
                                
                                </th>
                                  {/*Nombre*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                Mario Arredondo
                                </th>
                                  {/*Correo*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                mario@gmail.com 
                                </th>
                                  {/*Telefono*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                3331398138
                                </th>
                                  {/*Acciones*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <div className= "flex flex-row" >
                                <Button
                                        color="pink"
                                        className="bg-white text-white ml-4"
                                        ripple="dark"
                                    >Editar
                                    </Button>
                                    {/*Borrar*/}
                                    <Button
                                        color="purple"
                                        className="bg-white text-white ml-4"
                                        ripple="dark"
                                    >Borrar
                                    </Button>
                                    </div>
                                </th>
                            </tr>
                              {/*Otro*/}
                            <tr>
                                  {/*Users*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-white">
                                        <Image
                                                src={Team2}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                </th>
                                  {/*Nombre*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                Carlos Borrayo
                                </th>
                                  {/*Correo*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    carlosb@gmail.com
                                </th>
                                  {/*Telefono*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    3322445678              
                                </th>
                                {/*Acciones*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <div className= "flex flex-row" >
                                <Button
                                        color="pink"
                                        className="bg-white text-white ml-4"
                                        ripple="dark"
                                    >Editar
                                    </Button>
                                    {/*Borrar*/}
                                    <Button
                                        color="purple"
                                        className="bg-white text-white ml-4"
                                        ripple="dark"
                                    >Borrar
                                    </Button>
                                    </div>
                                 </th>
                            </tr>
                            {/*Otro*/}
                            <tr>
                                {/*Users*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <div className="w-20 h-20 rounded-full flex items-center justify-center border-2 border-white">
                                        <Image
                                                src={Team1}
                                                rounded
                                                alt="..."
                                            />
                                        </div>
                                </th>
                                {/*Nombre*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                    Ricardo Zuñiga
                                </th>
                                {/*Correo*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                ricadan@gmail.com
                                </th>
                                {/*Telefono*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                3331828910  
                                </th>
                                {/*Acciones*/}
                                <th className="border-b border-gray-200 align-middle font-light text-sm whitespace-nowrap px-2 py-4 text-left">
                                <div className= "flex flex-row" >
                                <Button
                                        color="pink"
                                        className="bg-white text-white ml-4"
                                        ripple="dark"
                                    >Editar
                                    </Button>
                                    {/*Borrar*/}
                                    <Button
                                        color="purple"
                                        className="bg-white text-white ml-4"
                                        ripple="dark"
                                    >Borrar
                                    </Button>
                                    </div>
                                </th>
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
