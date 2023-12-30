import express from 'express';
import dotenv from 'dotenv';

dotenv.config();
const port = process.env.PORT || 5050;
const app = express();

// Body parser
app.use(express.json());

app.use('/openai', require('./routes/openaiRoute'));

app.listen(port, () => {
  console.log(`API listening on ${port}.`);
});
