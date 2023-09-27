import React from "react";
import { ReactSVG } from "react-svg";
import perplexityIcon from "../images/perplexity-icon.svg";
import "./PerplexityIcon.css";

function PerplexityIcon() {
	return (
		<div class='icon-container'>
			<ReactSVG src={perplexityIcon} />
			<p class='text'>perplexity</p>
		</div>
	);
}

export default PerplexityIcon;
