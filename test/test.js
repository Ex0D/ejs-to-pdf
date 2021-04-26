const { ejsToPdf } = require('../index');
let data           = require('./data.json');

ejsToPdf(__dirname + "/template.ejs" , data , __dirname + "/out.pdf");
