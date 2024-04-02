// routes.js

import express from 'express';
import { getAllAdminRoles } from '../controllers/adminroleController.js';
import { getAllBanks, createBank } from '../controllers/bankController.js';

const adminRoleRouter = express.Router();
const getbankRouter = express.Router();
const createBankRouter = express.Router();


adminRoleRouter.get('/', getAllAdminRoles);
getbankRouter.get('/', getAllBanks);
// Route for creating a bank
createBankRouter.post('/', createBank);

export { adminRoleRouter, getbankRouter, createBankRouter };
