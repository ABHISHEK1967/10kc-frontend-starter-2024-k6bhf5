import { Component } from "@angular/core";
import { bootstrapApplication } from "@angular/platform-browser";
import "zone.js";
import { CommonModule } from "@angular/common";
import { ButtonComponent } from "./app/button/button.component";
import { FlexLayoutModule } from "@ngbracket/ngx-layout";

import { MatBadgeModule } from "@angular/material/badge";
import { MatIconModule } from "@angular/material/icon";
import { MatButtonModule } from "@angular/material/button";

import { Subject, interval, takeUntil } from "rxjs";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [
    CommonModule,
    ButtonComponent,
    FlexLayoutModule,
    MatBadgeModule,
    MatIconModule,
    MatButtonModule,
  ],
  template: `
    <div
      fxLayout="row"
      fxLayoutAlign="center center"
      style="height: 100vh; width: 100vw;"
    >
      <div style="text-align:center">
        <button
          mat-icon-button
          color="accent"
          matBadge="{{ count }}"
          (click)="resetBadge()"
          [disabled]="count == 0 ? true : false"
        >
          <mat-icon style="color: white;">mail_outline</mat-icon>
        </button>
        <div fxLayout="row" fxLayoutGap="8px" style="padding-top:8px">
          <button mat-raised-button color="primary" (click)="incrementBadge()" [disabled]="!startCounterBoolean">
            Start
          </button>
          <button
            mat-raised-button
            color="accent"
            [disabled]="startCounterBoolean"
            (click)="stopInterval()"
          >
            Stop
          </button>
        </div>
      </div>
    </div>
  `,
})
export class App {
  count: number = 0;
  destroy$: Subject<boolean> = new Subject<boolean>();
  startCounterBoolean: boolean = true;
  incrementBadge(): void {
    this.startCounterBoolean = false;
    interval(300)
      .pipe(takeUntil(this.destroy$))
      .subscribe(() => {
        this.count++;
      });
  }

  resetBadge(): void {
    this.count = 0;
  }

  stopInterval() {
    this.destroy$.next(true);
    this.startCounterBoolean = true;
  }
}

bootstrapApplication(App);
