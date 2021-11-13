import CardTable from "components/dashboard/CardTable";
import Header from "components/dashboard/Header";
import DefaultFooter from "components/DefaultFooter";
import DefaultNavbar from "components/DefaultNavbar";


export default function Dashboard(){
    return (
        <>
          <div className="absolute w-full z-20">
            <DefaultNavbar />
          </div>
          <main>
            <Header />
            <CardTable />
          </main>
          <DefaultFooter />
        </>
      );

}