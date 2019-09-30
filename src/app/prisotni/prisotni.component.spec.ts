import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PrisotniComponent } from './prisotni.component';

describe('PrisotniComponent', () => {
  let component: PrisotniComponent;
  let fixture: ComponentFixture<PrisotniComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PrisotniComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PrisotniComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
