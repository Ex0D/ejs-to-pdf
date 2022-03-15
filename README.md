**THIS REPO IS DEPRECATED**

# EJS to PDF
[![Total alerts](https://img.shields.io/lgtm/alerts/g/Ex0D/ejs-to-pdf.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Ex0D/ejs-to-pdf/alerts/)
[![Language grade: JavaScript](https://img.shields.io/lgtm/grade/javascript/g/Ex0D/ejs-to-pdf.svg?logo=lgtm&logoWidth=18)](https://lgtm.com/projects/g/Ex0D/ejs-to-pdf/context:javascript)

* Node version used : 14.16.1
* NPM version used : 6.14.12

## Install :

* 1 - Download this repo
* 2 - Extract the index.js & package.json & package-lock.json (or copy the code and install the packages)
* 3 - Do an `npm i` in terminal
* 4 - Done

## How to use :

```js
const { ejsToPdf } = require('path_to_index.js');
let data           = require('path_to_data.json');

ejsToPdf("path_of_ejs_file.ejs" , data , "path_for_the_output_file.pdf");
```

*Tips: You can use other databases like MySQL or MongoDB as long as data is passed and not undefined*

## Packages used :
* [EJS](https://www.npmjs.com/package/ejs) - Embedded Javascript template x view engine
* [HTML-PDF](https://www.npmjs.com/package/html-pdf) - Convert HTML to PDF
* FS (alias FileSystem by default on NodeJS)
