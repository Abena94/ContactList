import express from 'express';

import { getContacts,createContact} from '../controllers/contact.js';
const router = express.Router();

router.get('/',getContacts);
router.post('/',createContact);
/*router.get('/:id',getContact);
router.patch('/:id',editContact);
router.delete('/:id',deleteContact)*/



export default router;