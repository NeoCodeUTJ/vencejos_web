import Header from "components/Shippments/Header";
import AdmonNavbar from "components/admon/Navbar_admon";
import SimpleFooterDark from "components/SimpleFooterDark";
import AddShippmentsForm from "components/Shippments/AddShippmentsForm";

export default function AddShippments() {
  return (
    <>
      <div className="absolute w-full z-20">
        <AdmonNavbar />
      </div>
      <main>
        <Header />
        <AddShippmentsForm />
      </main>
      <SimpleFooterDark />
    </>
  );
}
