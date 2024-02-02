const jwt = require("jsonwebtoken");
exports.generateToken = function(req, res){
    const payload = {
        userId: req.body.userId,
        username: req.body.username
    };
    const expiresIn = '1h'; // Token expiration time
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(payload, secretKey, { expiresIn });
    res.json({ token });
}