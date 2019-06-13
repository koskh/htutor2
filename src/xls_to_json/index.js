const fs = require('fs');
const path = require('path');
const xlsx = require('xlsx');

const fileName = 'data.js';

const workbook = xlsx.readFile(path.resolve(__dirname, `${fileName}.xls`));
const sheetNameList = workbook.SheetNames;

const words = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNameList[0]]);
const lessons = xlsx.utils.sheet_to_json(workbook.Sheets[sheetNameList[1]]);

// console.log(content);

fs.writeFile(path.resolve(__dirname, `../media/assets/words.json`), JSON.stringify(words), function(err) {
    if (err) throw err;
    console.log('WORDS file is created successfully.');
});
fs.writeFile(path.resolve(__dirname, `../media/assets/lessons.json`), JSON.stringify(lessons), function(err) {
    if (err) throw err;
    console.log('LESSONS file is created successfully.');
});
