import { Component, forwardRef, OnInit } from '@angular/core';
import { ControlValueAccessor, NG_VALUE_ACCESSOR } from '@angular/forms';

@Component({
  selector: 'lib-base-control',
  templateUrl: './base-control.component.html',
  styleUrls: ['./base-control.component.css'],
  providers: [{
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BaseControlComponent),
    multi: true
  }]
})
export class BaseControlComponent implements OnInit, ControlValueAccessor {

  protected onChange: any = Function.prototype;
  protected onTouched: any = Function.prototype;

  protected _value: any = null;
  protected _disabled = false;

  constructor() {
  }

  ngOnInit() {
  }

  registerOnChange(fn: any): void {
    this.onChange = fn;
  }

  registerOnTouched(fn: any): void {
    this.onTouched = fn;
  }

  setDisabledState(isDisabled: boolean): void {
    this._disabled = isDisabled;
  }

  writeValue(val: any): void {
    this.value = val;
  }

  get value() {
    return this._value;
  }

  set value(val) {
    this._value = val;
  }

  get disabled() {
    return this._disabled;
  }

}
