import React from "react";
import { BrowserRouter as Router, Route } from "react-router-dom";
import { Container } from "semantic-ui-react";

import "semantic-ui-css/semantic.min.css";
import "./App.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Team from "./pages/Team";
import Contact from "./pages/Contact";
import Policy from "./pages/Policy";
import Terms from "./pages/Terms";

import { Menu } from "semantic-ui-react";
import NavBar from "./components/NavBar";
import Footer from "./components/Footer";

function App() {
	return (
		<Router>
			<Container>
				<NavBar />
				<Route exact path="/" component={Home} />
				<Route exact path="/about" component={About} />
				<Route exact path="/team" component={Team} />
				<Route exact path="/contact" component={Contact} />
				<Route exact path="/policy" component={Policy} />
				<Route exact path="/terms" component={Terms} />
				<Footer />
			</Container>
		</Router>
	);
}

export default App;
