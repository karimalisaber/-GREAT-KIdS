import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SuccessPostMessageComponent } from './success-post-message.component';

describe('SuccessPostMessageComponent', () => {
  let component: SuccessPostMessageComponent;
  let fixture: ComponentFixture<SuccessPostMessageComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SuccessPostMessageComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SuccessPostMessageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
