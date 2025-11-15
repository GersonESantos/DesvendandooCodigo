import { useState } from "react";

function CondicionalSwitchCaseNota() {
	const [nota, setNota] = useState(0);

	return (
		<div>
			<h2>Nota: {nota}</h2>
			<input
				type="number"
				value={nota}
				onChange={(e) => setNota(Number(e.target.value))}
			/>
		</div>
	);
}

export default CondicionalSwitchCaseNota;