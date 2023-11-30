import { readFile, writeFile } from "fs";
import { promisify } from "util";


export const writeFileFS = promisify(writeFile);
export const readFileFS = promisify(readFile);