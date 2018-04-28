import { Directive, Input, Renderer, ElementRef } from '@angular/core';


@Directive({
  selector: '[autohide]', // Attribute selector
  host: {
    '(ionScroll)': 'onContentScroll($event)'
  }
})

export class AutohideDirective {

  @Input("header") header: HTMLElement;
  headerHeight;
  scrollContent;

  constructor(private renderer: Renderer, private element: ElementRef) {

  }

 ngOnInit(){
    this.headerHeight = this.header.clientHeight;
    this.renderer.setElementStyle(this.header, 'webkitTransition', 'top 700ms');
    this.scrollContent = this.element.nativeElement.getElementsByClassName("scroll-content")[0];
    this.renderer.setElementStyle(this.scrollContent, 'webkitTransition', 'margin-top 700ms');
  }

  onContentScroll(event){
    if(event.scrollTop > 56){
      this.renderer.setElementStyle(this.header, "top", "-56px")
      this.renderer.setElementStyle(this.scrollContent, "margin-top", "0px")
    } else {
      this.renderer.setElementStyle(this.header, "top", "0px");
      this.renderer.setElementStyle(this.scrollContent, "margin-top", "0px")
    }
  }

}
