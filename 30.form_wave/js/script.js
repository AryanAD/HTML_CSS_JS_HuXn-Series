const allLabels = document.querySelectorAll(".form-control label");

allLabels.forEach((label) => {
	label.innerHTML = label.innerHTML
		.split(" ")
		.map(
			(letter, index) =>
				`<span style="transition-delay: ${index * 50}ms">${letter}</span>`
		)
		.join(" ");
});
