const {writeFileSync, mkdirSync} = require('fs');
require('dotenv').config({ quiet: true });


const targetPath = './src/environments/environment.ts';
const targetPathDev = './src/environments/environment.development.ts';

const apiBaseUrl = process.env.API_URL?.trim();

if(!apiBaseUrl){
    throw new Error('API_URL is not set');
}


const envFileContent = `

export const environment = {
    apiBaseUrl: "${apiBaseUrl}"
};

`


mkdirSync('./src/environments', { recursive: true });

writeFileSync(targetPath, envFileContent);
writeFileSync(targetPathDev, envFileContent);