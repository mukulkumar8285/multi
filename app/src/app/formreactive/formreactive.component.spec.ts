import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormreactiveComponent } from './formreactive.component';

describe('FormreactiveComponent', () => {
  let component: FormreactiveComponent;
  let fixture: ComponentFixture<FormreactiveComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormreactiveComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormreactiveComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
