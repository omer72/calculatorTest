const jwt = require("jsonwebtoken");
exports.generateToken = function(req, res){
    const payload = {
        userId: req.query.userId,
        username: req.query.password
    };
    const expiresIn = '1h'; // Token expiration time
    const secretKey = process.env.SECRET_KEY;
    const token = jwt.sign(payload, secretKey, { expiresIn });
    res.json({ token });
}