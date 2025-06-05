import { ElementRef, inject, Pipe, PipeTransform, Renderer2} from '@angular/core';
import { DomSanitizer,SafeHtml } from '@angular/platform-browser';

@Pipe({
  name: 'capitalize'
})
export class CapitalizePipe implements PipeTransform {
private eleRef=inject(ElementRef);
private renderer=inject(Renderer2);
private domSanitizer=inject(DomSanitizer);
  transform(value: string, allwords=false): SafeHtml {
    if (!value) return "";
    const finalStr= allwords?value.replace(/\b\w/g , char=>{
     const capitalChar= char.toUpperCase();
    return `<span style="background-color:yellow">${capitalChar}</span>`}) :
    `<span style="background-color:'yellow'">${value.slice(0,1).toUpperCase()}</span>`+value.slice(1);

    return this.domSanitizer.bypassSecurityTrustHtml(finalStr)
  }

}
