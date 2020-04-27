import { Component, OnInit, ViewChild } from '@angular/core';
import { ConsoleComponent } from '../console/console.component';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.less']
})
export class DashboardComponent implements OnInit {
  consoleDisplay = true;

  @ViewChild(ConsoleComponent, undefined) 
  console: ConsoleComponent;

  constructor() { }

  ngOnInit() {
    this.console.isConsoleShowed = false;
  }

  showConsole() {
    this.consoleDisplay = !this.consoleDisplay;
  }

}
