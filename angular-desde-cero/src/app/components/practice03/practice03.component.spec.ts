import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice03Component } from './practice03.component';

describe('Practice03Component', () => {
  let component: Practice03Component;
  let fixture: ComponentFixture<Practice03Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practice03Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice03Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
