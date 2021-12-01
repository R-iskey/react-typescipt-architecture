import moment from 'moment';
import { isDev } from './utils';

const now = () => moment().format('HH:mm:ss');

export class Logger {
    /* tslint:disable:no-console */
    static debug(...args: any) {
        if (isDev()) {
            Function.apply.call(console.debug, console, [`🛠️ ${now()} ↓`, ...args]);
        }
    }

    static success(message: string) {
        if (isDev()) {
            console.log(`%c✅ ${now()} ${message}`, 'color: green');
            console.log(message);
        }
    }

    static danger(message: string) {
        if (isDev()) {
            console.log(`%c🔥 ${now()} ${message}`, 'color: red; font-style: bold;');
        }
    }

    static info(message: string) {
        if (isDev()) {
            console.log(
                `%cℹ️ ${now()} ${message}`,
                'color: #e0e0e0; font-style: italic',
            );
        }

    }
}
