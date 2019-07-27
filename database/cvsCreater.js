
const fs = require('fs');
const json2csv = require('json2csv');
const fileSize = 10000000;
const chunkSize = fileSize / 10;

let currentChunk = [];
let firstEntry = {url: `https://sdc3-pele.s3-us-west-1.amazonaws.com/photo${Math.floor(Math.random() * 1000)}.jpeg`};
let csv = json2csv.parse(firstEntry);
let csvWithEndingCommas;

if (fs.existsSync('data.csv')) {
  fs.unlinkSync('data.csv');
}

fs.appendFileSync('data.csv', csv);
fs.appendFileSync('data.csv', ',\n');


for (let x = 1; x <= fileSize; x++) {
  currentChunk.push({url: `https://sdc3-pele.s3-us-west-1.amazonaws.com/photo${Math.floor(Math.random() * 1000)}.jpeg`});
  if (x % chunkSize === 0) {
    csv = json2csv.parse(currentChunk, { header: false });
    csvWithEndingCommas = csv.replace(/\n/g, ',\n');
    fs.appendFileSync('data.csv',  csvWithEndingCommas);
    console.log((x * 10 / chunkSize) + '% done!');
    if (x !== fileSize) fs.appendFileSync('data.csv', ',\n');
    currentChunk = [];
  }
}

