import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-console',
  templateUrl: './console.component.html',
  styleUrls: ['./console.component.less']
})
export class ConsoleComponent implements OnInit {

  isConsoleShowed = false;
  prompt = 'easeci@127.0.0.1:/$';
  history = [];

  constructor() {
    this.history.push({ signature: this.prompt, input: '', disabled: false});
  }
  ngOnInit(): void {
  }

  changeConsoleState() {
    this.isConsoleShowed = !this.isConsoleShowed;
  }

  specialKeyCheck(index) {
    this.history[index].disabled = true;
    this.history.push({ signature: this.prompt, input: ''});
    return false;
  }

}
