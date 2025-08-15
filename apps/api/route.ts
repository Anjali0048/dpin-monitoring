import express from 'express';
import { authMiddleware } from './middleware';
import { deleteWebsite, getWebsites, getWebsiteStatus, postWebsite } from './controller';

const router = express.Router();

router.use(authMiddleware)

router.post('/website', postWebsite)
router.get('/website/status', getWebsiteStatus)
router.get('/websites', getWebsites)
router.delete('/website', deleteWebsite)

export default router;