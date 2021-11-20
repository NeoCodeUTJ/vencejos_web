import Card from "@material-tailwind/react/Card";
import CardHeader from "@material-tailwind/react/CardHeader";
import CardBody from "@material-tailwind/react/CardBody";
import CardFooter from "@material-tailwind/react/CardFooter";
import H5 from "@material-tailwind/react/Heading5";
import InputIcon from "@material-tailwind/react/InputIcon";
import Button from "@material-tailwind/react/Button";
import DefaultNavbar from "components/DefaultNavbar";
import SimpleFooter from "components/SimpleFooter";
import Page from "components/login/Page";
import Container from "components/login/Container";

export default function Register() {
  return (
    <Page>
      <DefaultNavbar />
      <Container>
        <Card>
          <CardHeader color="pink">
            <H5 color="white" style={{ marginBottom: 0 }}>
              Registrar
            </H5>
          </CardHeader>

          <CardBody>
            <div className="mb-10 px-4">
              <InputIcon
                type="text"
                color="pink"
                placeholder="Full Name"
                iconName="account_circle"
              />
            </div>
            <div className="mb-10 px-4">
              <InputIcon
                type="email"
                color="pink"
                placeholder="Email Address"
                iconName="email"
              />
            </div>
            <div className="mb-4 px-4">
              <InputIcon
                type="password"
                color="pink"
                placeholder="Password"
                iconName="lock"
              />
            </div>
          </CardBody>
          <CardFooter>
            <div className="flex justify-center">
              <Button color="pink" buttonType="link" size="lg" ripple="dark">
                Registrar
              </Button>
            </div>
          </CardFooter>
        </Card>
      </Container>
      <SimpleFooter />
    </Page>
  );
}
