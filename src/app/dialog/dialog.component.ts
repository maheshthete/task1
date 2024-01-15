import { Component, Inject, inject, OnInit } from '@angular/core';
import { FormGroup , FormBuilder , Validators } from '@angular/forms';
import { EmployeeService } from '../service/employee.service';
import { MatDialogRef , MAT_DIALOG_DATA } from '@angular/material/dialog';

@Component({
  selector: 'app-dialog',
  templateUrl: './dialog.component.html',
  styleUrls: ['./dialog.component.scss']
})
export class DialogComponent implements OnInit {

  actionBtn: string = 'Save';

  empForm !: FormGroup

  constructor(private formBuilder: FormBuilder , 
    private api : EmployeeService , 
    @Inject(MAT_DIALOG_DATA) public editdata :any,
    private dialogRef : MatDialogRef<DialogComponent> 
    ) { }

  ngOnInit(): void {
    this.empForm = this.formBuilder.group({
      empName: ['' ,Validators.required],
      empDeppt: ['' ,Validators.required],
      empDateJ: ['' ,Validators.required],
      empsalary: ['' ,Validators.required],
      email: ['' , Validators.required]
    })

    if(this.editdata){
      this.actionBtn = 'Update';
      this.empForm.controls['empName'].setValue(this.editdata.empName);
      this.empForm.controls['empDeppt'].setValue(this.editdata.empDeppt);
      this.empForm.controls['empDateJ'].setValue(this.editdata.empDateJ);
      this.empForm.controls['empsalary'].setValue(this.editdata.empsalary);
      this.empForm.controls['email'].setValue(this.editdata.email);
    }


  }
/////////add emp
  addemp(){
   if(!this.editdata){
    if(this.empForm.valid){
      this.api.addEmployee(this.empForm.value)
      .subscribe({
        next:(res)=>{
          alert("Employee added Successfully!!");
          this.empForm.reset();
          this.dialogRef.close('save');
        },
        error: ()=>{
          alert("Error")
        }
      })
    }
   }else{
    this.updateProduct()
   }
  }



  
/////////////edit emp
updateProduct(){
  this.api.putEmployee(this.empForm.value , this.editdata.id)
  .subscribe({
    next:(res)=>{
      alert("Employee updated Successfully!");
      this.empForm.reset();
      this.dialogRef.close('update');
    },
    error:()=>{
      alert("Error")
    }
  })
}
}
