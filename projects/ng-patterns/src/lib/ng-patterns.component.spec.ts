import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { NgPatternsComponent } from './ng-patterns.component';

describe('NgPatternsComponent', () => {
  let component: NgPatternsComponent;
  let fixture: ComponentFixture<NgPatternsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ NgPatternsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(NgPatternsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
