import { Helmet } from "react-helmet";
import { Form } from "../components/logIn/form";

const Login = () => {
  return (
    <div>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Login</title>
        <link rel="canonical" href="https://evenue.ng/login" />
      </Helmet>
      <Form />
    </div>
  );
};
export default Login;
