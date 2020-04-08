//Validation
const Joi = require('@hapi/joi');

//Register Validation
const registerValidation = () => {
	const schema = {
		name: Joi.string().min(6).required(),
		email: Joi.string().min(6).required().email(),
		password: Joi.string().min(6).required()
	};
};
