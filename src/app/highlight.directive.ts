
import { Directive, ElementRef, HostListener, Input,  Renderer2 } from '@angular/core';

@Directive({
  selector: '[appHighlight]',
})
export class HighlightDirective {
  @Input() appHighlight?:string ;
  @Input() size!:string;
  constructor(private el:ElementRef,
    private renderer:Renderer2
    ){

  }
  
  @HostListener('mouseenter') onMouseEnter(){
    console.log(this.appHighlight)
    this.highlight(this.appHighlight || 'yellow',this.size)
  }
  @HostListener('mouseleave') onMouseLeave(){
    this.highlight(null,null)
  }
  highlight(color:string|null,size:string |null){
   this.renderer.setStyle(this.el.nativeElement,'color',color)
  this.renderer.setStyle(this.el.nativeElement,'font-size',size)
  
  }
}
