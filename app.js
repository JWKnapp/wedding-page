const express = require('express');
const app = express();

app.get('/', (req, res) => res.send('hello world'));

const PORT = 1337;

app.listen(PORT, () => {
  console.log(`app listening in port ${PORT}`);
});
