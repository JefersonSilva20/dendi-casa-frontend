import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UserMarketsComponent } from './user-markets.component';

describe('MyMarketsComponent', () => {
  let component: UserMarketsComponent;
  let fixture: ComponentFixture<UserMarketsComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UserMarketsComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UserMarketsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
