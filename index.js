const fs = require('fs'),
ejs      = require('ejs'),
pdf      = require('html-pdf');

/**
 * Transforms the given EJS file into html by passing the datas into the function
 * @param {String} ejsFile Path of the ejs file in order to convert it to HTML
 * @param {Object} data Data to be passed
 * @private
 */
function renderEjs(ejsFile , data) 
{
    return new Promise((resolve , reject) => 
    {
        fs.readFile(ejsFile , 'utf8' , (err , res) => 
        {
            if(err) { reject(err); }
            else
            {
                resolve(ejs.render(res , data));
            }
        });
    });
}

/**
 * convert HTML into PDF
 * @param {String} file Path of the HTML file (formerly EJS) 
 * @param {Object} opt Options to use (Browser used: phantomJS)
 * @param {String} output The output file ("out.pdf")
 * @private 
 */
function convertIntoPDF(file , opt , output) 
{
    return new Promise((resolve , reject) =>
    {
        pdf.create(file , opt).toFile(output , (err , res) => 
        {
            if(err) { reject(err); }
            else
            {
                resolve(res);
            }
        });
    });
}

/**
 * Convert EJS file into PDF
 * @param {String} ejsFile The current EJS file to convert into PDF
 * @param {Object} data Data to pass into the document
 * @param {String} output The file output ("out.pdf")
 * @public
 */
function ejsToPdf(ejsFile , data , output) 
{
    return new Promise((resolve , reject) => 
    {
        renderEjs(ejsFile , data).then((file) =>
        {
            resolve(convertIntoPDF(file , { format: "Letter"} , output))
            .then((res) => 
            {
                console.log(res);
            })
            .catch(err => 
            {
                reject(err);
            });
        })
        .catch(err => 
        {
            reject(err);
        });
    });
}

module.exports = { ejsToPdf: ejsToPdf };
