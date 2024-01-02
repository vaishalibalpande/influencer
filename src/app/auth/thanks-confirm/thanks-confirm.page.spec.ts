import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ThanksConfirmPage } from './thanks-confirm.page';

describe('ThanksConfirmPage', () => {
  let component: ThanksConfirmPage;
  let fixture: ComponentFixture<ThanksConfirmPage>;

  beforeEach(async(() => {
    fixture = TestBed.createComponent(ThanksConfirmPage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  }));

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
