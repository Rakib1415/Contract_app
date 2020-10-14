const express = require('express');
const app = express();
const morgan = require('morgan');
const router = require('./contractRouter');
// const bodyParser = require('body-parser');


app.use(morgan('dev'));

// app.use(bodyParser.json());
app.use(express.urlencoded({extended : true}));
app.use(express.json());

app.use('/contracts', router);

app.get('/', (req, res) =>{
    res.send('<h1>please enter right url</h1>');
})

const PORT = process.env.PORT || 8080;
app.listen(PORT, () => console.log(`Server is running on PORT ${PORT}`));