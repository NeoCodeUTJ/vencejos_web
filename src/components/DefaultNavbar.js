import { useState } from "react";
import { Link } from "react-router-dom";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Dropdown from "@material-tailwind/react/Dropdown";
import DropdownItem from "@material-tailwind/react/DropdownItem";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";

export default function DefaultNavbar() {

 
  const [openNavbar, setOpenNavbar] = useState(false);
  return (
    <Navbar color="transparent" navbar>
      <NavbarContainer>
        <NavbarWrapper>
          <a href="/">
            <NavbarBrand> Vencejos Bicimensajeria</NavbarBrand>
          </a>
          <NavbarToggler
            onClick={() => setOpenNavbar(!openNavbar)}
            color="white"
          />
        </NavbarWrapper>

        <NavbarCollapse open={openNavbar}>
          <Nav>
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
              <NavLink href="/Cobertura" rel="noreferrer" ripple="light">
                <Icon name="language" size="2xl" />
                &nbsp;Cobertura
              </NavLink>
              <NavLink
                href="https://material-tailwind.com/components?ref=mtk"
                target="_blank"
                rel="noreferrer"
                ripple="light"
              >
                <Icon name="apps" size="2xl" />
                &nbsp;Otros
              </NavLink>
              <div className="text-white">
                <Dropdown
                  color="transparent"
                  size="sm"
                  buttonType="link"
                  buttonText={
                    <div className="py-2.5 font-medium flex items-center">
                      <Icon name="apps" size="2xl" color="white" />
                      <span className="ml-2">Servicios</span>
                    </div>
                  }
                  ripple="light"
                >
                  <Link to="/">
                    <DropdownItem color="pink">Inicio</DropdownItem>
                  </Link>
                  <Link to="/Calculadora">
                    <DropdownItem color="pink">Calcula envio</DropdownItem>
                  </Link>
                  <Link to="/login">
                    <DropdownItem color="pink">Login</DropdownItem>
                  </Link>
                  <Link to="/register">
                    <DropdownItem color="pink">Register</DropdownItem>
                  </Link>
                  <Link to="/dashboard">
                    <DropdownItem color="pink">Mensajeros</DropdownItem>
                  </Link>
                  <Link to="/Admon">
                    <DropdownItem color="lightBlue">Admon</DropdownItem>
                  </Link>
                </Dropdown>
              </div>

              <a href="/login" rel="noreferrer">
                <Button
                  color="pink"
                  className="bg-white text-black ml-4"
                  ripple="dark"
                  display="none"
                
                  
                >
                  Iniciar Sesión
                </Button>
                
              </a>
              <a href="/" rel="noreferrer">
                {/* <Button
                  color="pink"
                  className="bg-white text-black ml-4"
                  ripple="dark"
                  display="none"
                  onClick={logout}
                
                  
                >
                  Cerrar Sesión
                </Button> */}
                
              </a>
            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
