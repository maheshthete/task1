import { Component, OnInit } from '@angular/core';
import { Menu } from 'src/app/model/menu';


@Component({
  selector: 'app-full',
  templateUrl: './full.component.html',
  styleUrls: ['./full.component.scss']
})
export class FullComponent implements OnInit {
  
  menu: Menu[] = [];

  constructor() { }

  ngOnInit(): void {
    this.menu = [
    /* {
      path: 'login',        
      name: 'Login',
      },
      {
        path: 'signUp',        
        name: 'signUp',
        },*/
      {
        path: 'EmployeeDashboard',        
        name: 'EmployeeDashboard',
        }
    ]
  }

}
