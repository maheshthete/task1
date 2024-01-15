import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { RouterModule, Routes } from '@angular/router';



const routes : Routes =[
  {
    path:"",
    component:EmployeeDashboardComponent
  }
  
  ]
  
  @NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
  })
export class EmployeeDashboardRoutingModule { }
