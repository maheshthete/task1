import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { EmployeeDashboardComponent } from './employee-dashboard.component';
import { EmployeeDashboardRoutingModule } from './employee-dashboard-routing.module';
import { CoreModule } from '../core/core.module';





@NgModule({
  declarations: [
    EmployeeDashboardComponent
  ],
  imports: [
    CommonModule,
    EmployeeDashboardRoutingModule,
    CoreModule
  ]
})
export class EmployeeDashboardModule { }
