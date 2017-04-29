import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MyBitchinComponentComponent } from './my-bitchin-component.component';

describe('MyBitchinComponentComponent', () => {
  let component: MyBitchinComponentComponent;
  let fixture: ComponentFixture<MyBitchinComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MyBitchinComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MyBitchinComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
