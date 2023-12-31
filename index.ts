import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';

dotenv.config();
const port = process.env.PORT || 5050;
const app = express();

app.use(
  cors({
    credentials: true,
    origin: ['https://jazzy-malabi-4b982c.netlify.app'],
  })
);

// Body parser
app.use(express.json());

app.use('/openai', require('./routes/openaiRoute'));

app.listen(port, () => {
  console.log(`API listening on ${port}.`);
});
