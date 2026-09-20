const fs = require('fs');

const file = fs.readFileSync('./src/environments/environment.production.ts', 'utf8');

const lastUpdated = new Date().toISOString();
const content = file.replace('{{LAST_UPDATED}}', lastUpdated);

fs.writeFileSync('./src/environments/environment.production.ts', content);
