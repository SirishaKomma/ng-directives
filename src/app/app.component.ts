import { Component } from '@angular/core';
import { HighlightDirective } from './highlight.directive';
import { CommonModule } from '@angular/common';
import { HasPermissionDirective } from './has-permission.directive';
import { TooltipDirective } from './tooltip.directive';
import { CopyToClipboardDirective } from './copy-to-clipboard.directive';
import { CapitalizePipe } from './capitalize.pipe';
import { FilterPipe } from './filter.pipe';

@Component({
  selector: 'app-root',
  imports: [HighlightDirective,HasPermissionDirective,TooltipDirective, CopyToClipboardDirective ,
    CapitalizePipe, FilterPipe , CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
names=['Rishi','Sirisha','Santosh'];
}
