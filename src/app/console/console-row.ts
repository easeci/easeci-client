export class ConsoleRow {
    signature: string;
    input: string;
    disabled: boolean;
    type: ConsoleRowType;

    constructor(signature: string, input: string, disabled: boolean, type: ConsoleRowType) {
        this.signature = signature;
        this.input = input;
        this.disabled = disabled;
        this.type = type;
    }
}

export enum ConsoleRowType {
    INTERACT,
    SYSTEM_OUTPUT
}