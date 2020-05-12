import React from "react";

const Form = () => {
	const PHONE = "5491157013308";

	let name;
	let barberSelected;
	let date;

	const sendForm = (e) => {
		const divError = document.getElementById("showMessage");
		e.preventDefault();
		console.log(PHONE, name, barberSelected, date);
		if (
			name === undefined ||
			name === null ||
			barberSelected === undefined ||
			barberSelected === null ||
			date === undefined ||
			date === null
		) {
			divError.style.opacity = "1";
			setTimeout(() => {
				divError.style.opacity = "0";
			}, 3300);
		} else {
			console.log(PHONE, name, barberSelected, date);
			window.open(generateURL(PHONE, name, barberSelected, date));
		}
	};

	const inputName = (e) => {
		name = e.target.value;
	};

	const selectedBarber = (e) => {
		barberSelected = e.target.options[e.target.selectedIndex].value;
	};

	const selectedDate = (e) => {
		date = formatDate(e.target.value);
	};

	const formatDate = (date) => {
		return date.split("-").reverse().join("/");
	};

	const generateURL = (PHONE, name, barberSelected, date) => {
		return `https://wa.me/${PHONE}?text=
						----------%0A*NAME*%0A----------%0A
						${name}%0A
						----------%0A*BARBER*%0A----------%0A
						${barberSelected}%0A
						----------%0A*DATE*%0A----------%0A
						${date}`;
	};

	return (
		<>
			<form className="container-form">
				<div className="input-form">
					<label htmlFor="name">Name:</label>
					<input onChange={inputName} type="text" name="Name" id="name" />
				</div>

				<div className="input-form">
					<label htmlFor="barber">Barber:</label>
					<select onChange={selectedBarber} id="selectBarber">
						<option value="Diego">Diego</option>
						<option value="Sebastián">Sebastián</option>
						<option value="Darío">Darío</option>
					</select>

					<label htmlFor="date">Date:</label>
					<input
						onChange={selectedDate}
						id="date"
						type="date"
						pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
					/>
				</div>

				<div className="form-buttons">
					<button id="submit" onClick={sendForm} className="btn send">
						Send
					</button>
				</div>

				<div id="showMessage" className="error">
					<i className="fas fa-exclamation-triangle fa-2x" />
					<p>ERROR! Complete all fields.</p>
				</div>
			</form>
		</>
	);
};

export default Form;
