import {
  Directive,
  ElementRef,
  HostListener,
  inject,
  input,
  output,
  Renderer2,
} from '@angular/core';

@Directive({
  selector: '[appCopyToClipboard]',
})
export class CopyToClipboardDirective {
  textToCopy = input('', { alias: 'appCopyToClipboard' });
  copySuccess = output<string>();
  copyError = output<string>();
  elementRef = inject(ElementRef);
  renderer = inject(Renderer2);
  constructor() {}
  @HostListener('click') onMouseClick() {
    console.log('this.textToCopy()', this.textToCopy());
    if (this.textToCopy()) {
      console.log('22');
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        'yellow'
      );

      navigator.clipboard
        .writeText(this.textToCopy())
        .then(() => {
          this.copySuccess.emit('success');
        })
        .catch((err) => {
          this.copyError.emit('error');
        });
    }
  }
  @HostListener('mouseenter') onMouseEnter(){
    this.renderer.setStyle(this.elementRef.nativeElement,'background-color','yellow')
  }
  @HostListener('mouseleave') onMouseLeave() {
    setTimeout(() => {
      this.renderer.setStyle(
        this.elementRef.nativeElement,
        'background-color',
        ''
      );
    }, 1000);
  }
}
