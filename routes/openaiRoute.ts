import express from 'express';
import { generateImage, validate } from '../controllers/openaiController';

const router = express.Router();

router.post('/generateimage', validate, generateImage);

module.exports = router;
