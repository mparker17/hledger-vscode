import * as fs from 'fs';
import build from './build';
import * as parseArgs from 'minimist';

for (let inFile of parseArgs(process.argv.slice(2))._) {
  let outFile = inFile.substring(0, inFile.length - ".in.hledger".length) + ".want";
  let converted = build(fs.readFileSync(inFile, {encoding:'utf8'}));
  fs.writeFileSync(outFile, converted, {encoding: 'utf8'});
}
