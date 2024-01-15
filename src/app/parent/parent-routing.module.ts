import {Component, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ParentComponent } from './parent.component';
import { RouterModule, Routes } from '@angular/router';

const routes : Routes =[
  {
    path:'' ,  //path aapan blank thevla karan already aapan app.routing.module.ts la path dila aahe.
    component: ParentComponent
  }
]

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class ParentRoutingModule { }
