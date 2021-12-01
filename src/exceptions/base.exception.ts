export class BaseException<T> extends Error {
    details: T | null = null;

    constructor(message: string, details?: T) {
        super(message);
        if (details) {
            this.details = details;
        }
    }
}
