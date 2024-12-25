import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SortModalComponent } from './sort-modal.component';

describe('SortModalComponent', () => {
  let component: SortModalComponent;
  let fixture: ComponentFixture<SortModalComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [SortModalComponent]
    });
    fixture = TestBed.createComponent(SortModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
