import Title from "components/landing/Title";
import TeamCard from "components/landing/TeamCard";
import Image1 from "assets/img/Profile3.jpg";
import Image2 from "assets/img/Profile1.jpg";
import Image3 from "assets/img/Profile2.jpg";
import Image4 from "assets/img/Profile4.png";

export default function TeamSection() {
  return (
    <section className="pt-20 pb-48">
      <div className="container max-w-7xl mx-auto px-4">
        <Title heading="Nuestro Equipo">
          Los pilares que hacen posible brindar el mejor servicio
        </Title>
        <div className="flex flex-wrap">
          <TeamCard img={Image1} name="Carlos Silva" position="CEO/Mensajero" />
          <TeamCard
            img={Image2}
            name="Mario Arredondo"
            position="Encargado de ventas/Mensajero"
          />
          <TeamCard
            img={Image3}
            name="Carlos Borrayo"
            position="Mensajero principal"
          />
          <TeamCard
            img={Image4}
            name="Ricardo Zuñiga"
            position="Mensajero/Miembro de NeoCode"
          />
        </div>
      </div>
    </section>
  );
}
