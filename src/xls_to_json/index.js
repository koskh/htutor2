const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

const fileName = 'words_v2.xls';

const workbook = xlsx.readFile(path.resolve(__dirname, fileName));
const sheetNameList = workbook.SheetNames;

const content = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);

// console.log(content);

fs.writeFile(path.resolve(__dirname, `${fileName}.json`), JSON.stringify(content), function(err) {
    if (err) throw err;
    console.log('File is created successfully.');
});
