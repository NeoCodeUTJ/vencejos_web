import Image from "@material-tailwind/react/Image";
import H3 from "@material-tailwind/react/Heading3";
import Input from "@material-tailwind/react/Input";
import ProfilePicture from "assets/img/Logo.jpeg";
import Button from "@material-tailwind/react/Button";
import { addUsers } from "../../services/users.service";
import React, { useState, useRef } from "react";

const AddUsersForm = () => {

    const form = useRef();
    const checkBtn = useRef();

    const [name, setname] = useState("");
    const [first_surname, setfirst_surname] = useState("");
    const [second_surname, setsecond_surname] = useState("");
    const [phone, setphone] = useState("");
    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [role, setrole] = useState("");
    const [id_municipio, setid_municipio] = useState("");


    const data = {
        name: name,
        first_surname: first_surname,
        second_surname: second_surname,
        phone: phone,
        email: email,
        password: password.toString(),
        role: role,
        id_municipio: id_municipio
    };

    const onChangeName = (e) => {
        const name = e.target.value;
        setname(name);
    };

    const onChangefirst_surname = (e) => {
        const first_surname = e.target.value;
        setfirst_surname(first_surname);
    };

    const onChangeSecond_surname = (e) => {
        const second_surname = e.target.value;
        setsecond_surname(second_surname);
    };

    const onChangephone = (e) => {
        const phone = e.target.value;
        setphone(phone);
    };
    const onChangeemail = (e) => {
        const email = e.target.value;
        setemail(email);
    };
    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };
    const onChangeRole = (e) => {
        const role = e.target.value;
        setrole(role);
    };
    const onChangeId_municipio = (e) => {
        const id_municipio = e.target.value;
        setid_municipio(id_municipio);
    };

    const handleUsers = async () => {
        addUsers(data).then(() => {

        }, (error) => {
            const resMessage = (error.response && error.response.data && error.response.data.message) || error.message || error.toString();
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
                                        <Image src={ProfilePicture}
                                            alt="Profile picture"
                                            raised
                                            rounded />
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="text-center my-8">
                            <H3 color="gray">Nuevo Usuario</H3>
                        </div>

                        <div className="mb-10 py-2 border-t border-gray-200">
                            <div className="flex flex-wrap ">
                                <div className="w-full  px-4 flex flex-col items-center">
                                    <div className="mb-10 py-2 border-t border-gray-200">
                                        <form>
                                            <div className="w-96 ">
                                            <Input type="text" color="pink"  name="name"
                                                value={name}
                                                onChange={onChangeName}
                                                outline={false}
                                                placeholder="Nombre" />{" "}
                                            <br />
                                            <Input type="text" color="pink" size="regular" name="first_surname"
                                                value={first_surname}
                                                onChange={onChangefirst_surname}
                                                outline={false}
                                                placeholder="Primer apellido" />
                                            <br />
                                            <Input type="text" color="pink" size="regular" name="second_surname"
                                                value={second_surname}
                                                onChange={onChangeSecond_surname}
                                                outline={false}
                                                placeholder="Segundo apellido" />
                                            <br />
                                            <Input type="text" color="pink" size="regular" name="phone"
                                                value={phone}
                                                onChange={onChangephone}
                                                outline={false}
                                                placeholder="Telefono" />
                                            <br />
                                            <Input type="text" color="pink" size="regular" name="email"
                                                value={email}
                                                onChange={onChangeemail}
                                                outline={false}
                                                placeholder="Correo electronico" />
                                            <br />
                                           
                                            <Input type="text" color="pink" size="regular" name="password"
                                                value={password}
                                                onChange={onChangePassword}
                                                outline={false}
                                                placeholder="Contraseña" />
                                            <br />
                                            <Input type="text" color="pink" size="regular" name="role"
                                                value={role}
                                                onChange={onChangeRole}
                                                outline={false}
                                                placeholder="Rol" />
                                            <br />
                                            <Input type="text" color="pink" size="regular" name="id_municipio"
                                                value={id_municipio}
                                                onChange={onChangeId_municipio}
                                                outline={false}
                                                placeholder="Id municipio" />
                                            <br />
                                            <Button color="pink" buttonType="filled" size="regular"
                                                rounded={false}
                                                block={false}
                                                iconOnly={false}
                                                ripple="light"
                                                onClick={handleUsers}>
                                                {" "}
                                                Agregar
                                            </Button>
                                            </div>
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

export default AddUsersForm;
