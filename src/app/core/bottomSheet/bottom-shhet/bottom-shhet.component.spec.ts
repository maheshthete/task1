import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BottomShhetComponent } from './bottom-shhet.component';

describe('BottomShhetComponent', () => {
  let component: BottomShhetComponent;
  let fixture: ComponentFixture<BottomShhetComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BottomShhetComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BottomShhetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
