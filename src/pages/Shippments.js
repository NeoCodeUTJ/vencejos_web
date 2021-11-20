import CardShippments from "components/Shippments/CardShippments";
import Header from "components/Shippments/Header";
import DefaultFooter from "components/DefaultFooter";
import DefaultNavbar from "components/DefaultNavbar";


export default function Shippments(){
    return (
        <>
          <div className="absolute w-full z-20">
            <DefaultNavbar />
          </div>
          <main>
            <Header />
            <CardShippments />
          </main>
          <DefaultFooter />
        </>
      );
    }
