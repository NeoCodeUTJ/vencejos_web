import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import Navbar_admon from "components/admon/Navbar_admon";
import Lobby from "components/admon/lobby";
import Card from "@material-tailwind/react/Card";
import CardBody from "@material-tailwind/react/CardBody";
import Container from "components/admon/container";
import Heading1 from "@material-tailwind/react/Heading1";
import Image from "@material-tailwind/react/Image";






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
          
            <Card>
             <CardBody>
                <Heading1 color="black">Hola! Bienvenido</Heading1>
                
                
               
            </CardBody>
            </Card>
  
                </Container>
          </Lobby>

        
               
            </main>
            {/* <DefaultFooter/> */}
        </>
    );
}
