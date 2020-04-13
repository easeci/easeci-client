import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { ConsoleRow, ConsoleRowType } from './console-row';
import { CommandsContext } from './commands';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.less']
})
export class ConsoleComponent implements OnInit {

  commandsContext = new CommandsContext();

  isConsoleShowed = true;
  prompt = 'easeci@127.0.0.1:/$';
  history: ConsoleRow[] = [];
  maxLineDisplaySize: number = 5;

  @ViewChild('consoleInput', undefined) consoleInput: ElementRef<HTMLElement>;

  constructor() {
    this.history.push(this.introduceMessage());
    this.history.push(this.emptyInteract());
  }

  ngOnInit(): void {
  }

  changeConsoleState() {
    this.isConsoleShowed = !this.isConsoleShowed;
  }

  inputSubmit(index: number, input: string) {
    this.history[index].disabled = true;

    if (this.history.length >= this.maxLineDisplaySize) {
      this.history.shift();
    }

    var consoleRow = this.emptyInteract();
    this.history.push(consoleRow);

    var command = this.commandsContext.getCommand(input);
    if (command != undefined) {
      command.executeWith(this.history);
    }
    return false;
  }

  displayRowMode(type: ConsoleRowType) {
    if (type == ConsoleRowType.INTERACT) {
      return 0;
    }
    if (type == ConsoleRowType.SYSTEM_OUTPUT) {
      return 1;
    }
    return 0;
  }

  autoscale(text: string) {
    const standardHeight = 20;
    let lines = Math.floor(text.length / 76);
    if (lines > 0) {
      this.consoleInput.nativeElement.style.height = (standardHeight * (lines + 1)) + 'px';
    }
  }

  private emptyInteract(): ConsoleRow {
    return new ConsoleRow(this.prompt, '', false, ConsoleRowType.INTERACT);
  }

  private introduceMessage(): ConsoleRow {
    return new ConsoleRow(
      this.prompt, 
      'Welcome in EaseCI Client terminal, type `help` to display informationa about console features and commands', 
      true, 
      ConsoleRowType.SYSTEM_OUTPUT
    );
  }
}
