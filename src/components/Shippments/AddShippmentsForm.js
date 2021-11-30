import Image from "@material-tailwind/react/Image";
import H3 from "@material-tailwind/react/Heading3";
import Input from "@material-tailwind/react/Input";
import ProfilePicture from "assets/img/Logo.jpeg";
import Button from "@material-tailwind/react/Button";
import { addShip } from "../../services/shipping.service";
import React, { useState } from "react";
import Form from "react-validation/build/form";
import { useHistory } from 'react-router-dom';

const AddShippmentsForm = () => {

  const history = useHistory();
  const user = localStorage.getItem("user");

  const [recoleccion, setrecoleccion] = useState("");
  const [entrega, setEntrega] = useState("");
  const [comentarios, setComentarios] = useState("");
  const [costo, setCosto] = useState("");
  const [status, setStatus] = useState("");
  const [quantity, setQuantity] = useState("");

  const data = {
    start_address: recoleccion,
    delivery_address: entrega,
    comments: comentarios,
    total_amount: costo,
    status: status,
    received: true,
    id_user_client: user,
    id_user_employee: user,
    quantity: quantity,
  };

  const onChangeRecolect = (e) => {
    const recoleccion = e.target.value;
    setrecoleccion(recoleccion);
  };

  const onChangeStatus = (e) => {
    const status = e.target.value;
    setStatus(status);
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
  const onChangeQuantity = (e) => {
    const quantity = e.target.value;
    setQuantity(quantity);
  }

  const handleShip = async (e) => {
    addShip(data).then(() => {
      window.location.reload(true);
      history.push("/envios");
    }, (error) => {
        const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
        console.log(resMessage);
    });
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
                <div className="w-full px-4 flex flex-col items-center">
                  <div className="mb-10 py-2 border-t border-gray-200">
                    <Form>

                      <div className="w-96 ">
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
                          name="status"
                          value={status}
                          onChange={onChangeStatus}
                          outline={false}
                          placeholder="Estatus"
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
                        <Input
                          type="number"
                          color="pink"
                          size="regular"
                          name="quantity"
                          value={quantity}
                          onChange={onChangeQuantity}
                          outline={false}
                          placeholder="Cantidad"
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
                          onClick={handleShip}>
                          {" "}
                          Agregar
                        </Button>
                      </div>
                    </Form>
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
