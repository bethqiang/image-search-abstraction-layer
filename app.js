const express = require('express');
const app = express();
const morgan = require('morgan');
const path = require('path');
const chalk = require('chalk');

app.use(morgan('dev'));
app.use(express.static(path.join(__dirname, './public')));

app.use(require('./routes'));

const models = require('./models');

const port = process.env.PORT || 8080;
app.listen(port, () => {
  console.log(chalk.blue(`Contact from intelligent life received on port ${port}`));
});

app.use('/', (err, req, res, next) => {
  console.log(chalk.red('Houston, we have a problem.'));
  console.log(chalk.red(`ERROR: ${err.message}`));
  res.sendStatus(err.status || 500);
});
