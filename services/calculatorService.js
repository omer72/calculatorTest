exports.calculate = function (req, res) {
    const { num1, num2, operation } = req.body;

    // Input validation
    if (isNaN(num1) || isNaN(num2) || !operation) {
        return res.status(400).send('Invalid input. Please provide valid numbers or operation.');
    }

    // Convert num1 and num2 to numbers
    const num1Value = parseFloat(num1);
    const num2Value = parseFloat(num2);

    let result;

    // Perform the operation
    switch (operation) {
        case 'add':
            result = num1Value + num2Value;
            break;
        case 'subtract':
            result = num1Value - num2Value;
            break;
        case 'multiply':
            result = num1Value * num2Value;
            break;
        case 'divide':
            if (num2Value === 0) {
                return res.status(400).send('Cannot divide by zero.');
            }
            result = num1Value / num2Value;
            break;
        default:
            return res.status(400).send('Invalid operation. Please provide a valid operation.[add, subtract, multiply or divide]');
    }

    // Return the result
    res.json({ result });
};

