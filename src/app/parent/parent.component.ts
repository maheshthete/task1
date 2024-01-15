import { AfterContentChecked, AfterContentInit, AfterViewChecked, AfterViewInit, Component, DoCheck, OnChanges, OnDestroy, OnInit, QueryList, SimpleChanges, ViewChild, ViewChildren } from '@angular/core';
import { ChildComponent } from './child/child.component';

@Component({
  selector: 'app-parent',
  templateUrl: './parent.component.html',
  styleUrls: ['./parent.component.scss']
})
export class ParentComponent implements OnChanges, OnInit, DoCheck, AfterContentInit, AfterContentChecked, AfterViewInit, AfterViewChecked, OnDestroy {

  constructor() {
    console.log('Parent Constructor');
   }
  
  @ViewChild(ChildComponent, {static: true}) childRef: ChildComponent;
  @ViewChildren(ChildComponent) multipleRef: QueryList<ChildComponent>;

  parentVar: string = 'parent data';
  //parentVar2: string = 'we are changing child variable';
  //parentVar3: string = 'Parent Swati Bajode';

  valueReceivedFromChild: string ='Hello from child component';

  ngOnInit(): void {

    this.childRef.varChild ='Hello from Parent';

    console.log('Parent OnInit')
  }
  ngOnChanges(changes: SimpleChanges): void {
    console.log('Parent OnChanges');
  }
  ngDoCheck(): void {
    console.log('Parent DoCheck');
  }
  ngAfterContentInit(): void {
    console.log('Parent AfterContentInit');
  }
  ngAfterContentChecked(): void {
    console.log('Parent AfterContentChecked');
  }
  ngAfterViewInit(): void {
    
    var count = 1;
    this.multipleRef.forEach(x => {
      x.varChild = 'Multi Hi from parent' + count;
      count++ ;
    })
    
    console.log('Parent AfterViewInit');
  }
  ngAfterViewChecked(): void {
    console.log('Parent AfterViewChecked');
  }
  ngOnDestroy(): void {
    console.log('Parent OnDestroy');
  }

  parentMethod(Event: any){
    this.valueReceivedFromChild = Event;
  }

}
