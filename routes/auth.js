const router = require('express').Router();
const User = require('../model/User');

router.post('/register', async (req, res) => {
	//Validate data before user
	const { error } = Joi.ValidationError(req.body, schema);
	if (error) return res.status(400).send(error.details[0].message);

	const user = new user({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});
	try {
		const savedUser = await user.save();
		res.send(savedUser);
	} catch (err) {
		res.status(400).send(err);
	}
});

module.exports = router;
