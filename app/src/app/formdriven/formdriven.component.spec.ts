import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormdrivenComponent } from './formdriven.component';

describe('FormdrivenComponent', () => {
  let component: FormdrivenComponent;
  let fixture: ComponentFixture<FormdrivenComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormdrivenComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormdrivenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
