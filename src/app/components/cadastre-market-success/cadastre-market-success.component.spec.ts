import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastreMarketSuccessComponent } from './cadastre-market-success.component';

describe('CadastreMarketSuccessComponent', () => {
  let component: CadastreMarketSuccessComponent;
  let fixture: ComponentFixture<CadastreMarketSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ CadastreMarketSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(CadastreMarketSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
