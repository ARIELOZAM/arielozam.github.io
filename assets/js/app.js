function onSection() {
	const sections = document.querySelectorAll("section");
	console.log(sections)

	for(let i = 0; i < sections.length ; i++) {
		console.log(sections[i].id)
		if(sections[i].id == "") {
			sections[i].setAttribute("data", "no-id");
				if(sections[i].id == "") {
					sections[i].setAttribute("class", "bg-danger");
				}
		}
		else {
		sections[i].setAttribute("class", "hv-100 bg-dark");
	}
	}
}

onSection();


function formatStyles() {
	const components = [
			{
				headingOne: document.querySelectorAll("h1"),
				headingTwo: document.querySelectorAll("h2"),
			}
		]
	for(let i = 0; i < components.length ; i++) {
		console.log(components[i]);
		
		for(let h = 0; h < components[i].headingOne.length ; h++) {
			const h1 = components[i].headingOne[h];
		h1.setAttribute("class", "text-danger")
		}
	}
}


function arielozamAPI() {
const data = [{
		devData: {
			name: "ARIELOZAM",
			role: "Front End Developer"
		}
}];
}