import { ComponentFixture, TestBed } from '@angular/core/testing';
import { CongratsConfirmPage } from './congrats-confirm.page';

describe('CongratsConfirmPage', () => {
  let component: CongratsConfirmPage;
  let fixture: ComponentFixture<CongratsConfirmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(CongratsConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
