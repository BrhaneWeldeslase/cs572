import { Directive, ElementRef, Renderer2, HostListener } from '@angular/core';
import { createUrlResolverWithoutPackagePrefix } from '@angular/compiler';

@Directive({
  selector: '[appMakeBigger]'
})
export class MakeBiggerDirective {

  constructor(private element:ElementRef,private renderer2:Renderer2) { }
  @HostListener('click') click(){
    let newSize=parseInt( this.element.nativeElement.style.fontSize)+2;
    this.renderer2.setStyle(this.element.nativeElement,'font-size',newSize+'px')
  }

}
