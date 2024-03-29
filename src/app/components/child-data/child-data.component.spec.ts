import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ChildDataComponent } from './child-data.component';

describe('ChildDataComponent', () => {
  let component: ChildDataComponent;
  let fixture: ComponentFixture<ChildDataComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ChildDataComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ChildDataComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
