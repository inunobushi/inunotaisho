import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import portImgContainer from './portfolio.image.component';

describe('portImgContainer', () => {
  let component: portImgContainer;
  let fixture: ComponentFixture<portImgContainer>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ portImgContainer ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(portImgContainer);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});