import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HighlightDirective } from './directives/highlight.directive';
import { Highlight2Directive } from './directives/highlight-2.directive';
import { RupeePipe } from './pipes/rupee.pipe';
import { PurePipe } from './pipes/pure.pipe';
import { ImpurePipe } from './pipes/impure.pipe';
import { MaterialModule } from './material/material.module';
import { ConfirmationComponent } from './dialog/confirmation/confirmation.component';
import { FlexLayoutModule } from '@angular/flex-layout';


const directives_components_pipes = [
  HighlightDirective,
  Highlight2Directive,
  RupeePipe, 
  PurePipe,
  ImpurePipe,
  
]
 
const modules = [
  CommonModule,
  MaterialModule,
  FlexLayoutModule
]

const dialog = [
  ConfirmationComponent
]

@NgModule({
  declarations: [
    ...directives_components_pipes,
    ...dialog,
    
   
         // ...(this 3 dots means spread operator using which we can copy array.)
  ],
  exports: [
    ...directives_components_pipes ,
    ...modules,
    ...dialog
  ],                                  //export so can other can use our custom directive
  imports: [
    ...modules
  ],
  entryComponents:[
   ...dialog
  ]
  
})
export class CoreModule { }

/* How to make comment library-
1. right click on app- click on open in integrated terminal
2. made ng g m core(any name) - made core module
3. right click on core, and create New folder, which names directives(any name)
4. now you can use this common libraby in any component
 */