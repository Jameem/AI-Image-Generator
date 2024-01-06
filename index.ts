import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT || 5050;
const app = express();

app.use(
  cors({
    credentials: true,
    origin: [
      'https://ai-image-jm.netlify.app',
      'https://jazzy-malabi-4b982c.netlify.app',
      'http://localhost:3000',
    ],
  })
);

// Body parser
app.use(express.json());

app.use('/openai', require('./routes/openaiRoute'));

app.listen(port, () => {
  console.log(`API listening on ${port}.`);
});
