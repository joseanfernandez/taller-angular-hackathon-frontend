import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice05Component } from './practice05.component';

describe('Practice05Component', () => {
  let component: Practice05Component;
  let fixture: ComponentFixture<Practice05Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practice05Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice05Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
