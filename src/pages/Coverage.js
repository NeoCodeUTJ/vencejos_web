import DefaultNavbar from "components/DefaultNavbar";
import DefaultFooter from "components/DefaultFooter";
import Header from "components/coverage/Header";
import Content from "components/coverage/Content";


export default function Coverage() {
  return (
    <>
      <div className="absolute w-full z-20">
        <DefaultNavbar />
      </div>
      <main>
        <Header />
        <Content />
      </main>
      <DefaultFooter />
    </>
  );
}
