import Image from "@material-tailwind/react/Image";
import H3 from "@material-tailwind/react/Heading3";
import Input from "@material-tailwind/react/Input";
import ProfilePicture from "assets/img/Logo.jpeg";
import Button from "@material-tailwind/react/Button";
import AddShip from "../../services/shipping.service";
import React, { useState, useRef } from "react";

const AddShippmentsForm = (props) => {
  const form = useRef();
  const checkBtn = useRef();

  const [recoleccion, setrecoleccion] = useState("");
  const [entrega, setEntrega] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [costo, setCosto] = useState("");

  const data = {
    recoleccion: recoleccion,
    entrega: entrega,
    comentarios: comentarios,
    costo: costo,
  };

  const onChangeRecolect = (e) => {
    const recoleccion = e.target.value;
    setrecoleccion(recoleccion);
  };

  const onChangeEntrega = (e) => {
    const entrega = e.target.value;
    setEntrega(entrega);
  };

  const onChangeComent = (e) => {
    const comentario = e.target.value;
    setComentarios(comentario);
  };

  const onChangeCosto = (e) => {
    const costo = e.target.value;
    setCosto(costo);
  };

  const handleShip = (e) => {
    e.preventDefault();
    AddShip.addShip(data).then(
      () => {
        window.location.reload();
      },
      (error) => {
        const resMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
      }
    );
  };
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
              <H3 color="gray">Nuevo envío</H3>
            </div>

            <div className="mb-10 py-2 border-t border-gray-200">
              <div className="flex flex-wrap ">
                <div className="w-full lg:w-9/12 px-4 flex flex-col items-center">
                  <div className="mb-10 py-2 border-t border-gray-200">
                    <form action="">
                      <Input
                        type="text"
                        color="pink"
                        size="regular"
                        name="recoleccion"
                        value={recoleccion}
                        onChange={onChangeRecolect}
                        outline={false}
                        placeholder="Recoleccion"
                      />{" "}
                      <br />
                      <Input
                        type="text"
                        color="pink"
                        size="regular"
                        name="entrega"
                        value={entrega}
                        onChange={onChangeEntrega}
                        outline={false}
                        placeholder="Entrega"
                      />
                      <br />
                      <Input
                        type="text"
                        color="pink"
                        size="regular"
                        name="comentarios"
                        value={comentarios}
                        onChange={onChangeComent}
                        outline={false}
                        placeholder="Comentarios"
                      />
                      <br />
                      <Input
                        type="text"
                        color="pink"
                        size="regular"
                        name="costo"
                        value={costo}
                        onChange={onChangeCosto}
                        outline={false}
                        placeholder="Costo"
                      />
                      <br />
                      <Button
                        color="pink"
                        buttonType="filled"
                        size="regular"
                        rounded={false}
                        block={false}
                        iconOnly={false}
                        ripple="light"
                      >
                        {" "}
                        Agregar
                      </Button>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddShippmentsForm;
