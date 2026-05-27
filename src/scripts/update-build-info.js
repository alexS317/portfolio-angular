const fs = require('fs');

const buildDate = new Date().toISOString();

const content = `export const buildInfo = { lastUpdated: '${buildDate}' };`;

fs.writeFileSync('./src/environments/build-info.ts', content);
