
const fs = require('fs');
const json2csv = require('json2csv');
const fileSize = 10000000;
const chunkSize = fileSize / 100; //speed goes up the smaller the chunk size, but speed seems to slow down after 100-1000 (takes about ~15s)

let currentChunk = [];

let getRandEntry = function(){
  return 3 + Math.floor(Math.random() * 4);
}
let getUrls = function(){
  let amount = getRandEntry();
  let result = [];
  for(let x = 0; x < amount; x++){
    //no longer using whole url, just the number this save a lot of time and space
    result.push(Math.floor(Math.random() * 1000));
  }
  return result;
}

///`https://sdc3-pele.s3-us-west-1.amazonaws.com/photo${Math.floor(Math.random() * 1000)}.jpeg`


let firstEntry = {url: getUrls()};


let csv = json2csv.parse(firstEntry);
let csvWithEndingCommas;

if (fs.existsSync('data.csv')) {
  fs.unlinkSync('data.csv');
}

fs.appendFileSync('data.csv', csv);
fs.appendFileSync('data.csv', ',\n');

for (let x = 1; x <= fileSize; x++) {
  currentChunk.push({ url: getUrls() });
  if (x % chunkSize === 0) {
    csv = json2csv.parse(currentChunk, { header: false });
    csvWithEndingCommas = csv.replace(/\n/g, ',\n');
    fs.appendFileSync('data.csv',  csvWithEndingCommas);
    console.log((x / chunkSize) + '% done!');
    if (x !== fileSize) fs.appendFileSync('data.csv', ',\n');
    currentChunk = [];
  }
}

