import Card from "@material-tailwind/react/Card";
import CardImage from "@material-tailwind/react/CardImage";
import CardBody from "@material-tailwind/react/CardBody";
import Icon from "@material-tailwind/react/Icon";
import H4 from "@material-tailwind/react/Heading4";
import H6 from "@material-tailwind/react/Heading6";
import LeadText from "@material-tailwind/react/LeadText";
import Paragraph from "@material-tailwind/react/Paragraph";
import StatusCard from "components/landing/StatusCard";
import Teamwork from "assets/img/Teamwork.png";

export default function WorkingSection() {
  return (
    <section className="pb-20 bg-gray-100 -mt-32">
      <div className="container max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap relative z-50">
          <StatusCard color="pink" icon="check" title="Cuidado de tus envios">
            Transporte adecuado para tus productos, porque tu tranquilidad es
            nuestra prioridad.
          </StatusCard>
          <StatusCard color="pink" icon="check" title="Rutas Optimizadas">
            El camino más rápido y eficiente para hacer tus entregas multiples;
            siempre cuidando su integridad.
          </StatusCard>
          <StatusCard color="pink" icon="check" title="Equipo Adecuado">
            Conocemos las necesidades de transporte de cada situación, y sabemos
            como llevarlas a cabo.
          </StatusCard>
        </div>

        <div className="flex flex-wrap items-center mt-32">
          <div className="w-full md:w-5/12 px-4 mx-auto">
            <div className="text-blue-gray-800 p-3 text-center inline-flex items-center justify-center w-16 h-16 mb-6 shadow-lg rounded-full bg-white">
              <Icon name="people" size="3xl" />
            </div>
            <H4 color="gray">¿Quienes Somos?</H4>
            <LeadText color="blueGray">
              Desde que iniciamos nuestras operaciones, nos hemos comprometido
              con dar el mejor servicio posible, siendo muy cuidadosos con la
              eficiencia y el transporte de nuestros envíos.
            </LeadText>
            <LeadText color="blueGray">
              La misión de Vencejos Bicimensajeria es sencilla: proporcionar
              servicios de alta calidad en tiempo y forma. Nuestro equipo se
              adapta a cubrir las necesidades específicas para garantizar la
              excelencia. Esperamos poder cubrir sus necesidades. Para obtener
              más información, contáctenos hoy mismo.
            </LeadText>
          </div>

          <div className="w-full md:w-4/12 px-4 mx-auto flex justify-center mt-24 lg:mt-0">
            <Card>
              <CardImage alt="Card Image" src={Teamwork} />
              <CardBody>
                <H6 color="gray">Nada nos detiene</H6>
                <Paragraph color="blueGray">
                  Siempre priorizamos nuestra seguridad y la de tu paquete.
                </Paragraph>
              </CardBody>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
}
