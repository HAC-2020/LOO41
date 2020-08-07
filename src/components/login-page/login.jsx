import React from 'react';
import ReactDOM from "react-dom";
//import App from "./App";
import { Auth0Provider } from "@auth0/auth0-react";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "./login-button.jsx";


function Login() {
 ReactDOM.render(
    <Auth0Provider
      domain="dev-ja3qu6o5.us.auth0.com"
      clientId="y0ftLULa91OArkTFPaUbpL9uisuDEZ2C"
      redirectUri={window.location.origin}
    >
     
    </Auth0Provider>,
    document.getElementById("root")
  );  
  
  return (
      <div>
        <LoginButton></LoginButton>
      </div>
    ); 
}

  export default Login;

