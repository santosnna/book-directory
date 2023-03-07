const Joi = require("joi");

module.exports.bookValidationSchema = Joi.object({
	book: Joi.object({
		title: Joi.string().trim().required(),
		author: Joi.string().trim().required(),
		subject: Joi.string().trim().required(),
		isbn: Joi.string().trim().min(9).max(11).required(),
	}),
});
