import { BaseException } from './base.exception';

export type FieldException = {
    field: string;
    value: string;
    pattern?: string;
    message: string;
}

export class InvalidFieldsException extends BaseException<FieldException[]> {
    constructor(fields: FieldException[]) {
        super('Invalid Fields Provided', fields);
    }
}
