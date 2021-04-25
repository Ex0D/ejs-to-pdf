const { ejsToPdf } = require('../index');
let data           = require('./data.json');

ejsToPdf("./template.ejs" , data , "./out.pdf");