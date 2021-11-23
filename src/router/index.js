import express from 'express';
import assignUserRoutes from './user-routes/assign-user-routes.js';

const router = express.Router();

assignUserRoutes(router);
// assignAuthRoutes(router);
// assignEstimateRoutes(router);
// assignOrderRoutes(router);

export default router;
