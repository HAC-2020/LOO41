import React from 'react';
import ReactDOM from "react-dom";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";

ReactDOM.render(
    <Auth0Provider
      domain="dev-ja3qu6o5.us.auth0.com"
      clientId="y0ftLULa91OArkTFPaUbpL9uisuDEZ2C"
      redirectUri={window.location.origin}
    >
      <App />
    </Auth0Provider>,
    document.getElementById("root")
  );
  
  const LoginButton = () => {
    const { loginWithRedirect } = useAuth0();
  
    return <button onClick={() => loginWithRedirect()}>Log In</button>;
  };
  
  export default LoginButton;