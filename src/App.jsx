import React from "react";
import { Dashboard, Login, PrivateRoute, AuthWrapper, Error } from "./pages";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

function App() {
	return (
		<AuthWrapper>
			<Router>
				<Switch>
					<Route exact path="/">
						<Dashboard></Dashboard>
					</Route>
					{/* <Route path="/login">
						<Login />
					</Route> */}
					<Route path="*">
						<Error />
					</Route>
				</Switch>
			</Router>
		</AuthWrapper>
	);
}

export default App;
