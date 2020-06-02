import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ProTopComponent } from './pro-top.component';

describe('ProTopComponent', () => {
  let component: ProTopComponent;
  let fixture: ComponentFixture<ProTopComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ProTopComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ProTopComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
