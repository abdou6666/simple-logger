import EventEmiter from 'events';
import { logEvent } from './logEvents.js';
class LogsEmitter extends EventEmiter {}

const logsEmitter = new LogsEmitter();

logsEmitter.on('logs', (msg) => logEvent(msg));

setTimeout(() => {
	logsEmitter.emit('logs', 'log event emited');
}, 2000);
