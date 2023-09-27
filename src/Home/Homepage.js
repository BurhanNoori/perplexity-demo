import React from "react";
import Navbar from "../Navbar/Navbar";
import Content from "../Content/Content";
import "./Home.css";

function Homepage() {
	return (
		<div className="home-container">
			<div className="nav">
				<Navbar />
			</div>
			<div className="content">
				<Content/>
			</div>
		</div>
	);
}
export default Homepage;
