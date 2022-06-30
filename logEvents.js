import { format } from 'date-fns';
import { v4 as uuid } from 'uuid';
import fsPromises from 'fs/promises';
import path from 'path';
import fs from 'fs';
import { fileURLToPath } from 'url';

const __filename = fileURLToPath(import.meta.url);

const __dirname = path.dirname(__filename);
export const logEvent = async (message) => {
	if (!fs.existsSync(path.join(__dirname, 'logs'))) fs.mkdirSync(path.join(__dirname, 'logs'));
	try {
		const id = `${uuid()}`;
		const date = format(new Date(), 'yyyyMMdd\tHH:mm:ss');
		await fsPromises.appendFile(
			path.join(__dirname, 'logs', 'logs.txt'),
			`${id}\t${message}\t${date}\n`
		);
	} catch (err) {
		console.error(err);
	}
};
