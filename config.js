const prompt = require('prompt-sync')();
const { uuid } = require('uuidv4');
const fs = require('fs');

const username = prompt('What is the new username? ');
const password = prompt('What is the new password? ');

const str = `USERNAME="${username}"
PASSWORD="${password}"
TOKEN="${uuid()}"`;

console.log(`Configured as:`, `\n${str}`);

let confirmation = prompt('Continue? (Y/N) ').toLowerCase() == 'y' ? true : false;
if (!confirmation)
	console.log('Aborting.');
else {
	let exists = fs.existsSync('.env');
	if (exists) {
		fs.appendFileSync('.env', '\n' + str);
	} else {
		fs.writeFileSync('.env', str);
	}
	console.log('Wrote to .env.');
}
