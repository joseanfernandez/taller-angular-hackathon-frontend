import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice06Component } from './practice06.component';

describe('Practice06Component', () => {
  let component: Practice06Component;
  let fixture: ComponentFixture<Practice06Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practice06Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice06Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
