import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DodajZaposlenegaComponent } from './dodaj-zaposlenega.component';

describe('DodajZaposlenegaComponent', () => {
  let component: DodajZaposlenegaComponent;
  let fixture: ComponentFixture<DodajZaposlenegaComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DodajZaposlenegaComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DodajZaposlenegaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
