import { Directive, ElementRef, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
  standalone: true,
})
export class HighlightDirective {
  constructor(private elementRef: ElementRef) { }
  @HostBinding('style.backgroundColor')
    bgcolor = 'inherit'

  @HostListener('mouseenter')
  onMouseEnter() {
    this.bgcolor = 'red';
  }

  @HostListener('mouseleave')
  onMouseLeave() {
    this.bgcolor = 'inherit';
  }
}
