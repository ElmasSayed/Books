const express = require('express');
const chalk = require('chalk');
// const debug = require('debug')('app');
const morgan = require('morgan');
const path = require('path');


const app = express();
const port = process.env.PORT || 3000;

app.use(morgan('tiny'));
// for static bootstrap-lesson: static files
app.use(express.static(path.join(__dirname, '/public/')));
app.use('/css', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/css')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/bootstrap/dist/js')));
app.use('/js', express.static(path.join(__dirname, '/node_modules/jquery/dist')));
app.set('views', './src/views');
app.set('view engine', 'ejs');

// ============================================================
app.get('/', (req, res) => {
  res.render(
   'index', 
    { 
        nav: ['Books', 'Authors', 'Contact us', 'Find Here', 'Read Online' ], 
        title: 'Library' 
    }
  );
});


app.listen(port, () => {
  console.log(`Listening on port ${chalk.green('port')}`);
});
