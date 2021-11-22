import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import Navbar_admon from "components/admon/Navbar_admon";
import SimpleFooter from "components/SimpleFooter";

export default function Admon() {
  // const logout= ()=>{
  //   localStorage.removeItem('user');
  // }
  return (
    <>
      <Navbar_admon />

      <main></main>
      <SimpleFooter />
    </>
  );
}
