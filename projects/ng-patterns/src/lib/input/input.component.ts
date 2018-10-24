import { Component, forwardRef, OnInit } from '@angular/core';
import { BaseControlComponent } from '../base-control/base-control.component';
import { NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => InputComponent),
    multi: true
  }]
})
export class InputComponent extends BaseControlComponent implements OnInit {


  constructor() {
    super();
  }

  ngOnInit() {
  }

  onValueChange() {
    this.onChange(this.value);
  }
}
