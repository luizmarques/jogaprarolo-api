import { param } from 'express-validator';
import validateSchema from '../../validate-schema.js';

const getUserSchema = [
    param('id').isMongoId().withMessage('ID query param should be a Mongo ID'),
    validateSchema,
];

export default getUserSchema;
