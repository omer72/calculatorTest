exports.calculate =  function (req, res) {
    const { num1, num2, operation } = req.body;
    if (num1 === undefined || num2 === undefined) return res.status(400).send('Missing values');
    let result;
    switch (operation) {
        case 'add':
            result = num1 + num2;
            break;
        case 'subtract':
            result = num1 - num2;
            break;
        case 'multiply':
            result = num1 * num2;
            break;
        case 'divide':
            result = num1 / num2;
            break;
        default:
            return res.status(400).send('Invalid operation');
    }

    res.json({ result });
}
