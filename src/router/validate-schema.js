import { matchedData, validationResult } from 'express-validator';

export default (req, res, next) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        res.status(400).json({ msg: 'ValidationError', errors: errors.array() });
    } else {
        req.body = matchedData(req);
        next();
    }
};