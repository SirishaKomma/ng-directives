import { Directive, HostListener, TemplateRef ,Input, Renderer2, ElementRef, HOST_TAG_NAME, HostBinding} from '@angular/core';
import { GlobalOverlayService } from './global-overlay.service';
@Directive({
  selector: '[appTooltip]'
})
export class TooltipDirective {
@Input() appTooltipText='';
@HostBinding('class.is-highlighted') isHighlighted :boolean=false;
private tooltipElement?:HTMLElement |null;
  constructor(private renderer:Renderer2,
    private el:ElementRef,private overlayServce:GlobalOverlayService) { }
@HostListener('mouseenter') onMouseEnter(){
  console.log('www')
this.tooltipElement = this.renderer.createElement('div');
this.renderer.addClass(this.tooltipElement,'add-tooltip');
this.renderer.setProperty(this.tooltipElement,'innerText','this is a tooltip on hover')
const hostRect=this.el.nativeElement.getBoundingClientRect();
this.renderer.appendChild(document.body,this.tooltipElement);
console.log(this.tooltipElement)
this.renderer.setStyle(this.tooltipElement, 'position', 'absolute');
      this.renderer.setStyle(this.tooltipElement, 'left', `${this.el.nativeElement.offsetLeft + 10}px`);
      this.renderer.setStyle(this.tooltipElement, 'top', `${this.el.nativeElement.offsetTop + this.el.nativeElement.offsetHeight + 10}px`)
this.renderer.setStyle(this.tooltipElement,'border','1px solid blue')
      //this.overlayServce.showTooltip(this.tooltipElement,hostRect)
}
@HostListener('mouseleave') onMouseLeave(){
//this.overlayServce.hideTooltip(this.tooltipElement);
//this.tooltipElement=null;
this.renderer.removeChild(document.body,this.tooltipElement)
}
}
