import React from "react";
import { useForm } from "react-hook-form";

const Form = () => {
	const PHONE = "5491157013308";

	const { register, errors, handleSubmit } = useForm();

	const onSubmit = (data, e) => {
		window.open(
			generateURL(PHONE, data.name, data.barberSelected, formatDate(data.date))
		);
		e.target.reset();
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
			<form onSubmit={handleSubmit(onSubmit)} className="container-form">
				<div className="input-form">
					<label htmlFor="name">Name:</label>
					<input
						type="text"
						name="name"
						ref={register({
							required: {
								value: true,
								message: "Name is required",
							},
						})}
					/>

					{errors.name && (
						<div className="errorContainer">
							<span className="errorMessage">{errors.name.message}</span>
						</div>
					)}
				</div>

				<div className="input-form">
					<label htmlFor="barber">Barber:</label>
					<select
						name="barber"
						ref={register({
							required: {
								value: true,
								message: "Select a barber",
							},
						})}
					>
						<option value="Diego">Diego</option>
						<option value="Sebastián">Sebastián</option>
						<option value="Darío">Darío</option>
					</select>

					{errors.barber && (
						<div className="errorContainer">
							<span className="errorMessage">{errors.barber.message}</span>
						</div>
					)}
					<label htmlFor="date">Date:</label>
					<input
						name="date"
						type="date"
						pattern="[0-9]{4}-[0-9]{2}-[0-9]{2}"
						ref={register({
							required: {
								value: true,
								message: "Select a date",
							},
						})}
					/>

					{errors.date && (
						<div className="errorContainer">
							<span className="errorMessage">{errors.date.message}</span>
						</div>
					)}
				</div>

				<div className="form-buttons">
					<button type="submit" id="submit" className="btn send">
						Send
					</button>
				</div>
			</form>
		</>
	);
};

export default Form;