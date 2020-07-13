import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastreSuccessComponent } from './cadastre-success.component';

describe('CadastreSuccessComponent', () => {
  let component: CadastreSuccessComponent;
  let fixture: ComponentFixture<CadastreSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastreSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastreSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
