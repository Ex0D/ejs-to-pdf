# EJS to PDF
* Node version : 14.16.1
* NPM version : 6.14.12

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

# WARNING :
A vulnerability is detected on the html-pdf package ([Arbitrary File Read](https://npmjs.com/advisories/1095)), to avoid this, I use the phantomArgs option: 
```js
["--local-url-access=false"]
```
as said on the html-pdf repo ([this issue exactly](https://github.com/marcbachmann/node-html-pdf/issues/530))

In the html-pdf package, the argument is already defined by default but it is recommended to use an Object phantomArgs to pass it in the options when creating the PDF file
