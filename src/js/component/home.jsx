import React, { useState } from "react";

function Home() {
	const [glowing, setGlowing] = useState('red');
	const [purpleLight, setPurpleLight] = useState("false");
	return (
		<div>
			<div className="d-flex justify-content-center mt-5">
				<button type="button" className="btn btn-primary mx-1" onClick={() => {
					if (purpleLight === "false") {
						if (glowing === "purple"){setGlowing("green")}
						if (glowing === "red"){setGlowing("green")}
						if (glowing === "green"){setGlowing("yellow")}
						if (glowing === "yellow"){setGlowing("red")}
					}
					else {
						if (glowing === "red"){setGlowing("purple")}
						if (glowing === "purple"){setGlowing("green")}
						if (glowing === "green"){setGlowing("yellow")}
						if (glowing === "yellow"){setGlowing("red")}
					}
					}}>
					Change color light
				</button>
				<button type="button" className="btn btn-primary mx-1" onClick={() => 
				{purpleLight === "false" ? setPurpleLight("true") : setPurpleLight("false")}}>
					Add purple light
				</button>
			</div>
			<div className={(purpleLight === "false" ? "traffic" : "trafficPurpleLight")}>
				<div className={"lamp " + (glowing === "red" ? "red glowingRed" : "redTenue")} onClick={() => setGlowing("red")}></div>
				<div className={"lamp " + (glowing === "yellow" ? "yellow glowingYellow" : "yellowTenue")} onClick={() => setGlowing("yellow")}></div>
				<div className={"lamp " + (glowing === "green" ? "green glowingGreen" : "greenTenue")} onClick={() => setGlowing("green")}></div>
				<div className={(purpleLight === "true" ? ("lamp " + (glowing === "purple" ? "purple glowingPurple" : "purpleTenue")) : "" )} onClick={() => setGlowing("purple")}></div>
				<div className="poste"></div>
			</div>
		</div>
	);
};

export default Home;