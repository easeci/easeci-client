import { ConsoleRow, ConsoleRowType } from './console-row';

export let prompt = 'easeci@127.0.0.1:/$';

export function emptyInteract(): ConsoleRow {
    return new ConsoleRow(prompt, '', false, ConsoleRowType.INTERACT);
}