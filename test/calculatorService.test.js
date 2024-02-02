
const { calculate } = require('../services/calculatorService');

describe('Calculator Service', () => {
    it('should add two numbers', () => {
        const req = { body: { num1: 5, num2: 3, operation: 'add' } };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn(),
            json: jest.fn()
        };

        calculate(req, res);
        expect(res.status).not.toHaveBeenCalled();
        expect(res.json).toHaveBeenCalledWith({ result: 8 });
    });

    it('should handle missing values', () => {
        const req = { body: { num1: 5, operation: 'add' } };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };

        calculate(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith('Invalid input. Please provide valid numbers or operation.');
    });

    it('should handle invalid operation', () => {
        const req = { body: { num1: 5, num2: 3, operation: 'power' } };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };

        calculate(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith('Invalid operation. Please provide a valid operation.[add, subtract, multiply or divide]');
    });

    it('should handle with zero in division', () => {
        const req = { body: { num1: 5, num2: 0, operation: 'divide' } };
        const res = {
            status: jest.fn().mockReturnThis(),
            send: jest.fn()
        };

        calculate(req, res);
        expect(res.status).toHaveBeenCalledWith(400);
        expect(res.send).toHaveBeenCalledWith('Cannot divide by zero.');
    });
});
