import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { PovezanoComponent } from './povezano.component';

describe('PovezanoComponent', () => {
  let component: PovezanoComponent;
  let fixture: ComponentFixture<PovezanoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ PovezanoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(PovezanoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
