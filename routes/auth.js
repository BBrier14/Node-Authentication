const router = require('express').Router();

router.post('/register', async (req, res) => {
	const user = new user({
		name: req.body.name,
		email: req.body.email,
		password: req.body.password
	});
});

module.exports = router;
