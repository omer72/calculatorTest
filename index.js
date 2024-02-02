const express = require('express');
const bodyParser = require('body-parser');
const jwt = require('jsonwebtoken');
const yaml = require('yamljs');
const swaggerUi = require('swagger-ui-express');
const Calculator = require("./services/calculatorService");
const TokenGenerator = require("./services/authorizationService");

const app = express();
const PORT = process.env.PORT || 3000;

// Load YAML file
const swaggerDocument = yaml.load('api/openapi.yaml');

app.use(bodyParser.json());

// Serve Swagger UI
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDocument));

// Secret key for JWT
const secretKey = process.env.SECRET_KEY || 'your_secret_key';

// Generate JWT token
app.get('/generate-token', (req, res) => {
    TokenGenerator.generateToken(req, res);
});


// Middleware to verify JWT token
const verifyToken = (req, res, next) => {
    let token = req.headers.authorization;
    token = token.substring(7);

    if (!token) {
        return res.status(403).json({ message: 'Token not provided' });
    }

    jwt.verify(token, secretKey, (err, decoded) => {
        if (err) {
            return res.status(401).json({ message: 'Invalid token' });
        }
        req.decoded = decoded;
        next();
    });
};

// API endpoint
app.post('/calculate', verifyToken, (req, res) => {
    Calculator.calculate(req, res);
});

// Start the server
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
