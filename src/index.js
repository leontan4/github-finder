import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./App.jsx";
import { GithubProvider } from "./context/context";
import { Auth0Provider } from "@auth0/auth0-react";

//dev-w6q76epf.us.auth0.com
// PwAOaTtf8Efsg3sWdzNNbfHMctGTwp7W

ReactDOM.render(
	<React.StrictMode>
		<Auth0Provider
			domain="dev-w6q76epf.us.auth0.com"
			clientId="PwAOaTtf8Efsg3sWdzNNbfHMctGTwp7W"
			redirectUri={window.location.origin}
			cacheLocation="localstorage"
		>
			<GithubProvider>
				<App />
			</GithubProvider>
		</Auth0Provider>
	</React.StrictMode>,
	document.getElementById("root"),
);
