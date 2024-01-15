import { NgModule } from '@angular/core';
import { CommonModule, DatePipe } from '@angular/common';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatStepperModule} from '@angular/material/stepper';
import {MatAutocompleteModule} from '@angular/material/autocomplete';
import {MatGridListModule} from '@angular/material/grid-list';
import {MatTableModule} from '@angular/material/table';
import {MatDialogModule} from '@angular/material/dialog';
import {MatBadgeModule} from '@angular/material/badge';
import {MatButtonModule} from '@angular/material/button';
import {MatIconModule } from '@angular/material/icon';
import {MatCardModule} from '@angular/material/card';
import {MatExpansionModule} from '@angular/material/expansion';
import { MatNativeDateModule } from '@angular/material/core';
import {MatDatepickerModule} from '@angular/material/datepicker';  //imp for expanssion
import {MatFormFieldModule} from '@angular/material/form-field';
import { MatSelectModule } from '@angular/material/select';
import {MatInputModule} from '@angular/material/input';
import {MatMenuModule} from '@angular/material/menu';
import { ReactiveFormsModule } from '@angular/forms';
import {MatToolbarModule} from '@angular/material/toolbar';
import {MatPaginatorModule} from '@angular/material/paginator';
import { MatSortModule } from '@angular/material/sort';






const module =[
  CommonModule,
  MatCheckboxModule,
  MatStepperModule,
  MatAutocompleteModule,
  MatGridListModule,
  MatTableModule,
  MatDialogModule,
  MatBadgeModule,
  MatButtonModule,
  MatIconModule,
  MatCardModule,
  MatExpansionModule,
  MatNativeDateModule,
  MatDatepickerModule,
  MatFormFieldModule,
  MatSelectModule,
  MatIconModule,
  MatInputModule,
  MatMenuModule,
  ReactiveFormsModule,
  MatIconModule,
  MatToolbarModule,
  MatButtonModule,
  MatPaginatorModule,
  MatSortModule



]

@NgModule({
  declarations: [],
  imports: [
    ...module
  ],
  exports: [
    ...module
  ]
})
export class MaterialModule { }            //add this module in core to link this material with core
