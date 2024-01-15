import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, EventEmitter, Input, OnChanges, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss']
})
export class ChildComponent implements OnInit, OnChanges,DoCheck, AfterContentInit, AfterContentChecked , AfterViewInit, AfterViewChecked {

  constructor() {
    console.log('Child Constructor');
   }
 
 

  @Input() varChild: string = 'child-data';
 // @Input() varChild11: number = 9284006880;
  //@Input() varChild22: string = 'Child Swati bajode '; 

  @Output() childevent: EventEmitter<string> = new EventEmitter<string>();


  ngOnInit(): void {
    this.childevent.emit('Hello!! This is from child component.');

    console.log('child oninit')
  }
  ngOnChanges(changes: import('@angular/core').SimpleChanges): void {
    console.log('child ngOnChanges')
  }
  ngDoCheck(): void {
    console.log('child ngOnChanges')
  }
  ngAfterContentInit(): void {
    console.log('child ngAfterContentInit')
  }
  ngAfterContentChecked(): void {
    console.log('child ngAfterContentChecked')
  }
  ngAfterViewInit(): void {
    console.log('child ngAfterViewInit')
  }
  ngAfterViewChecked(): void {
    console.log('child   ngAfterViewChecked')
  }

}
