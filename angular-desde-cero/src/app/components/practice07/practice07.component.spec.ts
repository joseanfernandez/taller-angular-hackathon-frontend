import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice07Component } from './practice07.component';

describe('Practice07Component', () => {
  let component: Practice07Component;
  let fixture: ComponentFixture<Practice07Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practice07Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice07Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
