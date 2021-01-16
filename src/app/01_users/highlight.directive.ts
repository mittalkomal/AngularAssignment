import { Directive, HostBinding, HostListener } from '@angular/core';

@Directive({
  selector: '[emailHighlight]',
})
export class HighlightDirective {
  private isHighlighted = false;
  constructor() {}

  @HostBinding('class.highlight')
  get shouldHighlight() {
    return this.isHighlighted;
  }

  @HostListener('mouseover')
  onMouseOver() {
    this.isHighlighted = true;
  }

  @HostListener('mouseout')
  onMouseOut() {
    this.isHighlighted = false;
  }
}
