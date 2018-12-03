import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice02Component } from './practice02.component';

describe('Practice02Component', () => {
  let component: Practice02Component;
  let fixture: ComponentFixture<Practice02Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practice02Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice02Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
