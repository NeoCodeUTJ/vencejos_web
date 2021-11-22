import React, {useState, useRef} from "react";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import {isEmail} from "validator";
import CheckButton from "react-validation/build/button";
import AuthService from "../services/auth.services";
import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H5 from "@material-tailwind/react/Heading5";
import InputIcon from "@material-tailwind/react/InputIcon";
import Checkbox from "@material-tailwind/react/Checkbox";
import Button from "@material-tailwind/react/Button";
import DefaultNavbar from "components/DefaultNavbar";
import SimpleFooter from "components/SimpleFooter";
import Page from "components/login/Page";
import Container from "components/login/Container";


const required = (value) => {
    if (!value) {
        return (
            <div className="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1" role="alert">
                This field is required!
            </div>
        );
    }
};


const Login = (props) => {
    const form = useRef();
    const checkBtn = useRef();

    const [email, setemail] = useState("");
    const [password, setPassword] = useState("");
    const [loading, setLoading] = useState(false);
    const [message, setMessage] = useState("");


    const onChangeemail = (e) => {
        const email = e.target.value;
        setemail(email);
    };

    const onChangePassword = (e) => {
        const password = e.target.value;
        setPassword(password);
    };

    const handleLogin = (e) => {
        e.preventDefault();

        setMessage("");
        setLoading(true);

        form.current.validateAll();
        console.log(email, password);
        if (checkBtn.current.context._errors.length === 0) {
            AuthService.login(email, password).then(() => {
                window.location.reload();
            }, (error) => {
                setLoading(false);
                setMessage( <div class="h-48 flex flex-wrap content-center flex flex-col w-full max-w-sm mx-auto p-4 border border-gray-200 bg-white shadow">

                <div class="relative">
                     <span class="flex items-center font-medium tracking-wide text-red-500 text-xs mt-1 ml-1">
                         Correo y/o Contraseña no validos.
                     </span>
                 </div>
                </div>);
            });
        } else {
            setLoading(false);
        }
    };

    return (
        <Page>
            <DefaultNavbar/>
            <Form onSubmit={handleLogin}
                ref={form}>
                <Container>
                    <Card>
                        <CardHeader color="pink">
                            <H5 color="white"
                                style={
                                    {marginBottom: 0}
                            }>
                                Inicia Sesión
                            </H5>
                        </CardHeader>

                        <CardBody>
                            <div className="mb-12 px-4 bg-bb">
                                <InputIcon required type="email" color="pink" placeholder="Correo" iconName="email" name="email"
                                    value={email}
                                    onChange={onChangeemail}
                                    validations={
                                        [required, email]
                                    }/>
                            </div>
                            <div className="mb-8 px-4">
                                <InputIcon required type="password" color="pink" placeholder="Contraseña" iconName="lock" name="password"
                                    value={password}
                                    onChange={onChangePassword}
                                    validations={
                                        [required]
                                    }/>
                            </div>
                        </CardBody>
                        <CardFooter>
                            <div className="flex justify-center bg-bb">
                                <Button color="pink" buttonType="link" size="lg" ripple="dark">
                                    Inicia Sesión
                                </Button>
                            </div>
                            <div className="form-group">
                                <button className="btn btn-primary btn-block"
                                    disabled={loading}>
                                    {
                                    loading && (
                                        <span className="spinner-border spinner-border-sm"></span>
                                    )
                                } </button>
                            </div>

                            {
                            message && (
                                <div className="form-group">
                                    <div className="alert alert-danger" role="alert">
                                        {message} </div>
                                </div>
                            )
                        }
                            <CheckButton style={
                                    {
                                        display: "none",
                                        aligItems: "center",
                                        display: "flex",
                                        justifyContent: "center"
                                    }
                                }
                                ref={checkBtn}/>
                          
                        </CardFooter>
                    </Card>

                </Container>
            </Form>
            <SimpleFooter/>
        </Page>
    );
};

export default Login;
