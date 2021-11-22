import { useState } from "react";
import Navbar from "@material-tailwind/react/Navbar";
import NavbarContainer from "@material-tailwind/react/NavbarContainer";
import NavbarWrapper from "@material-tailwind/react/NavbarWrapper";
import NavbarBrand from "@material-tailwind/react/NavbarBrand";
import NavbarToggler from "@material-tailwind/react/NavbarToggler";
import NavbarCollapse from "@material-tailwind/react/NavbarCollapse";
import Nav from "@material-tailwind/react/Nav";
import NavLink from "@material-tailwind/react/NavLink";
import Icon from "@material-tailwind/react/Icon";
import Button from "@material-tailwind/react/Button";

export default function DefaultNavbar() {
  const [openNavbar, setOpenNavbar] = useState(false);
  const token = localStorage.getItem("token");
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
            {/**/}
            <div className="flex flex-col z-50 lg:flex-row lg:items-center">
              <NavLink href="/Cobertura" rel="noreferrer" ripple="light">
                <Icon name="language" size="2xl" />
                &nbsp;Cobertura
              </NavLink>
              {/*termina*/}
              <NavLink href="/" rel="noreferrer" ripple="light">
                <Icon name="home" size="2xl" />
                &nbsp;Inicio
              </NavLink>

              {!token ?
                <a href="/login" rel="noreferrer">
                <Button
                  color="pink"
                  className="bg-white text-white ml-4"
                  ripple="dark"
                  display="none"
                >
                  Iniciar Sesión
                </Button>
              </a> : ''
              }

            </div>
          </Nav>
        </NavbarCollapse>
      </NavbarContainer>
    </Navbar>
  );
}
