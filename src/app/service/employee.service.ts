import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EmployeeService {

  constructor(private http: HttpClient ) { }

  //http call

  getEmployees(): Observable<any>{
    const url = 'http://localhost:3000/employees/';
    return this.http.get(url).pipe(
      map(res => {
        return res;
      })
    )
  }
  // post
  addEmployee(employee:any): Observable<any>{
    const url = 'http://localhost:3000/employees/';
    return this.http.post(url, employee).pipe(
      map(res => {
        return res;
      })
    )
  }
  //Put
  putEmployee(employee:any, id:number){
  return this.http.put<any>('http://localhost:3000/employees/'+id , employee)
  }
  //delete
  deleteEmployee(id:number){
    const url = 'http://localhost:3000/employees/';
    return this.http.delete(url+id).pipe(
      map(
        (res => {
        return res;
      }))
    )
  }



}
