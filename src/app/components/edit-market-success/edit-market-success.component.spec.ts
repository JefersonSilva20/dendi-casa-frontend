import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EditMarketSuccessComponent } from './edit-market-success.component';

describe('EditMarketSuccessComponent', () => {
  let component: EditMarketSuccessComponent;
  let fixture: ComponentFixture<EditMarketSuccessComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EditMarketSuccessComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EditMarketSuccessComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
