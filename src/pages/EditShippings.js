import Header from "components/Shippments/Header";
import AdmonNavbar from "components/admon/Navbar_admon";
import SimpleFooterDark from "components/SimpleFooterDark";
import EditShippment from "components/Shippments/EditShippment";

export default function EditShippings() {
  return (
    <>
      <div className="absolute w-full z-20">
        <AdmonNavbar />
      </div>
      <main>
        <Header />
        <EditShippment />
      </main>
      <SimpleFooterDark />
    </>
  );
}
