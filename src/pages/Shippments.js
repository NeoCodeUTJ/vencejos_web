import CardShippments from "components/Shippments/CardShippments";
import Header from "components/Shippments/Header";
import AdmonNavbar from "components/admon/Navbar_admon";
import DefaultFooter from "components/DefaultFooter";
import DefaultNavbar from "components/DefaultNavbar";
import SimpleFooter from "components/SimpleFooter";
import SimpleFooterDark from "components/SimpleFooterDark";

export default function Shippments() {
  return (
    <>
      <div className="absolute w-full z-20">
        <AdmonNavbar />
      </div>
      <main>
        <Header />
        <CardShippments />
      </main>
      <SimpleFooterDark />
    </>
  );
}
