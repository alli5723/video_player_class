const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const route = express.Router();

app.use(bodyParser.json());

route.get('/', (req, res) => {
  res.send('All Good');
});

app.use(route);

app.listen(process.env.PORT || 3000);
