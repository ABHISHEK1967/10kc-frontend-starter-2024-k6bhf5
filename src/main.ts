import { Component } from '@angular/core';
import { bootstrapApplication } from '@angular/platform-browser';
import 'zone.js';
import { CommonModule } from '@angular/common';
import { ButtonComponent } from './app/button/button.component';
import { FlexLayoutModule } from '@ngbracket/ngx-layout';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [CommonModule, ButtonComponent, FlexLayoutModule],
  template: `
<div fxLayout="row" fxLayoutAlign="center center">
<div fxLayout="row" fxLayoutGap="8px">
    <app-button buttonName="Start"></app-button>
    <app-button buttonName="Stop"></app-button>
  </div>
</div>
  

  `,
})
export class App {}

bootstrapApplication(App);
