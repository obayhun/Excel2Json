'use strict';
const excelToJson = require('convert-excel-to-json');
var json2xls = require('json2xls');
const fs = require('fs');

const result = excelToJson({
    sourceFile: 'testFile.xls',
    header:{
        rows: 1
    },
   
    columnToKey: {
        A: 'device id',
        B: 'appuuid'
    }
});

console.log(result[Object.keys(result)[0]] );

var xls = json2xls(result[Object.keys(result)[0]]);

fs.writeFileSync('data.xlsx', xls, 'binary');