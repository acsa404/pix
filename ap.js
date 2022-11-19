function Calculate() {
	const amount = document.querySelector("#amount").value;
	// rate section in the variable
	const rate = document.querySelector("#rate").value;
	// section in the variable
	const months = document.querySelector("#months").value;
	const interest = (amount * (rate * 0.01)) / months;
	// Calculating total payment
	const total = ((amount / months) + interest).toFixed(2)
	document.querySelector("#total")
		.innerHTML = "EMI : (₹)" + total;
}
