import { Directive, ElementRef } from '@angular/core';


@Directive({
  selector: '[appHighlight]'
})
export class HighlightDirective {

  constructor(private el: ElementRef) {            //el: ElementRef is datatype of DOM elements, like input, ht and all oth
     this.el.nativeElement.style.color = 'red';
     this.el.nativeElement.innerHTML= 'We made this changes by innerHTML: '
     console.log(this.el)
  }    
}
