import * as express from 'express';

const app = express();

const PORT = 8080;

app.get('/', (req, res) => {
  res.send('Send sucess');
});

app.listen(PORT, () => {
  console.log(`Server running at ${PORT}`);
});