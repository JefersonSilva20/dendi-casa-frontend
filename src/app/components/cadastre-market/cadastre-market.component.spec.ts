import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastreNewMarketComponent } from './cadastre-market.component';

describe('RegisterNewMarketComponent', () => {
  let component: CadastreNewMarketComponent;
  let fixture: ComponentFixture<CadastreNewMarketComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastreNewMarketComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastreNewMarketComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
