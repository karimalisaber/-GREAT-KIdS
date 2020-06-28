import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AppointemntComponent } from './appointemnt.component';

describe('AppointemntComponent', () => {
  let component: AppointemntComponent;
  let fixture: ComponentFixture<AppointemntComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AppointemntComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AppointemntComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
