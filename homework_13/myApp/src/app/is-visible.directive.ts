import { Directive, ElementRef, Renderer2, Input } from '@angular/core';

@Directive({
  selector: '[appIsVisible]'
})
export class IsVisibleDirective {
  @Input('isVisible') isVisible: boolean;
  constructor(private element: ElementRef, private renderer2: Renderer2) {

   }
  ngOnInit() {
    let visablity = (this.isVisible) ? "contents" : "none";
    this.renderer2.setStyle(this.element.nativeElement, "display", visablity);

  }

}
