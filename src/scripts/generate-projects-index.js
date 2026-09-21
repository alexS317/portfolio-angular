const fs = require('fs');

const dir = 'public/content/projects';
const orderFile = dir + '/order.json';

const files = fs.readdirSync(dir).filter(file => file.endsWith('.md'));

let order = [];
try {
  order = JSON.parse(fs.readFileSync(orderFile, 'utf8')).order;
} catch {
  console.warn('No order.json found.');
}

const slugOf = file => file.replace(/\.[a-z]{2}\.md$/, '');
const position = new Map(order.map((slug, i) => [slug, i]));
const lastIndex = Number.MAX_SAFE_INTEGER;

files.sort(
  (a, b) =>
    (position.get(slugOf(a)) ?? lastIndex) - (position.get(slugOf(b)) ?? lastIndex) ||
    a.localeCompare(b),
);

fs.writeFileSync(`${dir}/index.json`, JSON.stringify(files, null, 2));
