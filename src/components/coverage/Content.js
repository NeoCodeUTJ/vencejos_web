import Image from "@material-tailwind/react/Image";
import H3 from "@material-tailwind/react/Heading3";
import Label from "@material-tailwind/react/Label";
import LeadText from "@material-tailwind/react/LeadText";
import ProfilePicture from "assets/img/Logo.jpeg";

export default function Content() {
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
              <H3 color="gray">Nuestra cobertura</H3>
            </div>

            <div className="mb-10 py-2 border-t border-gray-200 text-center">
              <div className="flex flex-wrap justify-center">
                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                  <LeadText color="blueGray">
                    Nuestra tarifa base es de $50.00 MXN dentro de periférico.
                    Aplica solo para paquetes pequeños; menor de 2kg. y un
                    volumen menor a 20x20x20 <br />
                  </LeadText>
                  <div className="mb-10 py-2 border-t border-gray-200 text-center">
                    <div className="flex flex-wrap justify-center">
                      <Label color="pink">Cobertura dentro de periferico</Label>
                      <Label color="purple">
                        Cobertura fuera de periferico
                      </Label>
                      <br />
                    </div>

                    <iframe
                      src="https://www.google.com/maps/d/embed?mid=1gf3NKbUaIZci3qWYSpOIAaWDIBdQc9aM"
                      width="640"
                      height="480"
                    ></iframe>
        
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
