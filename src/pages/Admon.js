import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import Navbar_admon from "components/admon/Navbar_admon";
import Lobby from "components/admon/lobby";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Container from "components/admon/container";
import Heading1 from "@material-tailwind/react/Heading1";
import Image from "@material-tailwind/react/Image";
import img from "assets/img/motociclista.png";
import logo from "assets/img/Logo.jpeg";



import SimpleFooter from "components/SimpleFooter";

export default function Admon() {
  // const logout= ()=>{
  //   localStorage.removeItem('user');
  // }
    return (
        <>
          
            
            <main>
            
          <Lobby>
             <Navbar_admon/>

             <Container>
             <div className="container max-w-8xl px-16 mx-auto">
                <div className="relative flex flex-col min-w-0 bg-gray-25 w-full mb-6 shadow-xl rounded-2xl -mt-96">
                    <div className="px-32 ">
                        
                        {/**/}
                        <div className="flex flex-wrap ">
                        <div className="w-full lg:w-4/12 px-4 lg:order-2 flex justify-end">
                                <div className="relative">
                                   
                                {/*imagen*/}
                                    <div className="w-20 -mt-10 ">
                                        <Image
                                            src={img}
                                            raised
                                            rounded
                                        />
                                        <div className="flex flex-row  mt-2">
                                        <Heading1  color="white">Hola! Bienvenido</Heading1>
                                        <div className="relative h-96 w-96 ">
                                        <div className= "mb-16 ml-8 px-2 inset-y-0 right-0  h-96 w-96">
                                            <Image
                                                src={logo}
                                                />
                                            </div>
                                        </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                           </div>
                           </div>
                </div>
            </div>
             
  
                </Container>
          </Lobby>

        
               
            </main>
            {/* <DefaultFooter/> */}
        </>
    );
}
