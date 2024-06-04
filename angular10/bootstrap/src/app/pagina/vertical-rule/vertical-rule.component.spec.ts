import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VerticalRuleComponent } from './vertical-rule.component';

describe('VerticalRuleComponent', () => {
  let component: VerticalRuleComponent;
  let fixture: ComponentFixture<VerticalRuleComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VerticalRuleComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VerticalRuleComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
