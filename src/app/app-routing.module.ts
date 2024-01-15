import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from './guards/auth.guard';
import { BlankComponent } from './layouts/blank/blank.component';
import { FullComponent } from './layouts/full/full.component';
import { LoginComponent } from './login/login.component';
const routes: Routes = [
  {
    path:'',
    component: BlankComponent,
    children: [
      {
        path:'login',
        //component: LoginComponent,
        loadChildren: () =>import('./login/login.module').then(x => x.LoginModule)
        //canActivate: [AuthGuard]
      },
      {
        path:'signUp',
        loadChildren: () =>import('./sign-up/sign-up.module').then(x => x.SignUpModule)
      },
    ]
  },
  {
    path:'',
    component: FullComponent,
    canActivateChild: [AuthGuard],
    children: [
      {
        path:'EmployeeDashboard',
        //component:SettingsComponent
        loadChildren: () =>import('./employee-dashboard/employee-dashboard.module').then(x => x.EmployeeDashboardModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
