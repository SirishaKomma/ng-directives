import { Directive, TemplateRef, ViewContainerRef, Input } from '@angular/core';

@Directive({
  selector: '[appHasPermission]',
})
export class HasPermissionDirective {
  hasPermission!: boolean;
  constructor(
    private templateRef: TemplateRef<any>,
    private viewContainerRef: ViewContainerRef
  ) {}
  @Input() set appHasPermission(permission: string) {
    this.hasPermission = permission == 'admin';
    console.log('mm',permission,this.hasPermission)
    if(this.hasPermission){
      this.viewContainerRef.createEmbeddedView(this.templateRef);
    }else{
      this.viewContainerRef.clear();
    }
  }

}
