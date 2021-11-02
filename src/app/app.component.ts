import { BreakpointObserver } from '@angular/cdk/layout';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'my-app';
  showFiller= false;
  isSmall= false;
  constructor(private breakPoint:BreakpointObserver){}

ngOnInit(){
  const screenChanges = this.breakPoint.observe(['(max-width: 800px)']);

  screenChanges.subscribe(observe => {
    this.isSmall = observe.matches
  })
}
}
