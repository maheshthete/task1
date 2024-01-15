import { Component, OnInit , ViewChild} from '@angular/core';
import {MatDialog, MAT_DIALOG_DATA} from '@angular/material/dialog';
import { DialogComponent } from '../dialog/dialog.component';
import { EmployeeService } from '../service/employee.service';
import {MatPaginator} from '@angular/material/paginator';
import {MatSort} from '@angular/material/sort';
import {MatTableDataSource} from '@angular/material/table';

@Component({
  selector: 'app-employee-dashboard',
  templateUrl: './employee-dashboard.component.html',
  styleUrls: ['./employee-dashboard.component.scss']
})
export class EmployeeDashboardComponent implements OnInit {

  displayedColumns: string[] = ['empName', 'empDeppt', 'empDateJ', 'empsalary' , 'email' , 'action'];
  dataSource: MatTableDataSource<any>;

  @ViewChild(MatPaginator) paginator: MatPaginator;
  @ViewChild(MatSort) sort: MatSort;

  constructor(private dialog: MatDialog , private api : EmployeeService) { }

  ngOnInit(): void {
    this.getAllEmp();
  }

  openDialog() {
    this.dialog.open(DialogComponent, {
      width:'30%'
    }).afterClosed().subscribe(val=>{
      if( val === 'save'){
        this.getAllEmp();
      }
    })
  }
  
  getAllEmp(){
   this.api.getEmployees()
   .subscribe({
    next:(res)=>{
      this.dataSource= new MatTableDataSource(res);
      this.dataSource.paginator = this.paginator;
      this.dataSource.sort = this.sort;
    }, error:()=>{
      alert("Error")
    }
   })
  }


  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.dataSource.filter = filterValue.trim().toLowerCase();

    if (this.dataSource.paginator) {
      this.dataSource.paginator.firstPage();
    }
  }

  editEmp(row: any){
    this.dialog.open(DialogComponent, {
      width: '30%',
      data: row
    }).afterClosed().subscribe(val =>{
      if(val==='update'){
        this.getAllEmp();
      }
    })
  }

  deleteEmp(id:number){
    this.api.deleteEmployee(id)
    .subscribe({
      next:(res)=>{
        alert("Deleted Successfully!")
        this.getAllEmp();
      }, error:()=>{
        alert("Error!!")
      }
    })
  }



}
