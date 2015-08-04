var Joi = require('joi');

module.exports = {
	contacts: Joi.object({
		id: Joi.number().optional(),
                firstname: Joi.string().min(2).max(30).required(),
                middlename: Joi.string().alphanum().max(1),
                lastname: Joi.string().min(2).max(30).required(),
                //title: Joi.string().max(30),
                phone  : Joi.string().max(30),
                email: Joi.string().email(),
                saddress: Joi.string().max(100),
                city: Joi.string().max(100),
                state: Joi.string().alphanum().max(30),
                zip: Joi.string().max(30)
                //created_at: Joi.date(),
                //updated_at: Joi.date()
	})
}