import { loginHandler } from '../../handlers/auth-handlers.js';
import {
  postUserHandler
} from '../../handlers/user-handlers.js';

const assignUserRoutes = (router) => {
  const USERS_API_PREFIX = '/user';
  // router.get('/profile', getCurrentUserHandler);

  router.post(`${USERS_API_PREFIX}/register`, postUserHandler);
  router.post(`${USERS_API_PREFIX}/login`, loginHandler);


  
  // router.put(`${USERS_API_PREFIX}/:id`, authMiddleware, putUserSchema, putUserHandler);
  // router.patch(`${USERS_API_PREFIX}/:id`, authMiddleware, patchUserSchema, patchUserHandler);
  // router.delete(`${USERS_API_PREFIX}/:id`, authMiddleware, deleteUserSchema, deleteUserHandler);
  // router.get(`${USERS_API_PREFIX}`, authMiddleware, getUsersSchema, getUsersHandler);
};

export default assignUserRoutes;