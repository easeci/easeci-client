import { emptyInteract } from './utils';

export class CommandsContext {
    commandList: Record<string, Command> = { 
        'clean': new CleanOutput() 
    };

    getCommand(name: string) {
        return this.commandList[name];
    }
}

export interface Command {
    execute(): void;
    executeWith(arg: any): any;
}

export class CleanOutput implements Command {
    execute(): void {
        throw new Error("Method not implemented.");
    }
    executeWith(arg: any): any {
        while (arg.length > 0) {
            arg.pop();
        }
        arg.push(emptyInteract());
        return arg;
    }
}