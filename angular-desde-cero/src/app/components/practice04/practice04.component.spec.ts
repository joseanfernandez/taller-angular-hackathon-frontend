import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { Practice04Component } from './practice04.component';

describe('Practice04Component', () => {
  let component: Practice04Component;
  let fixture: ComponentFixture<Practice04Component>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ Practice04Component ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(Practice04Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
