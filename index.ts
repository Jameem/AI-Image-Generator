import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT || 5050;
const app = express();

const allowedOrigins = [
  'https://jazzy-malabi-4b982c.netlify.app/',
  'http://localhost:3000',
];
app.use(cors({ credentials: true, origin: allowedOrigins }));

// Body parser
app.use(express.json());

app.use('/openai', require('./routes/openaiRoute'));

app.listen(port, () => {
  console.log(`API listening on ${port}.`);
});
