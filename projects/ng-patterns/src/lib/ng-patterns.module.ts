import { NgModule } from '@angular/core';
import { NgPatternsComponent } from './ng-patterns.component';
import { InputComponent } from './input/input.component';
import { BaseControlComponent } from './base-control/base-control.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  imports: [
    FormsModule
  ],
  declarations: [NgPatternsComponent, InputComponent, BaseControlComponent],
  exports: [NgPatternsComponent, InputComponent]
})
export class NgPatternsModule {
}
