import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { ParentRoutingModule } from './parent-routing.module';
import { FormsModule } from '@angular/forms';
import { ChildComponent } from './child/child.component';



@NgModule({
  declarations: [
    ParentComponent,
    ChildComponent
  ],
  imports: [
    CommonModule,
    ParentRoutingModule,
    FormsModule
  ]
})
export class ParentModule { }
